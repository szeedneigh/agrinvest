import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-yellow-500 py-20 sm:py-32 lg:py-40"
      aria-label="Hero section with main call to action"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced Announcement Banner */}
          <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/15 px-6 py-3 backdrop-blur-md shadow-lg hover:bg-white/20 transition-all duration-300">
            <span className="text-sm font-semibold text-white flex items-center gap-2">
              <span className="animate-bounce">🌾</span>
              Connecting farmers and investors since 2025
              <span className="ml-2 text-yellow-300">→</span>
            </span>
          </div>

          {/* Enhanced Main Headline */}
          <h1 className="mb-8 text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl leading-none">
            <span className="block mb-2">Turn Your Spare</span>
            <span className="relative inline-block mx-2">
              <span className="relative z-10 text-yellow-300 drop-shadow-lg">₱50</span>
              <div className="absolute inset-0 bg-yellow-400/20 blur-xl scale-110 animate-pulse" />
              <svg
                className="absolute -bottom-3 left-0 h-4 w-full text-yellow-300 drop-shadow-md"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q50,0 100,8 Q50,16 0,8"
                  fill="currentColor"
                  className="animate-pulse"
                />
              </svg>
            </span>
            <span className="block mt-2">Into</span>
            <span className="relative inline-block text-yellow-300 drop-shadow-lg animate-pulse">
              HEROIC IMPACT
            </span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="mb-10 max-w-4xl mx-auto text-xl text-green-50/90 sm:text-2xl lg:text-3xl leading-relaxed font-medium">
            Support Filipino farmers with <span className="font-bold text-yellow-300">interest-free capital</span> while building <span className="font-bold text-white">meaningful wealth</span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-center mb-12">
            <Link href="#get-started">
              <Button
                size="lg"
                className="group relative w-full sm:w-auto px-8 py-4 bg-white text-green-600 hover:bg-green-50 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-green-600"
                aria-label="Get early access to AGRiNVEST platform"
              >
                <span className="relative z-10">Get Early Access</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-green-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
            <Link href="#about">
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold text-lg backdrop-blur-sm bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-green-600"
                aria-label="Learn more about AGRiNVEST"
              >
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
              </Button>
            </Link>
          </div>

          {/* Enhanced Trust Indicators */}
          <div 
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
            role="group"
            aria-label="Platform statistics and achievements"
          >
            <div className="flex items-center gap-3">
              <Badge className="bg-white/25 text-white border border-white/30 px-4 py-2 font-semibold backdrop-blur-sm shadow-lg">
                <span className="text-yellow-300 font-bold" aria-label="1,000 plus">1,000+</span> Farmers Supported
              </Badge>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <Badge className="bg-white/25 text-white border border-white/30 px-4 py-2 font-semibold backdrop-blur-sm shadow-lg">
                <span className="text-yellow-300 font-bold" aria-label="5 million pesos plus">₱5M+</span> Capital Invested
              </Badge>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <Badge className="bg-white/25 text-white border border-white/30 px-4 py-2 font-semibold backdrop-blur-sm shadow-lg">
                <span className="text-yellow-300 font-bold" aria-label="85 percent">85%</span> Success Rate
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements - Decorative only */}
      <div className="absolute left-8 top-1/4 hidden text-green-200 lg:block" aria-hidden="true">
        <div className="animate-bounce">
          <div className="h-20 w-20 rounded-full bg-white/15 backdrop-blur-sm shadow-2xl border border-white/20" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-400/30 to-yellow-400/30 animate-pulse" />
        </div>
      </div>
      <div className="absolute right-8 top-1/3 hidden text-yellow-200 lg:block" aria-hidden="true">
        <div className="animate-pulse">
          <div className="h-16 w-16 rounded-full bg-white/15 backdrop-blur-sm shadow-2xl border border-white/20" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-400/30 to-green-400/30 animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
      <div className="absolute bottom-12 left-1/4 hidden text-green-300 lg:block" aria-hidden="true">
        <div className="animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="h-12 w-12 rounded-full bg-white/15 backdrop-blur-sm shadow-2xl border border-white/20" />
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-green-400/40 to-white/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </section>
  );
}
