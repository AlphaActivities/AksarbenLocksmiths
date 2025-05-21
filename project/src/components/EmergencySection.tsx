import { BadgeAlert as Alert, Clock, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function EmergencySection() {
  const emergencyServices = [
    {
      title: "Residential Lockouts",
      description: "Locked out of your home? Our technicians will get you back inside quickly with minimal damage.",
      icon: <Alert className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Automotive Lockouts",
      description: "Car key lost or locked inside? We can unlock most vehicles without damage and create replacement keys.",
      icon: <Clock className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Broken Key Extraction",
      description: "Key snapped off in your lock? We'll extract the broken piece and provide a new key on the spot.",
      icon: <Shield className="h-10 w-10 text-red-600" />,
    },
  ];

  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">24/7 Emergency Locksmith Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're available around the clock for all your emergency locksmith needs in Omaha and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {emergencyServices.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-gray-900 mb-6">
            Don't wait - our average response time is under 30 minutes!
          </p>
          <Button asChild size="lg" variant="destructive" className="rounded-full shadow-md hover:shadow-lg">
            <a href="tel:4025566715" className="px-8">
              Emergency Call: (402) 556-6715
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}