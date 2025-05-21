export function AreasSection({ pricesRef }: { pricesRef: React.RefObject<HTMLDivElement> }) {
  return (
    <section id="areas" className="scroll-mt-[24px] px-4 pt-20 pb-[90px] relative z-0 overflow-hidden bg-black">
      {/* 🔷 AI Animated Wallpaper */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-black opacity-80" />
        <div className="absolute inset-0 animate-diagonal-stripes opacity-75 mix-blend-lighten" />
      </div>

      {/* Title + Rating */}
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Trusted by Homeowners & Businesses Across Omaha
        </h2>
        <p className="text-yellow-400 text-lg font-semibold">
          ★★★★★ <span className="text-white ml-1">4.9</span>{" "}
          <span className="text-white/70">(200+ Reviews)</span>
        </p>
      </div>

      {/* We Come To You */}
      <div className="flex justify-center mb-10">
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white text-lg font-bold py-3 px-8 rounded-xl shadow-lg animate-pulse">
          We Come To You
        </div>
      </div>

      {/* Google Map */}
      <div className="mb-12 flex justify-center">
        <a
          href="https://www.google.com/maps/place/Aksarben+Locksmiths+LLC/@41.3198017,-96.4756924,10z/data=!3m1!4b1!4m6!3m5!1s0x8793f30eec4a5913:0x6534e61736664e3b!8m2!3d41.320272!4d-96.1460354!16s%2Fg%2F1pxwf_c8p?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-sm md:max-w-md lg:max-w-xl rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
        >
          <img
            src="/images/static-map.png"
            alt="Find Aksarben Locksmiths on Google Maps"
            className="w-full h-auto object-cover"
          />
        </a>
      </div>

      {/* Cities */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {[
          "Omaha", "Bellevue", "Papillion", "La Vista", "Ralston", "Elkhorn",
          "Bennington", "Millard", "Gretna", "Springfield", "Ashland", "Wahoo",
          "Blair", "Fremont", "Valley", "Waterloo", "Carter Lake", "Council Bluffs",
          "Fort Calhoun", "Louisville"
        ].map((city, idx) => {
          const isNearby = ["Omaha", "Ralston", "Papillion", "La Vista", "Council Bluffs", "Bellevue"].includes(city);
          return (
            <div
              key={idx}
              className={`
                rounded-lg p-4 text-center font-bold text-white
                ${isNearby 
                  ? "bg-gradient-to-br from-blue-500 via-blue-400 to-teal-400 animate-pulse shadow-[0_0_35px_rgba(59,130,246,0.8)] drop-shadow-glow ring-1 ring-blue-400/30"
                  : "bg-gradient-to-br from-blue-800 via-blue-700 to-teal-600"
                }
                border border-white/10 shadow-md transition transform hover:scale-105 relative overflow-hidden
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rotate-[-10deg] translate-x-1/4 pointer-events-none"></div>
              <span className="relative z-10">{city}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24"></div>

      <div 
        id="prices"
        className="scroll-mt-0 sm:scroll-mt-[160px] md:scroll-mt-[480px] lg:scroll-mt-[160px] xl:scroll-mt-[180px] 2xl:scroll-mt-[200px] max-w-4xl mx-auto mt-[112px] sm:mt-36 space-y-10"
        ref={pricesRef}
      >
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-2 text-white text-center">Transparent Pricing</h2>
        </div>

        <div className="bg-gradient-to-br from-[#1d1f28] to-[#2e2f3e] p-6 md:p-10 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.08)] border border-white/10 backdrop-blur-md animate-fade-in">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">Price Guarantee</h3>
          <ul className="text-white/90 space-y-3 text-base md:text-lg font-medium">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              All prices include service call fees within Omaha city limits
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Exact pricing provided before any work begins – no hidden fees
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              After-hours emergency services with transparent surcharge
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              We accept all major credit cards, cash, and mobile payments
            </li>
          </ul>
          <div className="mt-6 flex justify-center">
            <a
              href="tel:4025566715"
              className="px-6 py-3 text-white font-bold rounded-full bg-gradient-to-r from-red-500 to-pink-600 hover:scale-105 transition-all duration-300 shadow-[0_0_12px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]"
            >
              Get an Exact Quote Now
            </a>
          </div>
        </div>
      </div>
      <div className="h-[80px] sm:h-[88px] md:h-[96px] lg:h-[104px] xl:h-[112px] 2xl:h-[120px]" />
    </section>
  );
}