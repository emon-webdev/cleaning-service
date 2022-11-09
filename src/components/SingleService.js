import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";
const SingleService = ({ services }) => {
  useTitle("Single Service")
  const { title, _id, price, about, picture, rating } = services;
  return (
    <div className="single-service">
      <PhotoProvider>
        <PhotoView src={picture}>
          <img src={picture} alt="" />
        </PhotoView>
      </PhotoProvider>
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-[#1039AD]">
          {services?.name}
        </h2>
        <h3>{title}</h3>
        <p>{about?.slice(0, 100) + "..."}</p>
        <p className="text-[#1039AD] my-2">Price: ${price}</p>
        <p className="text-[#1039AD] my-2">Rating: {rating}</p>
        <Link to={`/services/${_id}`}>
          <button className="text-[#1039AD] font-medium">Details...</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
