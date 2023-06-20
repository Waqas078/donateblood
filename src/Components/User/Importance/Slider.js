import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from "./data";

function Slider() {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 8000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="knight">
      <div class="overlayy">
        <section className="ection">
          <div className="title">
            <h2 className="headi">Why Blood Donation is Imortant</h2>
          </div>
          <div className="section-center">
            {people.map((item, indexPeople) => {
              const { id, image, reason, title, quote } = item;
              let position = "nextSlide";
              if (indexPeople === index) {
                position = "activeSlide";
              }
              if (
                indexPeople === index - 1 ||
                (index === 0 && indexPeople === people.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <body className="boddy">
                  <article className={position} key={id}>
                    <h4>{reason}</h4>
                    <p className="text">{quote}</p>
                  </article>
                </body>
              );
            })}
            <button
              className="prevouss"
              onClick={() => setIndex(index - 1)}
            ></button>
            <button
              className="nextouss"
              onClick={() => setIndex(index + 1)}
            ></button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Slider;
