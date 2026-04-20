import React from "react";
import { ThumbsUp } from "lucide-react";
import { Clock } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { X } from 'lucide-react';

const Facilities = () => {
  return (
    <div>
      <div className="min-h-[80vh] w-full bg-white text-black flex flex-col justify-center items-center gap-7">
        <h2 className="text-gray-500 text-lg">Facilities</h2>

        <h1 className="text-5xl font-bold">Core Features</h1>

        {/* grid container */}
        <div
          className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-8
      w-[90%] lg:w-[70%]
    "
        >
          <div className="h-60 bg-blue-500 rounded-xl capitalize p-3 flex flex-col gap-3">
            <ThumbsUp />
            <h1 className="text-xl">have high rating</h1>
            <p>
              We are dedicated to handpicking hotels that are celebrated for
              their outstanding ratings and exceptional guest experiences.
            </p>
          </div>

          <div className="h-60 bg-blue-500 rounded-xl capitalize p-3 flex flex-col gap-3">
            <Clock />
            <h1 className="text-xl">quite hours</h1>
            <p>
              We value the importance of calm surroundings and undisturbed comfort for complete rejuvenation.
            </p>
          </div>

          <div className="h-60 bg-blue-500 rounded-xl capitalize p-3 flex flex-col gap-3">
             <MapPin />
            <h1 className="text-xl">best location</h1>
            <p>
             We carefully feature hotels situated in the most desirable and well-connected locations, ensuring convenience and a memorable stay.
            </p>
          </div>

          <div className="h-60 bg-blue-500 rounded-xl capitalize p-3 flex flex-col gap-3">
             <X />
            <h1 className="text-xl">Free Cancellation</h1>
            <p>
              We know plans don’t always go as expected, so we provide flexible booking options with free cancellation for your peace of mind.
            </p>
          </div>

          <div className="h-60 bg-blue-500 rounded-xl capitalize p-3 flex flex-col gap-3">
            <ThumbsUp />
            <h1 className="text-xl">have high rating</h1>
            <p>
              We are dedicated to handpicking hotels that are celebrated for
              their outstanding ratings and exceptional guest experiences.
            </p>
          </div>

          <div className="h-60 bg-blue-500 rounded-xl capitalize p-3 flex flex-col gap-3">
            <ThumbsUp />
            <h1 className="text-xl">have high ratiog</h1>
            <p>
              We are dedicated to handpicking hotels that are celebrated for
              their outstanding ratings and exceptional guest experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
