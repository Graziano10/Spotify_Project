import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    swipe: true,
  };

  return (
    <>
      <div className="h-full bg-tertiary">
        <h1 className="text-white text-semibold text-lg tracking-wide pt-5 pl-5">
          Playlist Spotify
        </h1>
        <div className="w-full max-w-xl mx-auto">
          <Slider {...settings} className="p-5">
            <div className="">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 1"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 2"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 3"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 4"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 5"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 6"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
          </Slider>
        </div>


        {/* SLIDE 02 */}

        <h1 className="text-white text-semibold text-lg tracking-wide pt-5 pl-5">
          Playlist Spotify
        </h1>
        <div className="w-full max-w-xl mx-auto">
          <Slider {...settings} className="p-5">
            <div className="">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 1"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 2"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 3"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 4"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 5"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/400x200"
                alt="Slide 6"
                className="w-[12rem] h-[12rem] rounded-lg"
              />
              <p className="text-white text-normal text-lg tracking-wide">
                Today's Top Hits
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarouselSlider;
