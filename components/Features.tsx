import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Heart, 
  Smile, 
  Wind, 
  Target, 
  BookOpen, 
  Droplets,
  Calendar,
  Gift,
  BarChart3,
  Bell
} from "lucide-react";

const features = [
  {
    icon: Smile,
    title: "Daily Affirmations",
    description: "Start each day with personalized positive affirmations tailored to your goals and mood.",
    color: "bg-[#A8D8EA]",
    badge: "Popular"
  },
  {
    icon: Wind,
    title: "Breathing Exercises",
    description: "Guided breathing sessions with beautiful animations and calming background music.",
    color: "bg-[#C5DCA0]",
    badge: null
  },
  {
    icon: Heart,
    title: "Mood Tracking",
    description: "Track your emotional well-being with detailed insights and progress visualization.",
    color: "bg-[#F9CDAE]",
    badge: "Insights"
  },
  {
    icon: Target,
    title: "Quest System",
    description: "Complete wellness activities to energize your Pico companion and build healthy habits.",
    color: "bg-[#EFECCA]",
    badge: "Gamified"
  },
  {
    icon: BookOpen,
    title: "Gratitude Journal",
    description: "Reflect on positive moments with our beautiful journaling experience.",
    color: "bg-[#A8D8EA]",
    badge: null
  },
  {
    icon: Droplets,
    title: "Hydration Tracking",
    description: "Stay hydrated with gentle reminders and track your daily water intake.",
    color: "bg-[#C5DCA0]",
    badge: null
  },
  {
    icon: Calendar,
    title: "Smart Reminders",
    description: "Never miss your wellness routine with personalized notification scheduling.",
    color: "bg-[#F9CDAE]",
    badge: null
  },
  {
    icon: Gift,
    title: "Pico Pet System",
    description: "Your adorable companion grows and celebrates your wellness achievements.",
    color: "bg-[#EFECCA]",
    badge: "Unique"
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description: "Visualize your wellness journey with detailed progress tracking and streak management.",
    color: "bg-[#A8D8EA]",
    badge: null
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#579989]/10 text-[#579989] border-[#579989]/20">
            Core Features
          </Badge>
          <h2 className="text-4xl font-bold text-[#31545F] mb-6">
            Everything You Need for Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mi Self Care combines proven wellness techniques with gamification to make building healthy habits 
            enjoyable and sustainable. Your journey to better mental health starts here.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${feature.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-[#31545F]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-[#31545F]">{feature.title}</h3>
                      {feature.badge && (
                        <Badge variant="secondary" className="text-xs bg-[#579989]/10 text-[#579989]">
                          {feature.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}