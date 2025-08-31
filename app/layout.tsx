import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mi Self Care - Your Wellness Journey Starts Here',
  description: 'Transform your daily routine with personalized affirmations, guided breathing exercises, and your adorable companion Pico. Build healthy habits that stick.',
  keywords: 'self care, mental health, wellness, meditation, breathing exercises, mood tracking, affirmations, mindfulness',
  authors: [{ name: 'Mi Self Care Team' }],
  creator: 'Mi Self Care',
  publisher: 'Mi Self Care',
  openGraph: {
    title: 'Mi Self Care - Your Wellness Journey Starts Here',
    description: 'Transform your daily routine with personalized affirmations, guided breathing exercises, and your adorable companion Pico.',
    url: 'https://miselfcare.app',
    siteName: 'Mi Self Care',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mi Self Care App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mi Self Care - Your Wellness Journey Starts Here',
    description: 'Transform your daily routine with personalized affirmations, guided breathing exercises, and your adorable companion Pico.',
    images: ['/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#31545F" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}