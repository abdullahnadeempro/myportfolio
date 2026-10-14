import React from "react";

const Preloader = () => {
  return (
    <div id="preloader">
      <div className="preloader-bg preloader-bg-one"></div>
      <div className="preloader-bg preloader-bg-two"></div>

      <div className="preloader-content">
        {/* Circular rotating image */}
        <div className="preloader-img">
          <img
            src="/assets/images/myimg/mainimg.png"
            alt="Abdullah"
          />
        </div>

        {/* Welcome text */}
        <div className="preloader-text">
          <span>Welcome to</span>
          <span className="preloader-text-name">Abdullah Portfolio</span>
        </div>

        {/* Loading dots */}
        <div className="preloader-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;