import React, { useEffect, useRef } from "react";
import { ThumbsUp, Clock, MapPin, X, Wallet, TicketPercent } from "lucide-react";

const Facilities = () => {
  const facilitiesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".facilities-heading, .facilities-subheading, .facility-card")
              .forEach((el) => el.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (facilitiesRef.current) observer.observe(facilitiesRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div
        ref={facilitiesRef}
        className="min-h-[80vh] w-full bg-white text-black flex flex-col justify-center items-center gap-7"
      >
        <h2 className="facilities-subheading text-gray-500 text-lg">Facilities</h2>

        <h1 className="facilities-heading text-5xl font-bold">Core Features</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] lg:w-[70%]">

          <div className="facility-card h-60 rounded-xl capitalize p-3 flex flex-col gap-3">
            <ThumbsUp className="text-[#ffc300]" />
            <h1 className="text-xl font-bold">have high rating</h1>
            <p>We are dedicated to handpicking hotels that are celebrated for their outstanding ratings and exceptional guest experiences.</p>
          </div>

          <div className="facility-card h-60 rounded-xl capitalize p-3 flex flex-col gap-3">
            <Clock className="text-[#ffc300]" />
            <h1 className="text-xl font-bold">quite hours</h1>
            <p>We value the importance of calm surroundings and undisturbed comfort for complete rejuvenation.</p>
          </div>

          <div className="facility-card h-60 rounded-xl capitalize p-3 flex flex-col gap-3">
            <MapPin className="text-[#ffc300]" />
            <h1 className="text-xl font-bold">best location</h1>
            <p>We carefully feature hotels situated in the most desirable and well-connected locations, ensuring convenience and a memorable stay.</p>
          </div>

          <div className="facility-card h-60 rounded-xl capitalize p-3 flex flex-col gap-3">
            <X className="text-[#ffc300]" />
            <h1 className="text-xl font-bold">Free Cancellation</h1>
            <p>We know plans don't always go as expected, so we provide flexible booking options with free cancellation for your peace of mind.</p>
          </div>

          <div className="facility-card h-60 rounded-xl capitalize p-3 flex flex-col gap-3">
            <Wallet className="text-[#ffc300]" />
            <h1 className="text-xl font-bold">Payment Options</h1>
            <p>We provide multiple secure payment methods, allowing you to choose the option that best fits your needs and convenience.</p>
          </div>

          <div className="facility-card h-60 rounded-xl capitalize p-3 flex flex-col gap-3">
            <TicketPercent className="text-[#ffc300]" />
            <h1 className="text-xl font-bold">Special Offers</h1>
            <p>Our handpicked special packages are created to meet the needs of both relaxing vacations and productive business trips.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Facilities;
