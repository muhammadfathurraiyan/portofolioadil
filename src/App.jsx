import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Footer from "./footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Portfolio />
      </main>
    </>
  );
};

export default App;
