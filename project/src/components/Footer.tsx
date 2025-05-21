import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "./ui/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 bg-gradient-to-t from-indigo-900 to-transparent text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900/80 to-transparent opacity-80" />
        <div className="absolute inset-0 animate-diagonal-stripes opacity-10 mix-blend-lighten" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="footer-logo-wrapper mb-4">
              <img
                src="/images/shield-logo.png"
                alt="Aksarben Logo"
                className="footer-logo"
              />
              <span className="footer-company-name text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 via-white via-red-400 to-blue-500 animate-fastSweep">
                Aksarben Locksmiths
              </span>
            </div>
            <p className="mb-4 text-white">
              Professional locksmith services available 24/7 throughout Omaha and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/AksarbenLocksmithsLLC/"
                className="text-blue-500 hover:text-blue-400 transition-colors transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-9 w-9 md:h-10 md:w-10" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white hover:text-red-400 transition-colors duration-200">
                  Residential Locksmith
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white hover:text-red-400 transition-colors duration-200">
                  Automotive Locksmith
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white hover:text-red-400 transition-colors duration-200">
                  Emergency Lockouts
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white hover:text-red-400 transition-colors duration-200">
                  Key Duplication
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white hover:text-red-400 transition-colors duration-200">
                  Lock Repair & Installation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#emergency" className="text-white hover:text-red-400 transition-colors">
                  Emergency Service
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-red-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#prices" className="text-white hover:text-red-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white hover:text-red-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#areas" className="text-white hover:text-red-400 transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-red-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-red-400 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">Phone:</span>
                <a href="tel:4025566715" className="text-gray-300 hover:text-red-400 transition-colors">
                  (402) 556-6715
                </a>
              </li>
              <li className="flex items-start flex-col md:flex-row max-w-[220px]">
                <span className="text-red-500 mr-2">Email:</span>
                <a
                  href="mailto:info@aksarbenlocksmiths.com"
                  className="text-gray-300 hover:text-red-400 transition-colors break-all text-sm leading-tight"
                >
                  info@aksarbenlocksmiths.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">Hours:</span>
                <span className="text-gray-300">
                  24/7 Emergency Service
                </span>
              </li>
              <li className="mt-4">
                <a
                  href="tel:4025566715"
                  className="block w-full max-w-[340px] mx-auto mt-6 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 hover:from-red-500 hover:to-red-500 text-white text-center text-xl font-extrabold tracking-wide px-8 py-4 rounded-full shadow-[0_0_25px_rgba(255,0,0,0.6)] transition-all duration-300 transform hover:scale-105 animate-brightPulse animate-gradient-slow"
                >
                  📞 Call Now
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Aksarben Locksmiths. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}