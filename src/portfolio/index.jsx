import React from "react";

const index = () => {
  const elements = [];

  for (let i = 0; i < 9; i++) {
    elements.push(
      <div
        key={Math.random() * 100}
        className="flex flex-col items-center gap-2 w-[300px] grow p-2 border rounded-lg border-secondary"
      >
        <div className="h-[150px] w-full">
          <img
            className="object-cover max-h-full min-w-full rounded-t-lg"
            loading="lazy"
            src="https://picsum.photos/600"
            alt="dummy image"
          />
        </div>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    );
  }
  
  return (
    <section id="portfolio">
      <div className="relative top-12 px-36 py-32 max-sm:py-12 max-lg:px-24 max-sm:px-8">
        <h1 className="text-5xl text-center font-bold">Portfolio</h1>
        <p className="text-xl text-center">
          What i have{" "}
          <span className="font-medium underline underline-offset-2">
            done!
          </span>
        </p>
        <div className="flex mt-8 justify-center gap-6 flex-wrap">
          {elements}
        </div>
      </div>
    </section>
  );
};

export default index;
