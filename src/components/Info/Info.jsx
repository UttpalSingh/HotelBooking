import React, { useEffect, useRef } from "react";

const Info = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".hero-left, .hero-right, .hero-video")
              .forEach((el) => el.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div ref={heroRef} className="relative h-[60vh] w-full flex">

        {/* Left panel — slides in from LEFT */}
        <div
          className="hero-left h-full w-[70%] bg-[#001d3d]
                     flex flex-col gap-6
                     justify-center items-center
                     text-center px-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Meet with our luxury
          </h1>
          <p className="text-gray-300 max-w-xl">
            Discover an extraordinary escape at Hotel Opera, where
            sophistication blends seamlessly with serenity. Whether you seek
            peaceful seclusion or inspiring adventures, every corner invites you
            to experience comfort in its most refined form.
          </p>
        </div>

        {/* Right panel — slides in from RIGHT */}
        <div className="hero-right h-full w-[30%] bg-yellow-500"></div>

        {/* Video card — drops from above with bounce */}
        <div
          className="
      absolute
      left-[75%]
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      h-[30vh]
      w-[50vh]
      bg-black
      rounded-xl
      shadow-2xl
      overflow-hidden
          "
        >
          <video
            className="h-full w-full object-cover"
            muted loop autoPlay
            src="/videos/video.mp4"
          />
        </div>

      </div>
    </div>
  );
};

export default Info;