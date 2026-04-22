import React from "react";

const Navbar = () => {
  return (
    <div className=" absolute top-[7%] left-1/2 -translate-x-1/2 w-[92%] md:w-[80%]">
      <div
        className="
    bg-white
    rounded-xl
    shadow-lg
    px-4 md:px-8
    py-3
    flex
    justify-between
    items-center
  "
      >
        <h1
          className="
      text-lg md:text-2xl
      font-bold
      whitespace-nowrap
      text-black
    "
        >
          Hotel Opera
        </h1>

        <div
          className="
      flex
      items-center
      gap-4 md:gap-10
      text-gray-700
      text-sm md:text-base
      font-medium
    "
        >
          <span className="cursor-pointer hover:text-black">Contact</span>

          <span className="cursor-pointer hover:text-black">Room</span>

          <span className="cursor-pointer hover:text-black">Menu</span>

          <button
            className="
        bg-[#14213d]
        text-white
        px-4 md:px-6
        py-1.5 md:py-2
        rounded-full
        text-sm md:text-base
        hover:bg-[#000814]
        transition
        whitespace-nowrap
      "
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
