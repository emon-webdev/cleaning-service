import React, { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import SingleService from "./SingleService";

const Services = () => {
  useTitle("Service");

  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadServices = async () => {
      setIsLoading(true);
      const url = "https://cleaning-service-server-theta.vercel.app/services";
      try {
        const res = await fetch(url);
        const data = await res.json();
        setServices(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    loadServices();
  }, []);

  return (
    <div className="md:w-11/12 px-4 my-[100px] md:px-0 mx-auto">
      <div className="max-w-xl mx-auto">
        <h2 className="text-[50px] mb-14 leading-[60px] text-center text-[#232F4B] font-bold">
          <span className="text-[#1039AD]">My Different</span> Services{" "}
          {services?.length}
        </h2>
      </div>
      <div className="services-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="mx-auto text-center">
            <div className="w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
          </div>
        ) : (
          <>
            {services?.map((services) => (
              <SingleService key={services._id} services={services} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
