"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle } from "lucide-react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("investor");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <section id="get-started" className="bg-green-600 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Welcome to the Movement! 🌾
            </h2>
            <p className="mt-4 text-xl text-green-100">
              Thank you for joining AGRiNVEST! We&apos;ll be in touch soon with early access details.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
                onClick={() => setIsSuccess(false)}
              >
                Join Another Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="get-started" className="bg-gradient-to-br from-green-600 via-green-500 to-yellow-500 py-20 sm:py-32 lg:py-40 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl mb-6">
            Join the <span className="text-yellow-300">Movement</span>
          </h2>
          <p className="text-xl text-green-50 sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Be first to support Filipino farmers when we launch
          </p>
        </div>

        <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Enhanced Email Input */}
            <div className="space-y-4">
              <Label htmlFor="email" className="text-white text-lg font-semibold block">
                Email Address
              </Label>
              <div className="relative group">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-16 border-2 border-white/30 bg-white/20 text-white placeholder:text-green-200 focus:ring-4 focus:ring-white/50 focus:border-white text-lg rounded-2xl backdrop-blur-sm shadow-lg group-hover:border-white/50 transition-all duration-300"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="h-12 px-8 bg-white text-green-600 hover:bg-green-50 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                        Joining...
                      </span>
                    ) : (
                      "Get Started"
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced User Type Selection */}
            <div className="space-y-6">
              <Label className="text-white text-lg font-semibold block">
                I am:
              </Label>
              <RadioGroup
                value={userType}
                onValueChange={setUserType}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="relative group">
                  <RadioGroupItem
                    value="investor"
                    id="investor"
                    className="sr-only"
                  />
                  <Label 
                    htmlFor="investor" 
                    className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      userType === 'investor' 
                        ? 'border-white bg-white/20 shadow-xl' 
                        : 'border-white/30 bg-white/10 hover:border-white/50 hover:bg-white/15'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        userType === 'investor' ? 'border-white bg-white' : 'border-white/50'
                      }`}>
                        {userType === 'investor' && (
                          <div className="w-3 h-3 bg-green-600 rounded-full" />
                        )}
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">I&apos;m an Investor</div>
                        <div className="text-green-100 text-sm">Ready to make impact</div>
                      </div>
                    </div>
                  </Label>
                </div>
                
                <div className="relative group">
                  <RadioGroupItem
                    value="farmer"
                    id="farmer"
                    className="sr-only"
                  />
                  <Label 
                    htmlFor="farmer" 
                    className={`block p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      userType === 'farmer' 
                        ? 'border-white bg-white/20 shadow-xl' 
                        : 'border-white/30 bg-white/10 hover:border-white/50 hover:bg-white/15'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        userType === 'farmer' ? 'border-white bg-white' : 'border-white/50'
                      }`}>
                        {userType === 'farmer' && (
                          <div className="w-3 h-3 bg-green-600 rounded-full" />
                        )}
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">I&apos;m a Farmer</div>
                        <div className="text-green-100 text-sm">Seeking capital support</div>
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Enhanced Privacy Notice */}
            <div className="text-center">
              <p className="text-green-100 leading-relaxed">
                By signing up, you agree to our{" "}
                <a href="/privacy" className="underline hover:text-white font-semibold transition-colors duration-300">
                  Privacy Policy
                </a>
                {" "}and{" "}
                <a href="/terms" className="underline hover:text-white font-semibold transition-colors duration-300">
                  Terms of Service
                </a>
              </p>
            </div>
          </form>

          {/* Enhanced Additional Info */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center rounded-2xl bg-white/20 px-6 py-3 border border-white/30 shadow-lg backdrop-blur-sm">
              <span className="text-green-100 font-semibold flex items-center gap-2">
                <span className="animate-bounce">🚀</span>
                Early access launching Q1 2025
                <span className="animate-pulse">✨</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
