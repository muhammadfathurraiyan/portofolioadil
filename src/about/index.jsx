import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="relative top-12 px-36 py-32 max-sm:py-12 max-lg:px-24 max-sm:px-8 bg-primary">
        <h1 className=" text-5xl font-bold text-background">About Me</h1>
        <p className="text-xl text-background ">
          Get to know more{" "}
          <span className="font-medium underline underline-offset-2">
            about me.
          </span>
        </p>
        <p className="w-1/2 max-sm:w-full mt-4 text-background">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque culpa
          inventore illo ab consequuntur doloremque, ratione pariatur architecto
          non, est odio ipsum esse ea iusto neque ut alias quaerat unde
          corrupti? Eos vitae quaerat soluta tenetur beatae sequi voluptatibus
          voluptatum itaque nesciunt facere nihil labore commodi, deleniti iusto
          necessitatibus. Quas.
        </p>
        <a className="inline-block px-5 py-3 rounded-xl mt-6 bg-secondary hover:bg-font duration-300 cursor-pointer font-medium text-white">
          Download CV 📄
        </a>
      </div>
    </section>
  );
};

export default About;
