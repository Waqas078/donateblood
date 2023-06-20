import React from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";

import ImageSlider from "../components/ImageSlider";

import image1 from "../assets/img0.jpg";
import image2 from "../assets/img1.png";
import image3 from "../assets/img2.png";
import image4 from "../assets/imgg4.jpg";
import image5 from "../assets/imgg1.jpg";
import image6 from "../assets/imgg2.jpg";

const Application = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <ImageSlider images={[image1, image2, image3, image4, image5, image6]}>
          <div
            style={{
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <h2 className="Headinggg">A single drop of blood can make a huge difference.</h2>
            <q className="Headinggg">And whoever saves a life it is as though he had saved the lives of all mankind.</q>
          </div>
        </ImageSlider>
      </div>
    </>
  );
};

export default Application;
