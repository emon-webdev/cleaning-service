import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="md:w-11/12 px-4 my-[100px] md:px-0 mx-auto">
      <div className="max-w-xl mx-auto">
        <h2 className="text-[50px] mb-14 leading-[60px] text-center text-[#232F4B] font-bold">
          <span className="text-[#1039AD]">My Different</span> Services{" "}
          {services?.length}
        </h2>
      </div>
      <div className="services-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((services) => (
          <SingleService key={services._id} services={services} />
        ))}
      </div>
    </div>
  );
};

export default Services;
