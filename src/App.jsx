import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-screen">
      <Header />
      <Home />
      <Project />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
