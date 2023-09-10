import { useState } from "react";
import { FaStream, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header id="header">
      <nav className="h-12 fixed w-full top-0 left-0 z-10 flex justify-between items-center bg-primary px-36 max-lg:px-24 max-sm:px-8">
        <h1 className="font-bold text-xl text-background">Adil.</h1>
        <ul
          className={`${
            toggle ? "max-sm:w-1/2" : "max-sm:w-0"
          } duration-500 ease-in-out flex gap-8 text-background max-sm:absolute max-sm:right-0 max-sm:top-0 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:bg-secondary max-sm:h-screen overflow-hidden`}
        >
          <li>
            <a
              onClick={handleToggle}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={handleToggle}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={handleToggle}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              onClick={handleToggle}
              className={`${toggle ? "block" : "max-sm:hidden"}`}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          onClick={handleToggle}
          className="hidden absolute right-8 text-background max-sm:block"
        >
          {toggle ? <FaTimes /> : <FaStream />}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
