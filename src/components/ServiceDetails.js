import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();

  return (
    <div>
      <div className="max-w-xl my-16 mx-auto p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">{service?.name}</h2>
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

      <div className="review-area max-w-xl my-16 mx-auto p-2 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <h2 class="text-[35px] mb-6 leading-[46px] text-center text-[#232F4B] font-bold">
          <span class="text-[#1039AD]">Service </span> Review
        </h2>
        <div className="container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src={user?.photoURL}
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">{user?.displayName}</h4>
                <span className="text-xs dark:text-gray-400">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-500">
              <span className="text-xl font-bold">
                Rating: {service?.rating}
              </span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.
            </p>
            <>
              {user?.uid && (
                <div className="flex flex-col w-full">
                  <textarea
                    rows="3"
                    placeholder="Message..." 
                    className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900 border border-black" 
                  ></textarea>
                  <button
                    type="button"
                    className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400"
                  >
                    Leave feedback
                  </button>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
