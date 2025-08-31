import { NextResponse } from 'next/server';

let adminDb: any = null;

// Initialize Firebase Admin only if environment variables are available
if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
  const { initializeApp, getApps, cert } = require('firebase-admin/app');
  const { getFirestore } = require('firebase-admin/firestore');
  
  if (getApps().length === 0) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }
  
  adminDb = getFirestore();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Store in Firebase (if configured)
    if (adminDb) {
      const submissionData = {
        name,
        email,
        subject,
        message,
        timestamp: new Date(),
      };

      await adminDb.collection('contactSubmissions').add(submissionData);
    } else {
      console.log('Contact form submission (Firebase not configured):', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
    }

    // Email service setup - you'll need to configure one of these:
    
    // Option 1: Using Resend (recommended)
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // 
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: 'angelinadyer@icloud.com',
    //   subject: `Contact Form: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}