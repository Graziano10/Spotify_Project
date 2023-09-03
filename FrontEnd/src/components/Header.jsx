import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "./Navbar";

const Header = () => {
  const carouselData = [
    {
      imageSrc: "image1.jpg",
      caption: "Legenda 1",
    },
    {
      imageSrc: "image2.jpg",
      caption: "Legenda 2",
    },
    {
      imageSrc: "image3.jpg",
      caption: "Legenda 3",
    },
    // Aggiungi ulteriori dati delle immagini qui
  ];

  return (
    <>
      <header>
        <Navbar />
        <div className="h-[32rem] bg-secondary">
          <Carousel
            showThumbs={false}
            showStatus={false}
            renderIndicator={(clickHandler, isSelected, index, label) => (
              <div
                className={`custom-dot ${isSelected ? "z-10" : ""}`}
                onClick={clickHandler}
                key={index}
              >
                {label}
              </div>
            )}
          >
            {carouselData.map((item, index) => (
              <div key={index}>
                <img src={item.imageSrc} alt={`Slide ${index + 1}`} />
                <p className="legend">{item.caption}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </header>
    </>
  );
};

export default Header;
