import { Phone, Menu, X } from "lucide-react";
import { Link } from "./ui/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsTablet(window.innerWidth < 1040);
    };

    setMounted(true);
    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-200",
        isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
      )}>
        <div className="container mx-auto px-4 flex justify-between items-center relative">
          <div className="flex items-center gap-2 px-4">
            <img src="/images/shield-logo.png" alt="Aksarben Logo" className="logo-tablet-fix" />
            <h1 className="company-name-tablet-fix font-bold text-xl md:text-2xl">Aksarben Locksmiths</h1>
          </div>

          {isTablet ? (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-lg flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <nav className="flex items-center gap-8">
                <Link href="#emergency" className="text-sm font-medium text-gray-800 hover:text-red-600 transition">Emergency</Link>
                <Link href="#services" className="text-sm font-medium text-gray-800 hover:text-red-600 transition">Services</Link>
                <Link href="#areas" className="text-sm font-medium text-gray-800 hover:text-red-600 transition">Areas</Link>
                <Link href="#prices" className="text-sm font-medium text-gray-800 hover:text-red-600 transition">Prices</Link>
                <Link href="#testimonials" className="text-sm font-medium text-gray-800 hover:text-red-600 transition">Testimonials</Link>
                <Link href="#contact" className="text-sm font-medium text-gray-800 hover:text-red-600 transition">Contact</Link>
              </nav>
              <Button asChild size="sm" variant="destructive" className="ml-4 rounded-full shadow-md hover:shadow-lg transition-all">
                <a href="tel:4025566715" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          )}
        </div>
      </header>

      {isTablet && menuOpen && (
        <div className="fixed top-[72px] left-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4 space-y-2">
          {[
            { label: "Emergency", href: "#emergency" },
            { label: "Services", href: "#services" },
            { label: "Areas", href: "#areas" },
            { label: "Prices", href: "#prices" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block w-full text-center py-2 text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {isTablet && (
        <a
          href="tel:4025566715"
          className="fixed bottom-5 right-5 z-50 px-4 py-2 rounded-full bg-red-600 text-white text-sm shadow-lg hover:bg-red-700 transition-colors"
        >
          📞 Call Now
        </a>
      )}
    </>
  );
}