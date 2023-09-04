import React, { useEffect, useState, useRef } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

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
      <div className="relative z-50" ref={menuRef}>
        <div className="relative">
          <button
            id="hamburger-button"
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="text-invert inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg hover:bg-secondary"
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
              ${menuOpen ? "open" : "hidden"}`}
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
                    <button className="w-auto xl:w-[80rem] tracking-wider hover:text-secondary text-start xl:hover:translate-x-12 duration-100 ease-in-out">
                      <Link
                        to="/Login"
                      >
                        Log-in
                      </Link>
                    </button>
                    <button className="w-auto xl:w-[80rem] text-start tracking-wider hover:text-secondary pt-5 xl:hover:translate-x-12 duration-100 ease-in-out">
                      <Link
                        to="/Register"
                      >
                        Sign-in
                      </Link>
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
