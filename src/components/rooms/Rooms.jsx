import React, { useEffect, useRef } from "react";

const Rooms = () => {
  const roomsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".rooms-heading, .rooms-subheading, .room-card")
              .forEach((el) => el.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (roomsRef.current) observer.observe(roomsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div
        ref={roomsRef}
        className="h-[65vh] w-full bg-white text-black flex flex-col items-center gap-6 px-6"
      >
        <h2 className="rooms-subheading text-lg md:text-2xl mt-14 text-gray-500">
          Rooms
        </h2>

        <h1 className="rooms-heading text-3xl md:text-5xl font-bold text-center">
          Hand Picked Rooms
        </h1>

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 mt-8">

          <div className="room-card relative h-72 w-full sm:w-[70%] md:w-[45vh] overflow-hidden rounded-xl">
            <img src="/images/img8.jpg" className="h-full w-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">Deluxe Suite</h2>
              <p className="text-white/80 text-sm">
                Well appointed room designed for guests who desire more comfort.
              </p>
            </div>
          </div>

          <div className="room-card relative h-72 w-full sm:w-[70%] md:w-[45vh] overflow-hidden rounded-xl">
            <img src="/images/img6.jpg" className="h-full w-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">Family Room</h2>
              <p className="text-white/80 text-sm">
                Comfortable stay with modern interior and premium facilities.
              </p>
            </div>
          </div>

          <div className="room-card relative h-72 w-full sm:w-[70%] md:w-[45vh] overflow-hidden rounded-xl">
            <img src="/images/img7.jpg" className="h-full w-full object-cover" alt="" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">Luxury Suite</h2>
              <p className="text-white/80 text-sm">
                Spacious suite with elegant design and beautiful ambience.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rooms;