import React from "react";

const items = [
  { text: "Website Developer", stroke: true },
  { text: "Software Developer", stroke: false },
  { text: "Full Stack Developer", stroke: true },
  { text: "Web Designer", stroke: false },
];

const Marquee = () => {
  return (
    <section className="marquee marquee-tertiary-bg">
      <div className="marquee__inner">
        {[0, 1, 2].map((k) => (
          <div key={k} className="marquee__slider">
            {items.map((item, i) => (
              <div key={i} className={`marquee__single ${item.stroke ? "stroke-text" : ""}`}>
                <h4 className="title-lg">
                  <a href="our-services.html">{item.text} <span>-</span></a>
                </h4>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;