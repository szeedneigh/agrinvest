import { UserPlus, Sprout, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Sign Up & Fund",
    description: "Create your account and add money to your wallet",
    icon: UserPlus,
    color: "bg-blue-600",
  },
  {
    number: 2,
    title: "Choose Projects",
    description: "Browse farmer projects and invest from ₱50",
    icon: Sprout,
    color: "bg-green-600",
  },
  {
    number: 3,
    title: "Track Impact",
    description: "Monitor progress and see your impact grow",
    icon: TrendingUp,
    color: "bg-yellow-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 sm:py-32 lg:py-40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            How <span className="text-green-600">AGRiNVEST</span> Works
          </h2>
          <p className="text-xl text-gray-600 sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Get started in just <span className="font-bold text-green-600">three simple steps</span> and begin making impact today
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-12 h-0.5 bg-gradient-to-r from-green-300 to-yellow-300 transform translate-x-0 z-0">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-yellow-400 rounded-full transform -translate-y-1/2 animate-pulse" />
                </div>
              )}
              
              <Card className="relative overflow-hidden border-0 bg-white shadow-2xl hover:shadow-3xl group-hover:scale-105 transition-all duration-500">
                <CardContent className="p-10 text-center">
                  {/* Enhanced Step Number */}
                  <div className="mb-8 flex items-center justify-center relative">
                    <div className={`flex h-20 w-20 items-center justify-center rounded-full ${step.color} text-white shadow-2xl relative z-10`}>
                      <span className="text-3xl font-black">{step.number}</span>
                    </div>
                    <div className={`absolute inset-0 ${step.color} rounded-full opacity-20 scale-125 group-hover:scale-150 transition-transform duration-500`} />
                  </div>

                  {/* Enhanced Icon */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} bg-opacity-10 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <step.icon className={`h-8 w-8 ${step.color.replace('bg-', 'text-')} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div>
                    <h3 className="mb-4 text-2xl font-black text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>

                {/* Enhanced Decorative Element */}
                <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-green-400 via-blue-400 to-yellow-400 group-hover:h-3 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center relative">
          <div className="bg-gradient-to-r from-green-600 to-yellow-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white sm:text-4xl mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                Join thousands of investors and farmers making a difference
              </p>
              <a 
                href="#get-started" 
                className="inline-flex items-center justify-center rounded-2xl bg-white text-green-600 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl hover:bg-green-50 focus:outline-none focus:ring-4 focus:ring-white/50 transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
