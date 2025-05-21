import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      date: "May 2025",
      rating: 5,
      text: "I was locked out of my house at 11pm and called Aksarben Locksmiths in a panic. They arrived within 20 minutes and had my door open in no time. Professional, fast, and reasonably priced!"
    },
    {
      name: "Mike Thompson",
      date: "April 2025",
      rating: 5,
      text: "Had my keys stolen and needed all my locks rekeyed. They came same day, explained the process clearly, and did excellent work. I feel much safer now and the price was fair."
    },
    {
      name: "Jennifer Garcia",
      date: "March 2025",
      rating: 5,
      text: "Accidentally locked my keys in my car with the engine running. Called these guys and they were there in 15 minutes! Fast, professional service that saved my day."
    },
    {
      name: "David Chen",
      date: "February 2025",
      rating: 5,
      text: "Had Aksarben install a new deadbolt and rekey my other locks. Great service, thorough explanation of the security features, and they cleaned up after themselves. Highly recommend!"
    },
  ];

  return (
    <section
      id="reviews"
      className="relative z-10 px-6 md:px-12 py-20 text-white overflow-hidden scroll-mt-[24px]"
    >
      {/* Animated Gradient + Sparkle Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-black opacity-90" />
        <div className="absolute inset-0 animate-diagonal-stripes opacity-50 mix-blend-lighten" />
        <div className="absolute inset-0 animate-sparkle z-[-1] opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center text-white">What Our Customers Say</h2>
        <p className="text-center text-indigo-200">
          Don't just take our word for it – here's what our customers have to say about our locksmith services.
        </p>

        <div className="mt-6 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-md animate-pulse">
            <span className="text-xl font-semibold">⭐ 4.9 out of 5 stars based on 200+ reviews</span>
          </div>
        </div>

        <div className="space-y-6">
          <blockquote className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-md">
            <p className="text-lg">"I was locked out of my house at 11pm and called Aksarben Locksmiths in a panic. They arrived within 20 minutes and had my door open in no time. Professional, fast, and reasonably priced!"</p>
            <div className="flex items-center text-yellow-400 text-2xl mt-2 space-x-1">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <footer className="mt-2 text-sm text-indigo-300">— Sarah Johnson, May 2025</footer>
          </blockquote>

          <blockquote className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-md">
            <p className="text-lg">"Had my keys stolen and needed all my locks rekeyed. They came same day, explained the process clearly, and did excellent work. I feel much safer now and the price was fair."</p>
            <div className="flex items-center text-yellow-400 text-2xl mt-2 space-x-1">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <footer className="mt-2 text-sm text-indigo-300">— Mike Thompson, April 2025</footer>
          </blockquote>

          <blockquote className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-md">
            <p className="text-lg">"Accidentally locked my keys in my car with the engine running. Called these guys and they were there in 15 minutes! Fast, professional service that saved my day."</p>
            <div className="flex items-center text-yellow-400 text-2xl mt-2 space-x-1">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <footer className="mt-2 text-sm text-indigo-300">— Jennifer Garcia, March 2025</footer>
          </blockquote>

          <blockquote className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-md">
            <p className="text-lg">"Had Aksarben install a new deadbolt and rekey my other locks. Great service, thorough explanation of the security features, and they cleaned up after themselves. Highly recommend!"</p>
            <div className="flex items-center text-yellow-400 text-2xl mt-2 space-x-1">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <footer className="mt-2 text-sm text-indigo-300">— David Chen, February 2025</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}