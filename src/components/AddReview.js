import React, { useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';

const AddReview = () => {
    useTitle('Add Review')
    const [reviews, setReviews] = useState([]);
    //review all
    useEffect(() => {
      fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    return (
        <div>
            <h2>Add All Review {reviews.length}</h2>
        </div>
    );
};

export default AddReview;