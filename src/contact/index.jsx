import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="relative flex justify-between items-center max-sm:flex-wrap  px-32 py-32 max-sm:py max-sm:py-12 max-lg:px-24 max-sm:px-8">
        <div className="w-2/5 max-sm:w-full">
          <h1 className="text-5xl font-bold">Contact</h1>
          <p className="text-xl">
            Let's{" "}
            <span className="font-medium underline underline-offset-2">
              colaborate!
            </span>
          </p>
          <form className="mt-6 flex flex-col gap-4" action="">
            <div className="">
              <label for="name" className="block mb-2 ">
                Your name
              </label>
              <input
                type="name"
                id="name"
                className="border border-primary  rounded-lg focus:ring-0 focus:border-0 block w-full p-2.5"
                required
              />
            </div>
            <div className="">
              <label for="email" className="block mb-2">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="border border-primary  rounded-lg focus:ring-0 focus:border-0 block w-full p-2.5"
                required
              />
            </div>
            <div className="">
              <label for="text-area" className="block mb-2">
                Your messages
              </label>
              <textarea
                id="message"
                rows="5"
                className="border border-primary  rounded-lg focus:ring-0 focus:border-0 block w-full p-2.5"
                required
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="inline-block px-5 py-3 rounded-xl mt-6 bg-primary hover:bg-secondary duration-300 cursor-pointer font-medium text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="max-sm:hidden">
          <img className="rounded-lg" src="https://picsum.photos/350" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
