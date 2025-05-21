import { Home, Car, Key, RefreshCw, Shield, KeyRound, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesSection() {
  const services = [
    {
      slug: "residential",
      title: "Residential Lockouts",
      description: "Locked out of your home? Our technicians will get you back inside quickly with minimal damage.",
      icon: <Home className="h-12 w-12 text-white" />,
    },
    {
      slug: "automotive",
      title: "Automotive Lockouts",
      description: "Car key lost or locked inside? We can unlock most vehicles without damage and create replacement keys.",
      icon: <Car className="h-12 w-12 text-white" />,
    },
    {
      slug: "extraction",
      title: "Broken Key Extraction",
      description: "Key snapped off in your lock? We'll extract the broken piece and provide a new key on the spot.",
      icon: <Key className="h-12 w-12 text-white" />,
    },
    {
      slug: "duplication",
      title: "Key Duplication",
      description: "Fast and accurate duplication for all types of keys, including high-security.",
      icon: <KeyRound className="h-12 w-12 text-white" />,
    },
    {
      slug: "rekeying",
      title: "Lock Rekeying",
      description: "Change your locks to work with new keys without replacing the whole unit.",
      icon: <RefreshCw className="h-12 w-12 text-white" />,
    },
    {
      slug: "consultation",
      title: "Security Consultation",
      description: "Expert advice to upgrade your home or office's lock systems.",
      icon: <Shield className="h-12 w-12 text-white" />,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <section 
          id="emergency" 
          className="scroll-mt-[100px] md:scroll-mt-[120px] relative z-10"
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center py-8 px-6 rounded-2xl shadow-xl mb-10 animate-gradient-slow">
            <h2 className="text-2xl font-extrabold drop-shadow-glow tracking-wide mb-2">
              24/7 Emergency Locksmith Services
            </h2>
            <p className="text-base font-medium mb-4">
              We're available around the clock for all your emergency locksmith needs in Omaha and surrounding areas.
            </p>
            <h3 className="text-xl font-semibold drop-shadow-glow mb-1">
              Our Services
            </h3>
            <p className="text-base font-light">
              Professional locksmith solutions for all your security needs
            </p>
          </div>
        </section>

        <div id="services" className="scroll-mt-[116px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.slug}`}
              key={index}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 animate-gradient rounded-xl shadow-lg text-white p-6 hover:scale-105 transition-transform duration-300"
            > 
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-100">{service.description}</p>
                  <span className="inline-block text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-white to-red-500 animate-companyGradientFast px-4 py-1 border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300">
                    Learn More →
                  </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 text-white text-center px-6 py-8 rounded-3xl shadow-[0_0_30px_rgba(255,0,0,0.5)] border-4 border-white/30 backdrop-blur-xl animate-fade-in animate-duration-700 animate-ease-out mt-12">
          <p className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-sm">
            🚨 Don't wait – we're on the way in under 30 minutes!
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="tel:4025566715"
              className="inline-flex items-center gap-3 bg-white text-red-600 font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out animate-bounce"
            >
              <Phone className="w-5 h-5" />
              Call Now: (402) 556-6715
            </a>
          </div>
        </div>
      </div>
      <div className="h-12 md:h-16" />
    </section>
  );
}