import { useState } from "react";
import StarRatings from "./StarRating";

const Review = () => {
  const [Review, setReview] = useState();
  const handlerSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for Review");
  };
  return (
    <div>
      <h2>"What Our Guest Say...!"</h2>
      <div className="container border rounded m-3 p-3 bg-secondary">
        <div className="mb-3">
          <StarRatings />
        </div>
        <form onSubmit={handlerSubmit}>
          <input
            className="form-control p-3 "
            value={Review}
            type="text"
            placeholder="What's your feedback"
          />
          <div className="button mt-3 ">
            <button
              className="btn btn-success"
              onClick={() => setReview("")}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Review;
