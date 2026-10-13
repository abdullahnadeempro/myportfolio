import React from "react";

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="preloader-bg preloader-bg-one"></div>
      <div className="preloader-bg preloader-bg-two"></div>
      <div className="txt-loading">
        {["L", "O", "A", "D", "I", "N", "G"].map((ch, i) => (
          <span key={i} data-text-preloader={ch} className="letters-loading">
            {ch}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;