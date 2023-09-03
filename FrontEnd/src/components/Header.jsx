import React from "react";
import Navbar from "./Navbar";
import CarouselSlider from "./CarouselSlider";


const Header = () => {

  return (
    <>
      <header>
        <Navbar />
        <div className="h-full bg-tertiary">
          <CarouselSlider/>
        </div>
      </header>
    </>
  );
};

export default Header;
