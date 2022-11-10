import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../hooks/useTitle";

const ServiceDetails = () => {
  useTitle("Service Details");
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, name } = service;
  const [reviews, setReviews] = useState([]);

  //review all
  useEffect(() => {
    fetch(`https://cleaning-service-server-theta.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [_id]);
  

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewMessage = form.message.value;
    const userName = user?.displayName || "Undefined";
    const photoURL = user?.photoURL || "Undefined";
    const email = user?.email || "Undefined";
    const uid = user?.uid || "Undefined";
    const serviceId = _id;
    const sName = name;

    const review = {
      email,
      displayName: userName,
      photoURL,
      uid,
      // service info
      name: sName,
      serviceId: serviceId,
      //review
      review: {reviewMessage},
    };

    fetch("https://cleaning-service-server-theta.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {

          const newReview = review;
          setReviews([newReview, ...reviews])

          toast.success("Add Review successfully");
          form.reset();
        }
      })
      .then((error) => console.error(error));
  };

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
                Price: $ {service?.price}
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-400">{service?.about}</p>
          </div>
        </div>
      </div>

      <div className="review-area max-w-xl my-16 mx-auto p-2 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-[35px] mb-6 leading-[46px] text-center text-[#232F4B] font-bold">
          <span className="text-[#1039AD]">Service </span> Review
        </h2>
        <div className="container flex flex-col w-full max-w-lg p-2 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          {user?.uid ? (
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
                  <span className="text-xs dark:text-gray-400">
                    Id: {user?.email}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-[25px] mb-2 leading-[34px] text-center text-[#232F4B] font-bold">
                <span className="text-[#1039AD]">Please Login add a </span>{" "}
                Review?
                <Link to="/signin" className="text-[#1039AD]">
                  Login
                </Link>
              </h2>
            </>
          )}
          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <>
              {user?.uid && (
                <form onSubmit={handleReview}>
                  <div className="flex flex-col w-full">
                    <textarea
                      rows="3"
                      name="message"
                      required
                      placeholder="Review..."
                      className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900 border border-black"
                    ></textarea>
                    <button
                      type="submit"
                      className="py-4 my-4 font-semibold rounded-md text-gray-900 bg-violet-400"
                    >
                      Review Submit
                    </button>
                  </div>
                </form>
              )}
            </>
            <h2 className="text-[20px] mb-3 leading-[26px] text-[#232F4B] font-bold">
              <span className="text-[#1039AD]"></span> Reviews :{reviews.length}
            </h2>
            {/* Review item show */}
            <div>
              {reviews?.map((review, index) => (
                <p key={review._id} className="text-lg">
                  {index + 1}. {review?.review.reviewMessage}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
