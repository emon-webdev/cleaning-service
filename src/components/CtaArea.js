import React from "react";
import CtaImg from "../images/CtaImg.png";

const CtaArea = () => {
  return (
    <div
      className="hero my-16 h-[320px]"
      style={{ backgroundImage: `url(${CtaImg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <p>Want To Get 20% Off?</p>
          <h1 className="mb-5 text-4xl font-medium">Save Time & Money</h1>
          <button className="clean-btn">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;
