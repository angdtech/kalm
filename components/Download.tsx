import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Download as DownloadIcon, 
  Smartphone, 
  Gift, 
  Crown, 
  Check 
} from "lucide-react";

export function Download() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-[#F5F5F5] to-[#A8D8EA]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Download Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#F9CDAE]/20 text-[#31545F] border-[#F9CDAE]">
            Get Started Today
          </Badge>
          <h2 className="text-4xl font-bold text-[#31545F] mb-6">
            Download Mi Self Care & Start Your Wellness Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join users who have transformed their mental health with Mi Self Care. 
            Start your free journey today and unlock the power of consistent wellness habits.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            {/* App Store */}
            <a href="https://apps.apple.com/us/app/mi-affirmations-mindfulness/id6449880491" className="group cursor-pointer">
              <div className="flex items-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 group-hover:scale-105">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm opacity-90">Download on the</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </div>
            </a>

            {/* Google Play */}
            <a href="https://play.google.com/store/apps/details?id=com.mycompany.affirmapp&hl=en_GB" className="group cursor-pointer">
              <div className="flex items-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 group-hover:scale-105">
                <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm opacity-90">Get it on</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="relative border-2 border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Gift className="w-12 h-12 mx-auto mb-4 text-[#579989]" />
                <h3 className="text-2xl font-bold text-[#31545F] mb-2">Free Forever</h3>
                <div className="text-4xl font-bold text-[#31545F] mb-2">$0</div>
                <p className="text-gray-600">Perfect to get started</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#579989] mr-3" />
                  <span className="text-gray-600">Daily affirmations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#579989] mr-3" />
                  <span className="text-gray-600">Basic breathing exercises</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#579989] mr-3" />
                  <span className="text-gray-600">Mood tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#579989] mr-3" />
              <span className="text-gray-600">Pico pet companion</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#579989] mr-3" />
                  <span className="text-gray-600">Basic quest system</span>
                </li>
              </ul>

              <a href="https://link.dailykalm.com/hjI">
                <Button className="w-full bg-[#579989] hover:bg-[#31545F] text-white">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download Free
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-[#579989] hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-[#579989] text-white px-4 py-1">Most Popular</Badge>
            </div>
            
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Crown className="w-12 h-12 mx-auto mb-4 text-[#579989]" />
                <h3 className="text-2xl font-bold text-[#31545F] mb-2">Mi Self Care Premium</h3>
                <div className="text-4xl font-bold text-[#31545F] mb-2">
                  $2.69
                  <span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Unlock your full potential</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#579989] mr-3" />
                  <span className="text-gray-600">Everything in Free</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#579989] mr-3" />
                  <span className="text-gray-600 font-semibold">Ad-free experience</span>
                </li>
              </ul>

              <Button className="w-full bg-[#31545F] hover:bg-[#579989] text-white">
                <Crown className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-3">2-week free trial, cancel anytime</p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Notice */}
        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Available for iOS and Android. Download now and start building healthier habits 
            with your new companion Pico. Sign up to get started on your wellness journey.
          </p>
        </div>
      </div>
    </section>
  );
}