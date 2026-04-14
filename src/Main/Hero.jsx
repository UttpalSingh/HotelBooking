import React from "react";
import Navbar from "../components/navbar/Navbar";
import Img from "../components/ImageArea/Img";
import TextArea from "../components/TextArea/TextArea";
import Booking from "../components/Booking/Booking";

const Hero = () => {
  return (
    <div className="h-screen relative">
      {/* main */}
      <Img />
      {/* navbar */}
      <Navbar />
      {/* textArea */}
      <TextArea />
      {/* bookingSection */}
      <Booking/>

      
    </div>
  );
};

export default Hero;
