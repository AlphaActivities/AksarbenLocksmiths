import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ServiceTemplateProps {
  title: string;
  description: string;
  videoSrc: string;
  ctaText?: string;
}

export const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  description,
  videoSrc,
  ctaText = "Request Service",
}) => {
  const adjustedVideoSrc =
    title === "Security Consultation"
      ? "/videos/SecurityConsultation.mp4"
      : title === "Automotive Lockouts" 
      ? "/videos/AutomotiveLockoutsVideo.mp4" 
      : title === "Residential Lockouts"
      ? "/videos/ResidentialLockoutVideo.mp4"
      : title === "Broken Key Extraction"
      ? "/videos/KeyExtractionVideo.mp4"
      : title === "Key Duplication"
      ? "/videos/DuplicationVideo.mp4"
      : title === "Lock Rekeying"
      ? "/videos/LockReKeying.mp4"
      : videoSrc;

  return (
    <section className="relative z-10 min-h-screen px-6 md:px-12 pt-24 pb-24 overflow-hidden text-white">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black opacity-90" />
        <div className="absolute inset-0 animate-diagonal-stripes opacity-50 mix-blend-lighten" />
        <div className="absolute inset-0 bg-stars animate-twinkle" />
      </div>
      
      <div className="container mx-auto">
        <Link 
          to="/?scroll=services" 
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-md backdrop-blur-md w-fit text-xl md:text-2xl font-semibold text-blue-300"
        >
          <span className="text-3xl">←</span>
          Back to Services
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            {title}
          </h1>
          
          <div className="relative rounded-xl overflow-hidden mb-8 shadow-2xl">
            <video
              controls
              className="w-full aspect-[16/12] object-cover rounded-xl shadow-xl"
              poster="/images/static-map.png"
              preload="metadata"
              playsInline={typeof window !== "undefined" && window.innerWidth > 768}
              controlsList="nodownload noplaybackrate"
            >
              <source src={adjustedVideoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
            <p className="text-lg text-gray-300">{description}</p>
          </div>
          
          <div className="flex justify-center">
            <a
              href="tel:4025566715"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 transform hover:scale-105"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};