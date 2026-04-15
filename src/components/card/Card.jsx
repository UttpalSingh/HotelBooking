import React, { useEffect, useRef } from "react";

const Card = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".card-left, .card-right, .card-img-1, .card-img-2, .card-img-3")
              .forEach((el) => el.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-20 min-h-[90vh] w-full flex justify-center items-center bg-white">
      <div
        ref={cardRef}
        className="
          relative
          w-[90%] lg:w-[75%]
          min-h-[70vh]
          rounded-xl
          flex flex-col md:flex-row
          items-center
          justify-center
          gap-16
          p-10
          overflow-hidden
        "
      >
        {/* background image */}
        <img
          src="/images/img5.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* image column — slides in from LEFT */}
        <div className="relative flex flex-col gap-6">

          <div className="card-img-1 h-[28vh] w-[35vh] rounded overflow-hidden">
            <img className="h-full w-full object-cover" src="/images/img2.jpg" alt="" />
          </div>

          <div className="card-img-2 h-[18vh] w-[35vh] ml-32 rounded overflow-hidden">
            <img className="h-full w-full object-cover" src="/images/img4.jpg" alt="" />
          </div>

          <div className="card-img-3 h-[26vh] w-[35vh] rounded overflow-hidden">
            <img className="h-full w-full object-cover" src="/images/img3.jpg" alt="" />
          </div>

        </div>

        {/* text section — slides in from RIGHT */}
        <div className="card-right relative max-w-lg text-white">

          <h1 className="text-4xl font-bold mb-6">Discover Our Suites</h1>

          <p className="text-white/80 leading-relaxed mb-8">
            Step into a world where elegance meets comfort, and every moment
            feels like a dream. Our hotel is more than just a place to stay —
            it is a sanctuary of sophistication, offering beautifully designed
            spaces, exceptional service, and an atmosphere that inspires
            relaxation, indulgence, and unforgettable memories.
          </p>

          <button
            className="
              border border-white
              px-6 py-2
              rounded-full
              hover:bg-white hover:text-black
              transition
              cursor-pointer
            "
          >
            Book Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default Card;