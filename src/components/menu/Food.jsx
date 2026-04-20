import React, { useEffect, useRef } from "react";

const Food = () => {
  const foodRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(
                ".food-heading, .food-subheading, .menu-item-left, .menu-item-right, .food-img"
              )
              .forEach((el) => el.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (foodRef.current) observer.observe(foodRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div
        ref={foodRef}
        className="h-[100vh] w-full bg-gray-200 flex flex-col gap-12 text-black p-3"
      >
        {/* heading */}
        <div className="ml-40 flex flex-col gap-3">
          <h2 className="food-subheading text-xl text-gray-700">Menu</h2>
          <h1 className="food-heading text-6xl font-bold capitalize">Our food menu</h1>
        </div>

        {/* menu rows */}
        <div className="flex justify-evenly gap-10">

          {/* left column */}
          <div className="flex flex-col gap-4">
            <div className="menu-item-left h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img className="h-full w-full object-cover rounded" src="/images/img9.jpg" alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Egg & Bacon</h1>
                <p className="text-sm">This delightful creation reimagines a traditional breakfast pairing with a touch of originality and innovation.</p>
              </div>
            </div>

            <div className="menu-item-left h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img className="h-full w-full object-cover rounded" src="/images/img10.jpg" alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Chia Oatmeal</h1>
                <p className="text-sm">Start your morning right with our nutrient-rich Chia Oatmeal, a perfect balance of taste and health.</p>
              </div>
            </div>

            <div className="menu-item-left h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img className="h-full w-full object-cover rounded" src="/images/img11.jpg" alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Chicken Wings</h1>
                <p className="text-sm">A delicious reinvention of traditional chicken wings, crafted with rich flavors and irresistible texture.</p>
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="flex flex-col gap-4">
            <div className="menu-item-right h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img className="h-full w-full object-cover rounded" src="/images/img12.jpg" alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Tea or Coffee</h1>
                <p className="text-sm">A timeless favorite that brings a sense of warmth, relaxation, and everyday comfort.</p>
              </div>
            </div>

            <div className="menu-item-right h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img className="h-full w-full object-cover rounded" src="/images/img13.jpg" alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Fruit Parfait</h1>
                <p className="text-sm">Our Fruit Parfait is a refreshing harmony of vibrant flavors and wholesome ingredients.</p>
              </div>
            </div>

            <div className="menu-item-right h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img className="h-full w-full object-cover rounded" src="/images/img14.jpg" alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Cheese Plate</h1>
                <p className="text-sm">Experience a sophisticated blend of premium cheeses, thoughtfully selected to celebrate global taste traditions.</p>
              </div>
            </div>
          </div>

        </div>

        {/* bottom images — rise up */}
        <div className="h-[35vh] w-full flex justify-center gap-10">
          <div className="food-img h-full w-[40vh]">
            <img className="h-full w-full object-cover rounded" src="/images/img15.jpg" alt="" />
          </div>
          <div className="food-img h-full w-[40vh]">
            <img className="h-full w-full object-cover rounded" src="/images/img16.jpg" alt="" />
          </div>
          <div className="food-img h-full w-[40vh]">
            <img className="h-full w-full object-cover rounded" src="/images/img17.jpg" alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Food;