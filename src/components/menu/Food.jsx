import React from "react";

const Food = () => {
  return (
    <div>
      <div className="h-[100vh] w-full bg-gray-200 flex flex-col gap-12 text-black p-3">
        <div className="ml-40 flex flex-col gap-3">
          <h2 className="text-xl text-gray-700">Menu</h2>
          <h1 className="text-6xl font-bold capitalize">Our food menu</h1>
        </div>

        <div className="flex justify-evenly gap-10">
          <div className="flex flex-col gap-4">
            <div className="h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img
                  className="h-full w-full object-cover rounded"
                  src="/images/img9.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Egg & Bacon</h1>

                <p className="text-sm text-[##6699CC]">
                  This delightful creation reimagines a traditional breakfast pairing with a touch of originality and innovation.
                </p>
              </div>
            </div>

            <div className="h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img
                  className="h-full w-full object-cover rounded"
                  src="/images/img10.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Chia Oatmeal</h1>

                <p className="text-sm text-[##6699CC]">
                  Start your morning right with our nutrient-rich Chia Oatmeal, a perfect balance of taste and health.
                </p>
              </div>
            </div>

            <div className="h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img
                  className="h-full w-full object-cover rounded"
                  src="/images/img11.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Chicken Wings</h1>

                <p className="text-sm text-[##6699CC]">
                  A delicious reinvention of traditional chicken wings, crafted with rich flavors and irresistible texture.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img
                  className="h-full w-full object-cover rounded"
                  src="/images/img12.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Tea or Coffee</h1>

                <p className="text-sm text-[##6699CC]">
                  A timeless favorite that brings a sense of warmth, relaxation, and everyday comfort
                </p>
              </div>
            </div>

            <div className="h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img
                  className="h-full w-full object-cover rounded"
                  src="/images/img13.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Fruit Parfait</h1>

                <p className="text-sm text-[##6699CC]">
                  Our Fruit Parfait is a refreshing harmony of vibrant flavors and wholesome ingredients.
                </p>
              </div>
            </div>

            <div className="h-30 w-[60vh] flex p-3 gap-3 rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer">
              <div className="h-full w-[20vh]">
                <img
                  className="h-full w-full object-cover rounded"
                  src="/images/img14.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl">Cheese Plate</h1>

                <p className="text-sm text-[##6699CC]">
                  Experience a sophisticated blend of premium cheeses, thoughtfully selected to celebrate global taste traditions.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="h-[35vh] w-full flex justify-center gap-10">
            <div className="h-full w-[40vh]">
              <img className="h-full w-full object-cover rounded" src="../public/images/img15.jpg" alt="" />
            </div>
            <div className="h-full w-[40vh]">
              <img className="h-full w-full object-cover rounded" src="../public/images/img16.jpg" alt="" />
            </div>
            <div className="h-full w-[40vh]">
              <img className="h-full w-full object-cover rounded" src="../public/images/img17.jpg" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
