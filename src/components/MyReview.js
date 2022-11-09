import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useTitle from "../hooks/useTitle";

const MyReview = () => {
  useTitle("My Review ");
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/userReviews/${user.uid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMyReviews(data);
      });
  }, [user.uid]);

  //delete and remaining review
  const handleDelete = (review) => {
    fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingReviews = myReviews.filter(
            (r) => r._id !== review._id
          );
          setMyReviews(remainingReviews);
          toast.success("Delete Review");
        }
      });
  };

  return (
    <div>
      <div className="review-area max-w-xl my-16 mx-auto p-2 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-[35px] mb-6 leading-[46px] text-center text-[#232F4B] font-bold">
          <span className="text-[#1039AD]">My </span> Review
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
                <span className="text-xs dark:text-gray-400">{user?.uid}</span>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <h2 className="text-[20px] mb-3 leading-[26px] text-[#232F4B] font-bold">
              <span className="text-[#1039AD]"></span> Reviews :{" "}
              {/* {displayReviews.length} */}
            </h2>
            {/* Review item show */}
            <div>
              {myReviews?.map((review, index) => (
                <div key={review._id} className="my-2">
                  <p className="text-lg my-2">
                    {index + 1}. {review?.review}
                  </p>
                  <Link to={`/updateReview/${review?._id}`}>
                    <button className="btn btn-success btn-xs">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(review)}
                    className="btn btn-error btn-xs ml-4"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
