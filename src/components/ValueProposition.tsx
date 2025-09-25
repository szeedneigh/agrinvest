import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const investorFeatures = [
  "Minimum ₱50 investment",
  "Gamified experience with badges",
  "Real-time impact tracking",
  "Community-driven approach",
];

const farmerFeatures = [
  "No interest, no debt burden",
  "Market price transparency",
  "Community support network",
  "Agricultural insights",
];

export function ValueProposition() {
  return (
    <section id="about" className="py-20 sm:py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Two Sides, <span className="text-green-600">One Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re an investor seeking impact or a farmer needing capital, AGRiNVEST bridges the gap for mutual prosperity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* For Investors */}
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-green-50 via-green-100 to-green-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="text-center relative z-10 pb-6">
              <Badge className="mb-6 w-fit mx-auto bg-green-600 text-white px-6 py-2 text-sm font-bold tracking-wide shadow-lg">
                FOR INVESTORS
              </Badge>
              <h3 className="text-3xl font-black text-gray-900 sm:text-4xl mb-4">
                Start Your Impact Journey
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join thousands of investors creating meaningful change while building wealth through sustainable agriculture.
              </p>
            </CardHeader>
            <CardContent className="relative z-10 pt-0">
              <div className="space-y-4 mb-8">
                {investorFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 shadow-lg">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="#get-started" className="block">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Start Investing →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* For Farmers */}
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="text-center relative z-10 pb-6">
              <Badge className="mb-6 w-fit mx-auto bg-yellow-600 text-white px-6 py-2 text-sm font-bold tracking-wide shadow-lg">
                FOR FARMERS
              </Badge>
              <h3 className="text-3xl font-black text-gray-900 sm:text-4xl mb-4">
                Interest-Free Capital & Market Data
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Access the capital you need without the burden of interest, plus real-time market insights to maximize your harvest.
              </p>
            </CardHeader>
            <CardContent className="relative z-10 pt-0">
              <div className="space-y-4 mb-8">
                {farmerFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-600 shadow-lg">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="#get-started" className="block">
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Apply for Funding →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="mt-24 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-yellow-100 rounded-3xl opacity-30 blur-3xl" />
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-200">
            <h3 className="text-4xl font-black text-gray-900 sm:text-5xl mb-6">
              Ready to Make a <span className="text-green-600">Difference</span>?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Join the movement that&apos;s transforming Philippine agriculture, one investment at a time.
            </p>
            <Link href="#get-started">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white font-bold px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                Join the Movement
                <span className="ml-2">🚀</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
