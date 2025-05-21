import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

import { ScrollToAnchorOnLoad } from "./components/ScrollToAnchorOnLoad";
import { EmergencySection } from "./components/EmergencySection";
import { ServicesSection } from "./components/ServicesSection";
import { AreasSection } from "./components/AreasSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { services } from "./data/ServicesData";
import { ServiceTemplate } from "./components/ServiceTemplate";

function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pricesRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1040);
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const scrollToPricesTablet = () => {
    if (isTablet && pricesRef.current) {
      const headerHeight = 160;
      const offsetTop = pricesRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const scrollToPricesMobile = () => {
    if (isMobile && pricesRef.current) {
      const headerHeight = 116;
      const offsetTop = pricesRef.current.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.title = "Aksarben Locksmiths | 24/7 Emergency Locksmith Services in Omaha";
  }, []);

  return (
    <div 
      className="flex flex-col min-h-screen text-white bg-black z-10 overflow-x-hidden"
      style={{
        overscrollBehaviorY: 'none',
        WebkitOverflowScrolling: 'auto',
        touchAction: 'manipulation'
      }}
    >
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0 will-change-transform"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
      >
        <source src="/videos/wallpaper.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Sticky Top Bar + Header */}
      <nav className="fixed top-0 z-30 w-full">
        <div className="bg-black text-sm px-4 py-1 flex justify-between items-center">
          <span className="text-white animate-pulse">24/7 Emergency Service</span>
          <a
            href="tel:4025566715"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition animate-pulse"
          >
            <Phone className="w-4 h-4" /> (402) 556-6715
          </a>
        </div>

        <header className="bg-white/90 backdrop-blur-md shadow-md px-4 py-2 rounded-full mx-4 mt-2">
          <div className="flex items-center justify-between px-2 w-full">
            <div className="flex items-center gap-3">
              <img src="/images/shield-logo.png" alt="Aksarben Logo" className="w-10 h-10" />
              <span className="text-lg font-semibold text-gray-900">Aksarben Locksmiths</span>
            </div>
            {!isTablet && <div className="flex gap-4 justify-center items-center flex-grow">
              <a href="#emergency" className="px-4 py-1 rounded-full text-sm font-bold text-white shadow-md bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-500 hover:to-blue-500 animate-gradient-slow transition-all duration-300">
                Emergency
              </a>
              <a href="#services" className="px-4 py-1 rounded-full text-sm font-bold text-white shadow-md bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-500 hover:to-blue-500 animate-gradient-slow transition-all duration-300">
                Services
              </a>
              <a href="#reviews" className="px-4 py-1 rounded-full text-sm font-bold text-white shadow-md bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-500 hover:to-blue-500 animate-gradient-slow transition-all duration-300">
                Reviews
              </a>
              <a href="#areas" className="px-4 py-1 rounded-full text-sm font-bold text-white shadow-md bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-500 hover:to-blue-500 animate-gradient-slow transition-all duration-300">
                Areas
              </a>
              <a href="#prices" className="px-4 py-1 rounded-full text-sm font-bold text-white shadow-md bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-500 hover:to-blue-500 animate-gradient-slow transition-all duration-300">
                Prices
              </a>
              <a href="#contact" className="px-4 py-1 rounded-full text-sm font-bold text-white shadow-md bg-gradient-to-r from-red-600 to-blue-700 hover:from-red-500 hover:to-blue-500 animate-gradient-slow transition-all duration-300">
                Contact
              </a>
            </div>}
            {!isTablet && <div className="ml-4">
              <a href="tel:4025566715" className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300">
                📞 Call Now
              </a>
            </div>}
            {isTablet && (
              <button
                ref={buttonRef}
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_12px_rgba(255,0,0,0.6)] flex items-center justify-center relative overflow-visible z-50 transform-none"
                aria-label="Menu Toggle"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-500 to-red-700 opacity-20 group-hover:opacity-60 transition-opacity duration-700 animate-swipe-glow rounded-full z-0" />
                <div className="z-10">
                  {menuOpen ? (
                    <X className="w-6 h-6 text-white animate-safe-chaos" />
                  ) : (
                    <Menu className="w-6 h-6 text-white transition-all duration-300 ease-in-out transform-none" />
                  )}
                </div>
              </button>
            )}
            {isTablet && menuOpen && (
              <div
                ref={menuRef}
                className="mobile-menu fixed top-[63px] left-2 right-2 z-50 animate-red-lava-wave bg-opacity-95 text-white px-4 pt-4 pb-4 md:pt-5 md:pb-5 rounded-2xl border border-red-500/20 shadow-xl space-y-3"
              >
                {[
                  { label: "🚨  Emergency", href: "#emergency" },
                  { label: "🔧  Services", href: "#services" },
                  { label: "⭐  Reviews", href: "#reviews" },
                  { label: "📍  Areas", href: "#areas" },
                  { label: "💰  Prices", onClick: isMobile ? scrollToPricesMobile : scrollToPricesTablet },
                  { label: "📞  Contact", href: "#contact" },
                ].map((item, idx) => (
                  <a
                    key={item.label}
                    href={item.href || "#"}
                    onClick={(e) => {
                      e.preventDefault();
                     
                     // Special handling for each section
                     if (item.onClick) {
                       item.onClick(); // Prices button — already has custom scroll
                     } else if (item.href) {
                       const targetId = item.href.replace("#", "");
                       const el = document.getElementById(targetId);

                       if (el) {
                         el.scrollIntoView({ behavior: "smooth" }); // Just smooth scroll, no math
                         setMenuOpen(false);
                       } else {
                         window.location.href = item.href;
                         setMenuOpen(false);
                       }
                      }
                    }}
                    className="block w-full px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-center shadow-lg hover:bg-red-500 transition-all duration-200"
                    style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: "both" }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </header>
      </nav>

      <div className="h-10 md:h-16"></div>
      <div className="h-[calc(100vh-500px)] md:h-[calc(100vh-450px)] lg:h-[calc(100vh-420px)]"></div>

      <ScrollToAnchorOnLoad />

      <div className="relative">
        <section className="hero-container z-10 w-full max-w-4xl mx-auto px-4 pb-8">
          <div className="w-full bg-black/80 backdrop-blur-lg rounded-xl px-4 py-2 text-center mb-8 border-0">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Locked Out? <span className="text-red-500">We're Already on the Way!</span>
          </h1>
          <p className="mt-2 text-white/80 text-sm bp-md:text-lg">
            Serving Omaha with 24/7 emergency service. Car, Home, Business & Safe Lockouts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { title: "No Damage Entry", desc: "Professional tools to protect your property" },
              { title: "Licensed & Insured", desc: "Your safety is our top priority" },
              { title: "Fast Response", desc: "On-site in under 30 minutes" },
              { title: "All Lock Types", desc: "From cars to safes – we handle it all" }
            ].map((card, idx) => (
              <div
                key={idx}
                className="glow-card rounded-xl text-white p-4 border border-red-500/20 shadow-lg animate-fade-up animate-once animate-duration-700 animate-ease-out"
              >
                <div className="z-10 relative">
                  <h3 className="text-lg font-bold text-white/90">{card.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>
      </div>
      <div className="block md:hidden h-[745px] w-full"></div>
      
      {/* Smooth Fade Out Overlay Below Hero */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black/80 blur-sm"></div>
      </div>

      <div className="h-8"></div>


      {/* Floating Red Call Button */}
      <a
        href="tel:4025566715"
        className={`fixed bottom-4 right-4 z-50 bg-red-600 text-white p-4 rounded-full shadow-lg animate-bounce ${!isTablet ? 'hidden' : ''}`}
      >
        <Phone className="w-5 h-5" />
      </a>

      <main className="flex-grow z-10 snap-end min-h-[calc(100vh-200px)]">
        <div className="relative">
          <ServicesSection />
        </div>
        <AreasSection pricesRef={pricesRef} />
        <TestimonialsSection />
        <CTA />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        {services.map((service) => (
          <Route
            key={service.slug}
            path={`/services/${service.slug}`}
            element={
              <ServiceTemplate
                title={service.title}
                description={service.description}
                videoSrc={service.videoSrc}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;