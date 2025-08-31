"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Label } from "../../components/ui/label";
import { LogOut, Mail, Users, Crown, RefreshCw } from "lucide-react";
import { useAuth } from "../../lib/auth-context";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../lib/firebase";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: any;
}

export default function DashboardPage() {
  const { user, logout, loading, isAdmin } = useAuth();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (isAdmin) {
      fetchSubmissions();
    }
  }, [isAdmin]);

  const fetchSubmissions = async () => {
    if (!db) {
      setLoadingSubmissions(false);
      return;
    }
    
    try {
      const q = query(
        collection(db, "contactSubmissions"),
        orderBy("timestamp", "desc")
      );
      const querySnapshot = await getDocs(q);
      const submissionsList: ContactSubmission[] = [];
      
      querySnapshot.forEach((doc) => {
        submissionsList.push({
          id: doc.id,
          ...doc.data()
        } as ContactSubmission);
      });
      
      setSubmissions(submissionsList);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoadingSubmissions(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#A8D8EA]/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#579989] mx-auto mb-4"></div>
          <p className="text-[#31545F]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#A8D8EA]/20">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-[#31545F]">Mi Self Care Dashboard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user.email}
              </span>
              {isAdmin && (
                <Badge className="bg-[#579989] text-white">Admin</Badge>
              )}
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-[#579989] text-[#579989] hover:bg-[#579989] hover:text-white"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#31545F] mb-2">
            {isAdmin ? "Admin Dashboard" : "My Account"}
          </h1>
          <p className="text-gray-600">
            {isAdmin 
              ? "Manage contact submissions and user accounts" 
              : "Manage your Mi Self Care account and premium access"
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="flex items-center p-6">
                <Users className="h-8 w-8 text-[#579989]" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Account Status</p>
                  <p className="text-2xl font-bold text-[#31545F]">
                    {user.emailVerified ? "Verified" : "Free"}
                  </p>
                </div>
              </CardContent>
            </Card>

            {isAdmin && (
              <>
                <Card>
                  <CardContent className="flex items-center p-6">
                    <Mail className="h-8 w-8 text-[#579989]" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Contact Submissions</p>
                      <p className="text-2xl font-bold text-[#31545F]">{submissions.length}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center p-6">
                    <Crown className="h-8 w-8 text-[#579989]" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">Admin Access</p>
                      <p className="text-2xl font-bold text-[#31545F]">Active</p>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          {/* Contact Submissions (Admin Only) */}
          {isAdmin && (
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-[#31545F]">Contact Submissions</CardTitle>
                    <Button
                      onClick={fetchSubmissions}
                      size="sm"
                      variant="outline"
                      disabled={loadingSubmissions}
                    >
                      <RefreshCw className={`w-4 h-4 mr-1 ${loadingSubmissions ? 'animate-spin' : ''}`} />
                      Refresh
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {loadingSubmissions ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#579989] mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading submissions...</p>
                    </div>
                  ) : submissions.length === 0 ? (
                    <div className="text-center py-8">
                      <Mail className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600">No contact submissions yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {submissions.map((submission) => (
                        <div key={submission.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-[#31545F]">{submission.name}</h3>
                              <p className="text-sm text-gray-600">{submission.email}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {submission.timestamp?.toDate?.()?.toLocaleDateString() || 'Recent'}
                            </Badge>
                          </div>
                          <h4 className="font-medium text-gray-800 mb-2">{submission.subject}</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{submission.message}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {/* User Account Section */}
          {!isAdmin && (
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#31545F]">Account Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Email</Label>
                      <p className="text-[#31545F]">{user.email}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-600">Account Type</Label>
                      <p className="text-[#31545F]">Free Account</p>
                    </div>
                    <div className="pt-4">
                      <Button className="bg-[#579989] hover:bg-[#31545F] text-white">
                        <Crown className="w-4 h-4 mr-2" />
                        Upgrade to Premium
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}