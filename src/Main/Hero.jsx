import React from "react";
import Navbar from "../components/navbar/Navbar";
import Img from "../components/ImageArea/Img";
import TextArea from "../components/TextArea/TextArea";
import Booking from "../components/Booking/Booking";
import Card from "../components/card/Card";

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
      <Booking />

      {/* CardSection */}
      <Card/>

    </div>
  );
};

export default Hero;
