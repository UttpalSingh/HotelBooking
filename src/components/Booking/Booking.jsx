import React, { useEffect, useRef, useState } from "react";

const Booking = () => {
  const bookingRef = useRef(null);

  const [Input, setInput] = useState({
    arrivalDate: "",
    departureDate: "",
    date: "",
  });

  function storeData(e) {
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
  }

  function formSubmit(e) {
    e.preventDefault;
    setInput({
      arrivalDate: "",
      departureDate: "",
      guest: "",
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".booking-item").forEach((el) => {
              el.classList.add("visible");
            });
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.3 }, // triggers when 30% of the section is visible
    );

    if (bookingRef.current) observer.observe(bookingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <form onSubmit={formSubmit} className="">
      <div
        ref={bookingRef}
        className="flex justify-center gap-24 w-[80%] mx-auto"
      >
        <div className="flex flex-col gap-3">
          <label className="text-white text-xl">Arrival Date</label>
          <input
            name="arrivalDate"
            value={Input.arrivalDate}
            onChange={storeData}
            type="text"
            placeholder="Enter Arrival Date"
            className="bg-transparent border-b border-white/50 text-white outline-none"
          />
        </div>

        <div className="booking-item flex flex-col gap-3">
          <label className="text-white text-xl tracking-wide">
            Departure Date
          </label>
          <input
            name="departureDate"
            value={Input.departureDate}
            onChange={storeData}
            type="text"
            placeholder="Enter Departure Date"
            className="className='bg-transparent border-b border-white/50 text-white outline-none"
          />
        </div>

        <div className="booking-item flex flex-col gap-3">
          <label className="text-white text-xl tracking-wide">Guest</label>
          <input
            name="guest"
            value={Input.guest}
            onChange={storeData}
            type="text"
            placeholder="Number Of Guest"
            className="className='bg-transparent border-b border-white/50 text-white outline-none"
          />
        </div>

        <div className="booking-item flex items-end">
          <button className="border border-white/60 text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition cursor-pointer">
            Check
          </button>
        </div>
      </div>
    </form>
  );
};

export default Booking;
