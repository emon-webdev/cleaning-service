import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ services }) => {
  const {  title,_id, price, about, picture, rating } = services;
  return (
    <div className="single-service">
      <img src={picture} alt="" srcSet="" />
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-[#1039AD]">{services?.name}</h2>
        <h3>{title}</h3>
        <p>{about.slice(0, 70) + "..."}</p>
        <p className="text-[#1039AD] my-2">Price: ${price}</p>
        <p className="text-[#1039AD] my-2">Rating: {rating}</p>
        <Link to={`/services/:${_id}`}>
          <button className="text-[#1039AD] font-medium">Read More...</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
