import { ArrowRight, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "./ui/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 pt-16 pb-20">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-right-top opacity-[0.07]"></div>
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 items-center">
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-red-600/30 bg-red-50 px-3 py-1 text-sm text-red-600">
                <Shield className="mr-1 h-3 w-3" /> 24/7 Emergency Service
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Locked out? <span className="text-red-600">We'll get you in</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Aksarben Locksmiths provides fast, reliable locksmith services throughout Omaha. Available 24/7 for all your emergency and security needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="destructive" className="rounded-full shadow-md hover:shadow-lg transition-all">
                <a href="tel:4025566715" className="px-6">
                  Call Now: (402) 556-6715
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full group">
                <Link href="#services">
                  View Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                  ))}
                </div>
                <span className="ml-1">4.9/5 (120+ Reviews)</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <span>10+ Years Experience</span>
            </div>
          </div>
          
          <div className="rounded-xl bg-white p-6 shadow-lg border border-gray-100 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900">Emergency Service</h3>
            <p className="mt-2 text-gray-600">
              Locked out? Need immediate assistance? We respond to emergencies within 30 minutes throughout Omaha.
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Home & Car Lockouts", 
                "Lock Repairs", 
                "Broken Key Extraction", 
                "Lock Rekeying"
              ].map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 rounded-full bg-red-100 p-1">
                    <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="default" size="lg" className="mt-8 w-full bg-gray-900 hover:bg-gray-800">
              <a href="tel:4025566715">
                Call Now: (402) 556-6715
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}