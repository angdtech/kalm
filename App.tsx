import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Heart, Smile, Users, Star, Download, Smartphone } from "lucide-react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Screenshots } from "./components/Screenshots";
import { Benefits } from "./components/Benefits";
import { Download as DownloadSection } from "./components/Download";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#579989] to-[#31545F] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">MSC</span>
              </div>
              <span className="text-2xl font-bold text-[#31545F]">Mi Self Care</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-[#31545F] hover:text-[#579989] transition-colors">Features</a>
              <a href="#screenshots" className="text-[#31545F] hover:text-[#579989] transition-colors">Screenshots</a>
              <a href="#benefits" className="text-[#31545F] hover:text-[#579989] transition-colors">Benefits</a>
              <a href="#download" className="text-[#31545F] hover:text-[#579989] transition-colors">Download</a>
            </div>

            <Button className="bg-[#579989] hover:bg-[#31545F] text-white">
              Get Started
            </Button>
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