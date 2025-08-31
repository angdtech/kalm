import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Heart, Smile, Users, Star, Download, Smartphone } from "lucide-react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Screenshots } from "../components/Screenshots";
import { Benefits } from "../components/Benefits";
import { Download as DownloadSection } from "../components/Download";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <img 
                src="https://res.cloudinary.com/dseqiohhu/image/upload/v1756638141/IMG_2429_zj5wr6.png" 
                alt="Mi Self Care Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="text-2xl font-bold text-[#31545F]">Mi Self Care</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-[#31545F] hover:text-[#579989] transition-colors">Features</a>
              <a href="#screenshots" className="text-[#31545F] hover:text-[#579989] transition-colors">Screenshots</a>
              <a href="#benefits" className="text-[#31545F] hover:text-[#579989] transition-colors">Benefits</a>
              <a href="#download" className="text-[#31545F] hover:text-[#579989] transition-colors">Download</a>
            </div>

            <div className="flex gap-3">
              <a href="https://apps.apple.com/us/app/mi-affirmations-mindfulness/id6449880491" className="hidden sm:block">
                <Button size="sm" className="bg-[#579989] hover:bg-[#31545F] text-white text-xs px-3 py-2">
                  iOS
                </Button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.mycompany.affirmapp&hl=en_GB" className="hidden sm:block">
                <Button size="sm" variant="outline" className="border-[#579989] text-[#579989] hover:bg-[#579989] hover:text-white text-xs px-3 py-2">
                  Android
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Benefits />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  );
}