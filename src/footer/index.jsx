import React from "react";
import { FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="py-16 flex flex-col items-center justify-center gap-2 bg-primary">
        <div className="text-primary flex gap-2 text-2xl ">
          <a className="duration-300 text-background hover:text-secondary" href="">
            <FaInstagram />
          </a>
          <a className="duration-300 text-background hover:text-secondary" href="">
            <FaLinkedin />
          </a>
          <a className="duration-300 text-background hover:text-secondary" href="">
            <FaBehance />
          </a>
        </div>
        <div className="flex gap-4">
          <a className="duration-300 text-background hover:text-secondary" href="#home">Home</a>
          <a className="duration-300 text-background hover:text-secondary" href="#about">About</a>
          <a className="duration-300 text-background hover:text-secondary" href="#portfolio">Portfolio</a>
          <a className="duration-300 text-background hover:text-secondary" href="#contact">Contact</a>
        </div>
        <p className="text-background">&copy; Adil 2023. Site designed by <a target="_blank" className="font-bold hover:text-secondary duration-300" href="https://muhammadfathurraiyan.site">Raiyan.</a></p>
      </div>
    </footer>
  );
};

export default Footer;
