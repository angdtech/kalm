import { Button } from "./ui/button";
import { Sparkles, Download, Star, Flame } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const picoCharacter = 'https://res.cloudinary.com/dseqiohhu/image/upload/v1756634555/78e6f3c8978542d2255f9b4159397f29bd31b3b3_by7yu6.png';
const landingImage = 'https://res.cloudinary.com/dseqiohhu/image/upload/v1756638141/IMG_2429_zj5wr6.png';

export function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-br from-[#F5F5F5] via-white to-[#A8D8EA]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-1 bg-[#A8D8EA]/20 px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-[#579989] fill-current" />
                <span className="text-sm text-[#31545F]">Your wellness companion</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#31545F] mb-6 leading-tight">
              Mi Self Care
              <span className="block text-[#579989]">Your Wellness Journey Starts Here</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your daily routine with personalized affirmations, guided breathing exercises, 
              and your adorable companion Pico. Build healthy habits that stick.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              {/* App Store Button */}
              <a href="https://apps.apple.com/us/app/mi-affirmations-mindfulness/id6449880491" className="group">
                <div className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              
              {/* Google Play Button */}
              <a href="https://play.google.com/store/apps/details?id=com.mycompany.affirmapp&hl=en_GB" className="group">
                <div className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
            
            {/* Meet Pico Section */}
            <div className="bg-gradient-to-r from-[#A8D8EA]/10 to-[#C5DCA0]/10 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-4">
                <img src={picoCharacter} alt="Meet Pico" className="w-20 h-20 animate-float" />
                <div>
                  <h3 className="font-bold text-[#31545F] mb-1">Meet Pico, Your Self-Care Pet</h3>
                  <p className="text-gray-600 text-sm">Your adorable companion that grows as you build healthy habits</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#31545F]">1K+</div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#31545F]">5.0★</div>
                <div className="text-sm text-gray-600">App Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#31545F]">10K+</div>
                <div className="text-sm text-gray-600">Sessions</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-[#31545F] to-[#579989] rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl"></div>
                <div className="pt-8 h-full">
                  <img 
                    src={landingImage}
                    alt="Mi Self Care App"
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-[#C5DCA0] p-4 rounded-2xl shadow-lg">
              <Flame className="w-6 h-6 text-[#31545F]" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#FEE2B3] p-4 rounded-2xl shadow-lg">
              <div className="text-2xl">✨</div>
            </div>
            <div className="absolute top-20 -right-8 bg-[#EFECCA] p-3 rounded-xl shadow-lg">
              <div className="text-sm text-[#31545F] font-medium">+33 points</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}