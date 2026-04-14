import React from "react";
import  { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const TextArea = () => {
      const container = useRef(null)
    
      useGSAP(()=>{
        gsap.from(container.current, {
        x: -200,    
        opacity: 0,     
        duration: 1.2, 
        ease: "power3.out",
        stagger: 0.2   
        });
      })
  return (
    <div className="h-screen">
      <div ref={container}  className="absolute top-[35%] ml-10  text-white text-center font-[font1]">
        <h1 className="text-9xl font-bold">
          The Perfect <br /> Stay For You
        </h1>
        <p className="mt-3 text-lg">Luxury • Comfort • Experience</p>
      </div>
    </div>
  );
};

export default TextArea;
