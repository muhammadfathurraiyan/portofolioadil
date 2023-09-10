import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-black"></div>
      {/* <main>
        <Home />
        <About />
        <Contact />
      </main>
      <Footer /> */}
    </div>
  );
};

export default App;
