import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const storedReview = useLoaderData();
  // const [updateReview, setUpdateReview] = useState({});

  console.log(storedReview._id);

  const handleUpdateReview = (event) => {
    event.preventDefault();
    const textReview = event.target.message.value;

    const review = {
      reviewMessage: textReview,
    };

    fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Review update successfully");
      });
  };

  return (
    <div className="review-area max-w-xl my-16 mx-auto p-2 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-2xl py-2 font-semibold">
        Update Review: {storedReview?.review.reviewMessage}{" "}
      </h2>
      <div>
        <form onSubmit={handleUpdateReview}>
          <div className="flex flex-col w-full">
            <textarea
              rows="3"
              name="message"
              required
              defaultValue={storedReview?.review.reviewMessage}
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
      </div>
    </div>
  );
};

export default UpdateReview;
