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
              <div className="w-10 h-10 bg-[#579989]/20 rounded-lg flex items-center justify-center hover:bg-[#579989]/30 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-[#579989]/20 rounded-lg flex items-center justify-center hover:bg-[#579989]/30 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-[#579989]/20 rounded-lg flex items-center justify-center hover:bg-[#579989]/30 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Daily Affirmations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Breathing Exercises</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mood Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quest System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pico Pet</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bug Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feature Requests</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
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