import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Mainreg from "../Reg-Log/Mainreg";
import About from "../About/About";
import WhyUs from "../WhyUS/WhyUs";
import Footerr from "../Footerr/Footerr";
import Navbarr from "../NavbarandMenu/Navbarr";
import Slider from "../Importance/Slider";
//import ImGallery from "../ImGallery/ImGallery";
import Application from "../caro/Application/Application";
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbarr toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      {/* <Hero slides={SliderData} />*/}
      <Application />
      <Mainreg />
      <About />
      <Slider />
      <WhyUs />
      {/* <ImGallery /> */}
      <Footerr />
    </>
  );
}

export default Home;
