import { Separator } from "./ui/separator";
import { Heart, Mail, Twitter, Instagram, Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#31545F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#579989] to-[#A8D8EA] rounded-full flex items-center justify-center">
                <span className="text-[#31545F] font-bold text-xs">MSC</span>
              </div>
              <span className="text-2xl font-bold">Mi Self Care</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your personal wellness companion for building healthy habits and improving mental health.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@kalmdaily?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#579989]/20 rounded-lg flex items-center justify-center hover:bg-[#579989]/30 transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/kalmdaily/?igsh=YWhjbnhzb21qMTY2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#579989]/20 rounded-lg flex items-center justify-center hover:bg-[#579989]/30 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#features" className="hover:text-white transition-colors">Daily Affirmations</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Breathing Exercises</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Mood Tracking</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Quest System</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Pico Pet</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><span className="text-gray-400">Support available in-app</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/privacypolicy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[#579989]/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#F9CDAE] fill-current" />
            <span>for your wellness journey</span>
          </div>
          
          <div className="flex items-center space-x-6 text-gray-300">
            <span className="text-sm">© 2024 Mi Self Care. All rights reserved.</span>
            <div className="flex items-center space-x-1">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm">iOS & Android</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}