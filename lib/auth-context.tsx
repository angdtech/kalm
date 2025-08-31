"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Admin email - you can add more admin emails here
  const adminEmails = ['angelinadyer@icloud.com'];
  const isAdmin = user ? adminEmails.includes(user.email || '') : false;

  useEffect(() => {
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    if (auth) {
      await signInWithEmailAndPassword(auth, email, password);
    } else {
      throw new Error('Firebase auth not configured');
    }
  };

  const signup = async (email: string, password: string) => {
    if (auth) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      throw new Error('Firebase auth not configured');
    }
  };

  const logout = async () => {
    if (auth) {
      await signOut(auth);
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}