import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 scroll-mt-[10px] px-6 md:px-12 pt-24 pb-12 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black opacity-90" />
        <div className="absolute inset-0 animate-diagonal-stripes opacity-50 mix-blend-lighten" />
        <div className="absolute inset-0 bg-stars animate-twinkle" />
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300">Have questions or need a quote? Reach out to us using any of the methods below.</p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input className="bg-white/10 border border-white/20 rounded-lg p-4 placeholder-gray-400 text-white" placeholder="Name" />
          <input className="bg-white/10 border border-white/20 rounded-lg p-4 placeholder-gray-400 text-white" placeholder="Phone" />
          <input className="bg-white/10 border border-white/20 rounded-lg p-4 placeholder-gray-400 text-white md:col-span-2" placeholder="Email" />
          <input className="bg-white/10 border border-white/20 rounded-lg p-4 placeholder-gray-400 text-white md:col-span-2" placeholder="Subject" />
          <textarea className="bg-white/10 border border-white/20 rounded-lg p-4 placeholder-gray-400 text-white md:col-span-2" rows="5" placeholder="Message" />
        </div>

        <div className="mt-6 text-center rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-pink-500 px-6 py-6 border border-white/10">
          <h3 className="text-xl font-bold text-white drop-shadow-glow">🚨 Emergency Lockout?</h3>
          <p className="text-white/80 text-sm mt-1">We're on standby — call now.</p>
          <div className="mt-6">
            <a
              href="tel:4025566715"
              role="button"
              aria-label="Call Aksarben Locksmiths"
              className="inline-block w-full text-center px-6 py-3 rounded-full bg-white text-red-600 font-extrabold shadow-lg hover:scale-105 transition-transform duration-300 text-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              📞 Call Now
            </a>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <a href="tel:4025566715" className="text-center space-y-2 px-4 py-6 rounded-xl backdrop-blur-md bg-glow-card-blue border border-white/10 shadow-xl">
            <h3 className="text-3xl lg:text-4xl font-bold tracking-wide text-center bg-gradient-to-r from-white via-blue-500 to-white text-transparent bg-clip-text animate-gradientFlow">
              Call
            </h3>
            <p className="text-lg font-bold text-white">(402) 556-6715</p>
            <p className="text-[#ff6aa2] text-sm">Available 24/7 for emergencies</p>
          </a>
          <a href="mailto:info@aksarbenlocksmiths.com" className="text-center space-y-2 px-4 py-6 rounded-xl backdrop-blur-md bg-glow-card-pink border border-white/10 shadow-xl">
            <h3 className="text-3xl lg:text-4xl font-bold tracking-wide text-center bg-gradient-to-r from-white via-blue-500 to-white text-transparent bg-clip-text animate-gradientFlow">
              Email
            </h3>
            <p className="text-[15px] md:text-[14px] lg:text-lg font-bold text-white break-words text-center leading-snug">info@<wbr />aksarbenlocksmiths.com</p>
            <p className="text-[#ff6aa2] text-sm">Quotes & inquiries</p>
          </a>
          <a href="#areas" className="text-center space-y-2 px-4 py-6 rounded-xl backdrop-blur-md bg-glow-card-green border border-white/10 shadow-xl">
            <h3 className="text-3xl lg:text-4xl font-bold tracking-wide text-center bg-gradient-to-r from-white via-blue-500 to-white text-transparent bg-clip-text animate-gradientFlow whitespace-nowrap">
              Service Area
            </h3>
            <p className="text-lg font-bold text-white">Omaha & surrounding areas</p>
            <p className="text-[#ff6aa2] text-sm">Mobile service – we come to you!</p>
          </a>
        </div>

        {/* Map Image */}
        <div className="rounded-lg overflow-hidden border border-white/10 mt-6">
          <a
            href="https://www.google.com/maps/place/Aksarben+Locksmiths+LLC/@41.3203156,-96.476382,10z/data=!3m1!4b1!4m6!3m5!1s0x8793f30eec4a5913:0x6534e61736664e3b!8m2!3d41.320272!4d-96.1460354!16s%2Fg%2F1pxwf_c8p?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/map-service-area.png"
              alt="Aksarben Locksmiths Service Area Map"
              className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
            />
          </a>
        </div>

        {/* Emergency Section */}
        <div className="mt-6 rounded-xl bg-gradient-to-br from-red-600 via-red-500 to-pink-600 px-6 py-5 border border-white/10 text-white text-center">
          <h3 className="text-xl font-bold mb-2 drop-shadow-glow">🚨 24/7 Emergency Lockout Service</h3>
          <p className="text-sm md:text-base text-white/90">
            Tap to call anytime, day or night
          </p>
          <div className="mt-6">
            <a
              href="tel:4025566715"
              role="button"
              aria-label="Call Aksarben Locksmiths"
              className="inline-block w-full text-center px-6 py-3 rounded-full bg-white text-red-600 font-extrabold shadow-lg hover:scale-105 transition-transform duration-300 text-lg"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}