import React, { useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import Img from "../components/ImageArea/Img";
import TextArea from "../components/TextArea/TextArea";
import Booking from "../components/Booking/Booking";
import Card from "../components/card/Card";
import Rooms from "../components/rooms/Rooms";
import Info from "../components/Info/Info";
import Facilities from "../components/facilities/Facilities";
import Food from "../components/menu/Food";
import FooterSection from "../components/footer/FooterSection";

const Hero = () => {
  const cardRef = useRef(null)

  return (
    <div className="h-screen relative">
      {/* main */}
      <Img />

      {/* navbar */}
      <Navbar />

      {/* textArea */}
      <TextArea scrollToCard={() =>{
        cardRef.current?.scrollIntoView({ behavior: "smooth" });
      }} />

      {/* bookingSection */}
      <Booking />

      {/* CardSection */}
      <div ref={cardRef}>
        <Card/>
      </div>
      
      {/* RoomsSection */}
      <Rooms/>
      
      {/* VideoSection */}
      <Info/>
      {/* FacilitiesSection */}
      <Facilities/>
      {/* MenuSection */}
      <Food/>

      <FooterSection/>
    </div>
  );
};

export default Hero;
