import React from "react";
import Navbar from "../components/navbar/Navbar";
import Img from "../components/ImageArea/Img";
import TextArea from "../components/TextArea/TextArea";
import Booking from "../components/Booking/Booking";
import Card from "../components/card/Card";
import Rooms from "../components/rooms/Rooms";
import Info from "../components/Info/Info";
import Facilities from "../components/facilities/Facilities";

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
      
      {/* RoomsSection */}
      <Rooms/>
      
      {/* VideoSection */}
      <Info/>
      <Facilities/>

    </div>
  );
};

export default Hero;
