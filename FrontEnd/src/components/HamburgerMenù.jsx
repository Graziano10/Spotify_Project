import React, { useEffect, useState, useRef } from "react";
import Fade from "react-reveal/Fade";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={menuRef}>
        <div className="relative">
          <button
            id="hamburger-button"
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="bg-fourth text-invert inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg hover:bg-secondary"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <Fade duration={600} right>
            <nav
              id="hamburger-nav"
              className={`absolute right-[-2.6rem] top-[-1.5rem] text-start w-[26rem] z-50 h-screen md:w-screen xl:right-[-1.5rem]
            ${menuOpen ? "" : "hidden"}`}
            >
              <ul className="w-full text-white text-md h-screen text-start bg-black font-semibold tracking-wider space-y-5 py-5">
                <div className=" w-full flex justify-end px-5 py-2 items-center h-auto text-white ">
                  {/* CLOSING SVG */}
                  <div onClick={toggleMenu}>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* TEXT */}

                <div className="flex flex-col items-start h-full ml-12 font-bold">
                  <div className="text-2xl flex flex-col w-full">
                    <button className="w-auto xl:w-[80rem] tracking-wider">
                      <li className=" hover:text-secondary text-start mb-5 xl:hover:translate-x-12 duration-100 ease-in-out">
                        Log-in
                      </li>
                    </button>
                    <button className="w-auto xl:w-[80rem] tracking-wider">
                      <li className=" hover:text-secondary text-start xl:hover:translate-x-12 duration-100 ease-in-out">
                        Sign-in
                      </li>
                    </button>
                  </div>

                  {/* --- */}
                  <div className="h-0.5 w-4 bg-white my-10"></div>

                  <button className="w-auto xl:w-[80rem] tracking-wider mb-4">
                    <li className="hover:text-secondary text-start tracking-wider xl:hover:translate-x-12 duration-100 ease-in-out">
                      Premium
                    </li>
                  </button>
                  <button className="w-auto xl:w-[80rem]">
                    <li className="hover:text-secondary text-start tracking-wider mb-4 xl:hover:translate-x-12 duration-100 ease-in-out">
                      Assistency
                    </li>
                  </button>
                  <button className="w-auto xl:w-[80rem]">
                    <li className="hover:text-secondary text-start tracking-wider mb-4 xl:hover:translate-x-12 duration-100 ease-in-out">
                      Download
                    </li>
                  </button>
                  <button className="w-auto xl:w-[80rem]">
                    <li className="hover:text-secondary text-start tracking-wider mb-4 xl:hover:translate-x-12 duration-100 ease-in-out">
                      Privacy
                    </li>
                  </button>
                  <button className="w-auto xl:w-[80rem]">
                    <li className="hover:text-secondary text-start tracking-wider mb-4 xl:hover:translate-x-12 duration-100 ease-in-out">
                      Condition
                    </li>
                  </button>

                  {/* SVG LINK */}
                  {/* 
                  <div className="flex gap-3 my-8 mx-5 ">
                    <div>
                      {" "}
                      <svg
                        className="eastendFooterSocialIcons_listItemSvg"
                        width="40px"
                        height="40px"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#72383d"
                      >
                        <circle
                          className="eastendFooter_fill_hover"
                          cx="20"
                          cy="20"
                          r="20"
                          stroke="white"
                          strokeWidth="2"
                        ></circle>
                        <path
                          className="eastendFooterSocialIcons_listItemSvgPath"
                          d="M17.0680736,16.6145435 L17.0680736,14.6052554 C17.0680736,13.7187702 17.0904121,12.3525954 17.7335254,11.5060843 C18.4119099,10.6090177 19.3418964,10 20.9432132,10 C23.5509376,10 24.6490506,10.3715243 24.6490506,10.3715243 L24.132914,13.4342484 C24.132914,13.4342484 23.2711187,13.1861737 22.4669332,13.1861737 C21.6627476,13.1861737 20.9432132,13.4742226 20.9432132,14.2772324 L20.9432132,16.6145435 L24.2399036,16.6145435 L24.0094645,19.6055494 L20.9432132,19.6055494 L20.9432132,30 L17.0680736,30 L17.0680736,19.6055494 L15,19.6055494 L15,16.6145435 L17.0680736,16.6145435 Z"
                          id="Facebook"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                    </div>
                    <button>
                      {" "}
                      <svg
                        className="eastendFooterSocialIcons_listItemSvg"
                        width="40px"
                        height="40px"
                        viewBox="0 0 40 40"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="#72383d"
                      >
                        <circle
                          id="Oval-2-Copy-2"
                          className="eastendFooter_fill_hover"
                          cx="20"
                          cy="20"
                          r="20"
                          stroke="white"
                          strokeWidth="2"
                        ></circle>
                        <path
                          className="eastendFooterSocialIcons_listItemSvgPath"
                          d="M27.3656846,14.7303293 C28.1998845,14.2311958 28.8399769,13.4385904 29.1415367,12.4969382 C28.3604853,12.9590988 27.4974003,13.2941652 26.5753899,13.4744079 C25.8405546,12.6910456 24.7902946,12.2 23.6279607,12.2 C21.3991912,12.2 19.5909879,14.0093588 19.5909879,16.2392837 C19.5909879,16.5558637 19.6256499,16.8632005 19.694974,17.1589832 C16.3385326,16.9891392 13.3633738,15.3842865 11.3703062,12.9371462 C11.0225303,13.5367995 10.8238013,14.2311958 10.8238013,14.9706528 C10.8238013,16.369844 11.536684,17.607279 12.6204506,18.3317158 C11.9595609,18.3120739 11.3356441,18.1295205 10.7902946,17.8279607 L10.7902946,17.877643 C10.7902946,19.8348931 12.1825534,21.4674754 14.0311958,21.8383593 C13.6926632,21.9331023 13.3356441,21.9804737 12.9670711,21.9804737 C12.7071057,21.9804737 12.4529174,21.9562103 12.2068169,21.9088388 C12.7209705,23.5125361 14.2114385,24.680647 15.9792028,24.7129983 C14.5973426,25.7956095 12.8549971,26.4414789 10.9636049,26.4414789 C10.6377816,26.4414789 10.3154246,26.4229925 10,26.3860196 C11.7874061,27.5310225 13.9110341,28.2 16.1906412,28.2 C23.6198729,28.2 27.6811092,22.0463316 27.6811092,16.7072213 C27.6811092,16.5327556 27.677643,16.3571346 27.6707106,16.1849798 C28.4598498,15.6153668 29.1450029,14.9047949 29.6845754,14.0937031 C28.961294,14.4160601 28.1825534,14.6321202 27.3656846,14.7303293 Z"
                          id="Twitter"
                          fill="#FFFFFF"
                        ></path>
                      </svg>
                    </button>
                    <button>
                      {" "}
                      <svg
                        className="eastendFooterSocialIcons_listItemSvg"
                        width="40px"
                        height="40px"
                        viewBox="0 0 40 40"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="#72383d"
                      >
                        <circle
                          id="Oval-2-Copy"
                          className="eastendFooter_fill_hover"
                          cx="20"
                          cy="20"
                          r="20"
                          stroke="white"
                          strokeWidth="2"
                        ></circle>
                        <path
                          fill="white"
                          className="eastendFooterSocialIcons_listItemSvgPath"
                          d="M19.9968651,10.0063095 C17.2818651,10.0063095 16.9414286,10.0178175 15.8751587,10.0664683 C14.8111111,10.115 14.0844048,10.2840079 13.4485317,10.5311508 C12.7911508,10.7865873 12.2336508,11.1284127 11.6778571,11.6841667 C11.1221032,12.2399603 10.7802778,12.7974603 10.5248413,13.4548413 C10.2776984,14.0907143 10.1086905,14.8174206 10.0601587,15.8814683 C10.0115079,16.9477381 10,17.2881746 10,20.0031746 C10,22.7181349 10.0115079,23.0585714 10.0601587,24.1248413 C10.1086905,25.1888889 10.2776984,25.9155952 10.5248413,26.5514683 C10.7802778,27.2088492 11.1221032,27.7663492 11.6778571,28.3221429 C12.2336508,28.8778968 12.7911508,29.2197222 13.4485317,29.4751984 C14.0844048,29.7223016 14.8111111,29.8913095 15.8751587,29.9398413 C16.9414286,29.9884921 17.2818651,30 19.9968651,30 C22.7118254,30 23.0522619,29.9884921 24.1185317,29.9398413 C25.1825794,29.8913095 25.9092857,29.7223016 26.5451587,29.4751984 C27.2025397,29.2197222 27.7600397,28.8778968 28.3158333,28.3221429 C28.8715873,27.7663492 29.2134127,27.2088492 29.4688889,26.5514683 C29.7159921,25.9155952 29.885,25.1888889 29.9335317,24.1248413 C29.9821825,23.0585714 29.9936905,22.7181349 29.9936905,20.0031746 C29.9936905,17.2881746 29.9821825,16.9477381 29.9335317,15.8814683 C29.885,14.8174206 29.7159921,14.0907143 29.4688889,13.4548413 C29.2134127,12.7974603 28.8715873,12.2399603 28.3158333,11.6841667 C27.7600397,11.1284127 27.2025397,10.7865873 26.5451587,10.5311508 C25.9092857,10.2840079 25.1825794,10.115 24.1185317,10.0664683 C23.0522619,10.0178175 22.7118254,10.0063095 19.9968651,10.0063095 Z M19.9968651,11.8075397 C22.6661111,11.8075397 22.9823016,11.8177381 24.0364286,11.8658333 C25.0111111,11.9102778 25.5404365,12.0731349 25.8926984,12.2100397 C26.3593254,12.3913889 26.6923413,12.6080159 27.0421429,12.9578571 C27.3919841,13.3076587 27.6086111,13.6406746 27.7899603,14.1073016 C27.9268651,14.4595635 28.0897222,14.9888889 28.1341667,15.9635714 C28.1822619,17.0176984 28.1924603,17.3338889 28.1924603,20.0031746 C28.1924603,22.6724206 28.1822619,22.9886111 28.1341667,24.0427381 C28.0897222,25.0174206 27.9268651,25.546746 27.7899603,25.8990079 C27.6086111,26.3656349 27.3919841,26.6986508 27.0421429,27.0484524 C26.6923413,27.3982937 26.3593254,27.6149206 25.8926984,27.7962698 C25.5404365,27.9331746 25.0111111,28.0960317 24.0364286,28.1404762 C22.9824603,28.1885714 22.6663095,28.1987698 19.9968651,28.1987698 C17.327381,28.1987698 17.0112698,28.1885714 15.9572619,28.1404762 C14.9825794,28.0960317 14.453254,27.9331746 14.1009921,27.7962698 C13.6343651,27.6149206 13.3013492,27.3982937 12.9515476,27.0484524 C12.601746,26.6986508 12.3850794,26.3656349 12.2037302,25.8990079 C12.0668254,25.546746 11.9039683,25.0174206 11.8595238,24.0427381 C11.8114286,22.9886111 11.8012302,22.6724206 11.8012302,20.0031746 C11.8012302,17.3338889 11.8114286,17.0176984 11.8595238,15.9635714 C11.9039683,14.9888889 12.0668254,14.4595635 12.2037302,14.1073016 C12.3850794,13.6406746 12.6017063,13.3076587 12.9515476,12.9578571 C13.3013492,12.6080159 13.6343651,12.3913889 14.1009921,12.2100397 C14.453254,12.0731349 14.9825794,11.9102778 15.9572619,11.8658333 C17.0113889,11.8177381 17.3275794,11.8075397 19.9968651,11.8075397 Z"
                        ></path>
                        <path
                          fill="white"
                          className="eastendFooterSocialIcons_listItemSvgPath"
                          d="M19.9968651,23.3354365 C18.1564683,23.3354365 16.6645635,21.8435317 16.6645635,20.0031746 C16.6645635,18.1627778 18.1564683,16.670873 19.9968651,16.670873 C21.8372222,16.670873 23.329127,18.1627778 23.329127,20.0031746 C23.329127,21.8435317 21.8372222,23.3354365 19.9968651,23.3354365 Z M19.9968651,14.8696429 C22.8320238,14.8696429 25.1303571,17.1679762 25.1303571,20.0031746 C25.1303571,22.8383333 22.8320238,25.1366667 19.9968651,25.1366667 C17.1616667,25.1366667 14.8633333,22.8383333 14.8633333,20.0031746 C14.8633333,17.1679762 17.1616667,14.8696429 19.9968651,14.8696429 Z M26.5328175,14.6668254 C26.5328175,15.3293651 25.9957143,15.8664286 25.3331746,15.8664286 C24.6706746,15.8664286 24.1335714,15.3293651 24.1335714,14.6668254 C24.1335714,14.0042857 24.6706746,13.4671825 25.3331746,13.4671825 C25.9957143,13.4671825 26.5328175,14.0042857 26.5328175,14.6668254 Z"
                        ></path>
                      </svg>
                    </button>
                  </div> */}
                </div>
              </ul>
            </nav>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
