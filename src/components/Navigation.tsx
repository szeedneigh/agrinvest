"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "About", href: "#about" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Impact", href: "#impact" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-green-100/20 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Enhanced Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-700 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <Sprout className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-black text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            AGRiNVEST
          </span>
        </Link>

        {/* Enhanced Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold text-gray-700 hover:text-green-600 transition-all duration-300 relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Enhanced Desktop CTA */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link href="/signin">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600 hover:bg-green-50 font-semibold">
              Sign In
            </Button>
          </Link>
          <Link href="#get-started">
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Early Access
            </Button>
          </Link>
        </div>

        {/* Enhanced Mobile menu button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden p-2 hover:bg-green-50 hover:text-green-600 transition-all duration-300"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-white/95 backdrop-blur-md border-l border-green-100">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3 pb-4 border-b border-green-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-700 shadow-lg">
                    <Sprout className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-black text-gray-900">AGRiNVEST</span>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-green-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTAs */}
                <div className="space-y-4 pt-6 border-t border-green-100">
                  <Link href="/signin" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg py-6 hover:bg-green-50 hover:text-green-600">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="#get-started" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg shadow-lg">
                      Get Early Access
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
