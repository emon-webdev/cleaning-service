import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();

  console.log(service);
  return (
    <div>
      <div className="max-w-xl my-16 mx-auto p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">
              {service?.name}
            </h2>
          </div>
          <a rel="noopener noreferrer" href="/">
            Rating: {service?.rating}
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={service?.picture}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>Id: {service._id}</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="/" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                Price: {service?.price}
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-400">{service?.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
