import React from "react";
import BannerImg from '../images/banner.png';


const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-4xl font-medium">Get Your Service</h1>
          <p className="mb-5 text-6xl font-bold">
          Easy Cleaning and Home Service Here.
          </p>
          <button className="clean-btn">Get Hair Me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
