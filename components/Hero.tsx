import { Button } from "./ui/button";
import { Sparkles, Download, Star, Flame } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import picoCharacter from 'figma:asset/78e6f3c8978542d2255f9b4159397f29bd31b3b3.png';
import hydrationQuest from 'figma:asset/a42d38bee3423997c4bc8cd5e2e2b5ab4f01b0b3.png';

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
              <Button size="lg" className="bg-[#579989] hover:bg-[#31545F] text-white px-8 py-4">
                <Download className="mr-2 h-5 w-5" />
                Download Free
              </Button>
              <Button size="lg" variant="outline" className="border-[#579989] text-[#579989] hover:bg-[#579989] hover:text-white px-8 py-4">
                <Sparkles className="mr-2 h-5 w-5" />
                See Features
              </Button>
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
                    src={hydrationQuest}
                    alt="Mi Self Care App - Hydration Quest"
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