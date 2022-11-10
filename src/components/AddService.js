import React from "react";
import toast from "react-hot-toast";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const photoUrl = form.photoUrl.value;
    const message = form.message.value;

    const service = {
      name: title,
      price: price,
      picture: photoUrl,
      about: message,
    };

    fetch("https://cleaning-service-server-theta.vercel.app/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Add service successfully");
          form.reset();
        }
      })
      .then((error) => console.error(error));
  };

  return (
    <>
      <div className="bg-[#F3F3F3] rounded-[10px] my-14 p-4 md:p-24">
        <div className="max-w-xl mx-auto">
          <h2 className="text-[50px] mb-14 leading-[60px] text-center text-[#232F4B] font-bold">
            <span className="text-[#1039AD]">Add</span> Services
          </h2>
        </div>

        <form onSubmit={handlePlaceOrder}>
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
          <input
            type="submit"
            value="Add Service"
            className="border text-center mt-5 cursor-pointer border-[#1039AD] bg-[#1039AD] w-full h-[56px] rounded-[5px] text-white font-semibold hover:border-[#1039AD] hover:bg-transparent hover:text-[#1039AD] hover:duration-1650"
          />
        </form>
      </div>
    </>
  );
};

export default AddService;
