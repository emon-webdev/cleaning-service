import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";


const AddService = () => {
  const services = useLoaderData();
  return (
    <>
      <div className="bg-[#F3F3F3] rounded-[10px] my-14 p-4 md:p-24">
        <div class="max-w-xl mx-auto">
          <h2 class="text-[50px] mb-14 leading-[60px] text-center text-[#232F4B] font-bold">
            <span class="text-[#1039AD]">Add</span> Services
          </h2>
        </div>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="title"
              placeholder="Service Title"
              className="input input-bordered input-primary w-full md:max-w-[460px] h-[60px]"
            />
            <input
              type="text"
              name="price"
              placeholder="Service Price"
              className="input input-bordered input-primary w-full md:max-w-[460px] h-[60px]"
            />
            <input
              type="text"
              name="photoUrl"
              placeholder="Service PhotoUrl"
              required
              className="input input-bordered input-primary w-full md:max-w-[460px] h-[60px]"
            />
            <textarea
              name="message"
              required
              className="textarea w-full  h-[60px] textarea-primary"
              placeholder="Service Describe"
            ></textarea>
          </div>

          {/* <input
              type="submit"
              class="border border-[#FF3811] bg-[#FF3811] w-full h-[56px] rounded-[5px] text-white font-semibold hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811] hover:duration-1650"
            >
              Order Confirm
            </input> */}
          <input
            type="submit"
            value="Add Service"
            class="border text-center mt-5 cursor-pointer border-[#1039AD] bg-[#1039AD] w-full h-[56px] rounded-[5px] text-white font-semibold hover:border-[#1039AD] hover:bg-transparent hover:text-[#1039AD] hover:duration-1650"
          />
        </form>
      </div>
      <div className="md:w-11/12 px-4 my-[100px] md:px-0 mx-auto">
        <div className="max-w-xl mx-auto">
          <h2 className="text-[50px] mb-14 leading-[60px] text-center text-[#232F4B] font-bold">
            <span className="text-[#1039AD]">My Different</span> Services{" "}
            {services?.length}
          </h2>
        </div>
        <div className="services-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((services) => (
            <div className="single-service">
            <PhotoProvider>
              <PhotoView src={services?.picture}>
                <img src={services?.picture} alt="" />
              </PhotoView>
            </PhotoProvider>
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-[#1039AD]">
                {services?.name}
              </h2>
              <h3>{services?.title}</h3>
              <p>{services?.about?.slice(0, 100) + "..."}</p>
              <p className="text-[#1039AD] my-2">Price: ${services?.price}</p>
              <p className="text-[#1039AD] my-2">Rating: {services?.rating}</p>
              <Link to={`/services/${services?._id}`}>
                <button className="text-[#1039AD] font-medium">
                  Details...
                </button>
              </Link>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddService;
