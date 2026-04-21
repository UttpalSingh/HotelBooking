import React, { useEffect, useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const FooterSection = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".footer-logo, .footer-services, .footer-contact")
              .forEach((el) => el.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div
        ref={footerRef}
        className="w-full bg-[#14213d] text-white flex flex-col md:flex-row justify-between items-start gap-12 px-8 md:px-20 py-16"
      >

        {/* Logo — fades up with blur first */}
        <div className="footer-logo flex flex-col gap-3 max-w-sm">
          <h1 className="text-3xl md:text-5xl font-bold text-[#ffc300]">
            Hotel Opera
          </h1>
          <p className="text-gray-400">Experience luxury like never before.</p>
        </div>

        {/* Services — fades up with blur, then list items slide in from left */}
        <div className="footer-services flex flex-col gap-6">
          <h1 className="text-xl md:text-2xl font-semibold">Services</h1>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Online Booking</li>
            <li className="hover:text-white cursor-pointer">Room Customization</li>
            <li className="hover:text-white cursor-pointer">Virtual Tours</li>
            <li className="hover:text-white cursor-pointer">Special Offers</li>
            <li className="hover:text-white cursor-pointer">Concierge Services</li>
            <li className="hover:text-white cursor-pointer">Customer Support</li>
          </ul>
        </div>

        {/* Contact — fades up with blur, then contact items slide in from right */}
        <div className="footer-contact flex flex-col gap-6">
          <h1 className="text-xl md:text-2xl font-semibold">Contact Us</h1>

          <div className="flex flex-col gap-5 text-gray-400">

            <div className="contact-item flex gap-3 items-start">
              <Phone className="w-5 h-5 mt-1 text-[#ffc300]" />
              <div>
                <h2 className="text-white font-medium">Phone</h2>
                <p>823498765</p>
              </div>
            </div>

            <div className="contact-item flex gap-3 items-start">
              <Mail className="w-5 h-5 mt-1 text-[#ffc300]" />
              <div>
                <h2 className="text-white font-medium">Email</h2>
                <p>hotelopera@info.in</p>
              </div>
            </div>

            <div className="contact-item flex gap-3 items-start">
              <MapPin className="w-5 h-5 mt-1 text-[#ffc300]" />
              <div>
                <h2 className="text-white font-medium">Location</h2>
                <p>Navi London</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FooterSection;
