import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, menuOpen } from "./images.js";
import "../index.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setIsMenuOpen(false);
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      href: "#",
      name: "About Me",
    },
    {
      href: "#project",
      name: "Projects",
    },
    {
      href: "#technologies",
      name: "Technologies",
    },
    {
      href: "#contact",
      name: "Contact",
    },
  ];

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 bg-[#090912] ${
          isScrolled && isMenuOpen
            ? ""
            : isScrolled
            ? "bg-[rgba(9,9,18,0.79)] shadow-[0px_2px_6px_-1px_rgba(255,255,255,0.4)] backdrop-blur-[15px]"
            : ""
        } transition-all duration-200`}
      >
        <div className="w-full h-20 text-center flex max-sm:justify-between lg:justify-between items-center px-5 md:px-16 xl:px-28">
          {/* Logo Section */}
          <div className=" text-3xl xl:text-4xl w-[80%] md:w-[50%] lg:w-[25%] h-full flex justify-start items-center font-bold bg-gradient-to-b from-[#0bcaff] to-[#ffffff] text-transparent bg-clip-text">
            Aryan Mehta
          </div>

          {/* Navigation Links */}
          <div className="lg:w-[65%] h-full hidden lg:flex justify-center items-center lg:text-base xl:text-lg font-medium text-white">
            {menuItems.map((item) => (
              <a
                key={item.name}
                className="lg:mx-5 xl:mx-7 no-underline border-b-2 border-transparent hover:border-white transition duration-100"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="h-full md:flex justify-end items-center space-x-4 text-xl w-[20%] sm:w-[50%] lg:w-[7%] text-white">
            <a
              href="https://github.com/amehtacc/"
              target="_blank"
              className="hover:-translate-y-1 hidden md:flex hover:shadow-[0px_0px_20px_-2px_rgba(255,255,255,0.8)] transition duration-300"
            >
              <img
                className="md:w-4 xl:w-5 md:h-4 xl:h-5"
                src={Github}
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/crispcoding/"
              target="_blank"
              className="hover:-translate-y-1 hidden md:flex hover:shadow-[0px_0px_20px_-2px_rgba(255,255,255,0.8)] transition duration-300"
            >
              <img
                className="md:w-4 xl:w-5 md:h-4 xl:h-5"
                src={Linkedin}
                alt="LinkedIn"
              />
            </a>
            {/* Mobile Menu Icon */}
            <div className="lg:hidden h-full flex justify-end items-center ml-sm-lg-3">
              <button onClick={toggleMenu} className="text-white text-2xl">
                {isMenuOpen ? (
                  <img className="w-10" src={menuOpen} alt="Mobile Menu" />
                ) : (
                  <img className="w-10" src={Menu} alt="Mobile Menu" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mobile-menu rounded-b-xl text-white ${
          isMenuOpen ? "slide-in" : "slide-out"
        }`}
      >
        {menuItems.map((item) => (
          <div key={item.name} className="text-center">
            <a
              onClick={toggleMenu}
              className="no-underline border-b-2 border-transparent hover:border-white transition duration-100"
              href={item.href}
            >
              {item.name}
            </a>
          </div>
        ))}

        {/* Social Icons */}
        <div className="hide-sm-lg w-full flex gap-5 justify-center items-center text-xl text-white">
          <a
            href="https://github.com/amehtacc/"
            target="_blank"
            onClick={toggleMenu}
            className="hover:-translate-y-1 hover:shadow-[0px_0px_20px_-2px_rgba(255,255,255,0.8)] transition duration-300"
          >
            <img className="w-5 h-5" src={Github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/crispcoding/"
            target="_blank"
            onClick={toggleMenu}
            className="hover:-translate-y-1 hover:shadow-[0px_0px_20px_-2px_rgba(255,255,255,0.8)] transition duration-300"
          >
            <img className="w-5 h-5" src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
