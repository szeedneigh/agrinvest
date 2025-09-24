import Link from "next/link";
import { Sprout, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Mission", href: "#impact" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "FAQ", href: "/faq" },
    { name: "Community", href: "/community" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Compliance", href: "/compliance" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[length:50px_50px] opacity-30" />
      
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 relative">
        {/* Enhanced Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-700 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <Sprout className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-black text-white group-hover:text-green-400 transition-colors duration-300">
                AGRiNVEST
              </span>
            </Link>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Connecting Filipino farmers with investors to create sustainable agricultural growth.
              <span className="block mt-2 text-green-400 font-semibold">
                Interest-free capital, market transparency, and real community impact.
              </span>
            </p>

            {/* Enhanced Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group hover:text-green-400 transition-colors duration-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600/20 group-hover:bg-green-600/30 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-green-400" />
                </div>
                <span className="font-medium">hello@agrinvest.ph</span>
              </div>
              <div className="flex items-center gap-3 group hover:text-green-400 transition-colors duration-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600/20 group-hover:bg-green-600/30 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-green-400" />
                </div>
                <span className="font-medium">+63 (2) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 group hover:text-green-400 transition-colors duration-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600/20 group-hover:bg-green-600/30 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-green-400" />
                </div>
                <span className="font-medium">Manila, Philippines</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Stay updated:</span>
              <Link href="#get-started">
                <button className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors">
                  Subscribe to Newsletter
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 lg:flex-row">
            <p>
              © 2025 AGRiNVEST. All rights reserved. Connecting farmers and investors for a sustainable future.
            </p>
            <div className="flex items-center gap-4">
              <span>SEC Registration No. CS202500123</span>
              <span>•</span>
              <span>Registered Investment Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
