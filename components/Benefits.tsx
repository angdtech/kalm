import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Brain, 
  Heart, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users,
  Quote,
  Star
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Improved Mental Clarity",
    description: "Regular meditation and affirmations enhance focus and reduce mental fog.",
    stat: "87% report better focus"
  },
  {
    icon: Heart,
    title: "Reduced Stress & Anxiety",
    description: "Breathing exercises and mood tracking help manage daily stress effectively.",
    stat: "73% feel less anxious"
  },
  {
    icon: Zap,
    title: "Increased Energy Levels",
    description: "Consistent wellness habits boost natural energy and motivation throughout the day.",
    stat: "92% have more energy"
  },
  {
    icon: Shield,
    title: "Better Emotional Resilience",
    description: "Build stronger coping mechanisms through daily mindfulness practices.",
    stat: "78% handle stress better"
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Working Parent",
    content: "Mi Self Care helped me build a consistent mindfulness routine even with my busy schedule. Pico makes it so engaging!",
    rating: 5
  },
  {
    name: "David L.",
    role: "College Student",
    content: "The breathing exercises are perfect for managing exam stress. I love how Mi Self Care tracks my progress and celebrates small wins.",
    rating: 5
  },
  {
    name: "Maya R.",
    role: "Healthcare Worker",
    content: "After long shifts, Mi Self Care's affirmations help me decompress. The mood tracking feature showed me patterns I never noticed.",
    rating: 5
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#C5DCA0]/20 text-[#31545F] border-[#C5DCA0]">
            Proven Benefits
          </Badge>
          <h2 className="text-4xl font-bold text-[#31545F] mb-6">
            Transform Your Wellbeing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join users who have improved their mental health and built lasting 
            wellness habits with Mi Self Care's science-backed approach.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#A8D8EA] to-[#C5DCA0] flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-[#31545F]" />
                </div>
                <h3 className="font-bold text-[#31545F] mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{benefit.description}</p>
                <Badge className="bg-[#579989]/10 text-[#579989] border-[#579989]/20">
                  {benefit.stat}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#31545F] mb-4">What Our Users Say</h3>
            <p className="text-lg text-gray-600">Real stories from the Mi Self Care community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-[#A8D8EA] mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#F9CDAE] fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-[#31545F]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#31545F] to-[#579989] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-8">Join the Growing Community</h3>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-2">1K+</div>
              <div className="text-sm opacity-90">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm opacity-90">Wellness Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5.0★</div>
              <div className="text-sm opacity-90">App Store Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}