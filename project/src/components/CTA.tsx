import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-12 px-6 md:px-12 z-10">
      {/* 🔥 Animated glowing pulse background layer */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-black to-red-900 opacity-80 animate-pulse-fast" />
        <div className="absolute inset-0 animate-diagonal-stripes opacity-20 mix-blend-screen" />
      </div>

      {/* 🚨 Emergency Text */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-red-400">Need a Locksmith Right Now?</h2>
        <p className="text-lg text-white/90">
          Our professional locksmiths are available 24/7 for all your emergency and security needs.
        </p>
        <a
          href="tel:4025566715"
          className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
        >
          📞 Call (402) 556-6715
        </a>
      </div>
    </section>
  );
}