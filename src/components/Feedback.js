import React from "react";

const Feedback = () => {
  return (
    <div>
      <div className="hero min-h-[400px] my-14 bg-base-200">
        <div className="hero-content py-10 text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              What Clients Say
              <span className="text-[#1039AD]">About Dclean.</span>
            </h1>
            <p className="py-6">
              “Quisuam esaui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi aempora labore
              incidunt ut labore et.You’re not on your own when setting up or
              running.
            </p>
            <div className="text-center">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" alt="author" />
                </div>
              </div>
              <p>Steven Smith</p>
              <p>Web Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
