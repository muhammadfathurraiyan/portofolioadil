import React from "react";
import { FaBehance, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home">
      <div className="relative top-12 flex items-center justify-between gap-8 h-screen max-sm:h-[120vh] px-36 py-32 max-sm:py-12 max-lg:px-24 max-sm:px-8 max-md:flex-wrap">
        <div className="w-1/2 max-md:w-full">
          <h1 className="text-4xl font-bold">Hi I'm Tengku Adil Parisi</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-px w-20 bg-primary" />
            <h2 className="text-xl font-medium text-primary">Journalist</h2>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            molestias amet corporis, reprehenderit atque, quos praesentium velit
            veritatis quidem sint doloribus voluptatibus error odio molestiae.
          </p>
          <div className="mt-4 text-primary flex gap-2 text-2xl ">
            <a className="duration-300 hover:text-secondary" href=""><FaInstagram /></a>
            <a className="duration-300 hover:text-secondary" href=""><FaLinkedin /></a>
            <a className="duration-300 hover:text-secondary" href=""><FaBehance /></a>
          </div>
        </div>
        <div className="max-md:-order-1 max-md:w-full flex justify-center">
          <img className="rounded-full" src="https://picsum.photos/300" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
