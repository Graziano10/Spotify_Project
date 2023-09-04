import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    pauseOnHover: false,
    swipe: true,
    arrows: false,
    rtl: false,
    smooth: true,
    responsive: [
      {
        breakpoint: 1450, // Imposta il breakpoint per schermi di dimensioni medie (md)
        settings: {
          slidesToShow: 6, // Cambia il numero di slide da mostrare su schermi di dimensioni medie (md)
        },
      },
      {
        breakpoint: 1350, // Imposta il breakpoint per schermi di dimensioni medie (md)
        settings: {
          slidesToShow: 6, // Cambia il numero di slide da mostrare su schermi di dimensioni medie (md)
        },
      },
      {
        breakpoint: 1221, // Imposta il breakpoint per schermi di dimensioni medie (md)
        settings: {
          slidesToShow: 5, // Cambia il numero di slide da mostrare su schermi di dimensioni medie (md)
        },
      },
      {
        breakpoint: 991, // Imposta il breakpoint per schermi di dimensioni medie (md)
        settings: {
          slidesToShow: 4, // Cambia il numero di slide da mostrare su schermi di dimensioni medie (md)
        },
      },
      {
        breakpoint: 777, // Imposta il breakpoint per schermi di dimensioni medie (md)
        settings: {
          slidesToShow: 3, // Cambia il numero di slide da mostrare su schermi di dimensioni medie (md)
        },
      },
      {
        breakpoint: 603, // Imposta il breakpoint per schermi di dimensioni medie (md)
        settings: {
          slidesToShow: 2, // Cambia il numero di slide da mostrare su schermi di dimensioni medie (md)
        },
      },
      {
        breakpoint: 413, // Imposta il breakpoint per schermi di dimensioni medie (md)
        settings: {
          slidesToShow: 1.5, // Cambia il numero di slide da mostrare su schermi di dimensioni medie (md)
        },
      },
    ],
  };

  return (
    <>
      <div className="h-full bg-tertiary w-full  z-10">
        <h1 className="text-white text-bold text-xl tracking-wide pt-5 pl-5">
          Playlist Spotify
        </h1>
        <div className="w-full">
          <Slider {...settings} className="p-5 z-10">
            <div className="z-20">
              <img
                src="src\assets\01.jpg"
                alt="Slide 1"
                className="w-[10rem] h-[10rem] rounded-lg z-10"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Today's Top Hits
              </p>
            </div>
            <div>
              <img
                src="src\assets\02.jpg"
                alt="Slide 2"
                className="w-[10rem] h-[10rem]  rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                RapCaviar
              </p>
            </div>
            <div>
              <img
                src="src\assets\03.jpg"
                alt="Slide 3"
                className="w-[10rem] h-[10rem]  rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                All Out 2010s
              </p>
            </div>
            <div>
              <img
                src="src\assets\04.jpg"
                alt="Slide 4"
                className="w-[10rem] h-[10rem]  rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Rock Classic
              </p>
            </div>
            <div>
              <img
                src="src\assets\05.jpg"
                alt="Slide 5"
                className="w-[10rem] h-[10rem]  rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Chill Hits
              </p>
            </div>
            <div>
              <img
                src="src\assets\06.jpg"
                alt="Slide 6"
                className="w-[10rem] h-[10rem]  rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Viva Latino
              </p>
            </div>
            <div>
              <img
                src="src\assets\07.jpg"
                alt="Slide 7"
                className="w-[10rem] h-[10rem]  rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Mega Hit Mix
              </p>
            </div>
            <div>
              <img
                src="src\assets\08.jpg"
                alt="Slide 8"
                className="w-[10rem] h-[10rem] rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                All out 80s
              </p>
            </div>
          </Slider>
        </div>

        {/* SLIDE 02 */}
        <h1 className="text-white text-bold text-xl tracking-wide pt-5 pl-5">
          Dream
        </h1>
        <div className="w-full">
          <Slider {...settings} className="p-5 z-10">
            <div className="z-20">
              <img
                src="src\assets\08.jpg"
                alt="Slide 1"
                className="w-[10rem] h-[10rem] rounded-lg z-10"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Sleep
              </p>
            </div>
            <div>
              <img
                src="src\assets\02.jpg"
                alt="Slide 2"
                className="w-[10rem] h-[10rem]  rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                DayDreamer
              </p>
            </div>
            <div>
              <img
                src="src\assets\pexels-photo-12939554.webp"
                alt="Slide 3"
                className="w-[10rem] h-[10rem]  rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Teckno
              </p>
            </div>
          </Slider>
        </div>

        {/* SLIDE 03 */}

        <h1 className="text-white text-bold text-xl  tracking-wide pt-5 pl-5">
          Focus
        </h1>
        <div className="w-full">
          <Slider {...settings} className="p-5 z-10">
            <div className="z-20">
              <img
                src="src\assets\09.jpg"
                alt="Slide 1"
                className="w-[10rem] h-[10rem] rounded-lg z-10"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Peaceful Piano
              </p>
            </div>
            <div>
              <img
                src="src\assets\10.jpg"
                alt="Slide 2"
                className="w-[10rem] h-[10rem] rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Deep Focus
              </p>
            </div>
            <div>
              <img
                src="src\assets\11.jpg"
                alt="Slide 3"
                className="w-[10rem] h-[10rem] rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Instrumental
              </p>
            </div>
            <div>
              <img
                src="src\assets\12.jpg"
                alt="Slide 4"
                className="w-[10rem] h-[10rem] rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Beats to think to
              </p>
            </div>
            <div>
              <img
                src="src\assets\15.jpg"
                alt="Slide 5"
                className="w-[10rem] h-[10rem] rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Focus Flow
              </p>
            </div>
            <div>
              <img
                src="src\assets\relax.jpg"
                alt="Slide 6"
                className="w-[10rem] h-[10rem] rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Relaxing Reading
              </p>
            </div>
            <div>
              <img
                src="src\assets\13.webp"
                alt="Slide 7"
                className="w-[10rem] h-[10rem] rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Reading Adventure
              </p>
            </div>
            <div>
              <img
                src="src\assets\quiet.jpg"
                alt="Slide 8"
                className="w-[10rem] h-[10rem] rounded-lg"
              />
              <p className="text-white text-normal pt-2 text-xl tracking-wide">
                Quiet Moment
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarouselSlider;
