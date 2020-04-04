import React from "react";
import Pic from "../../graphics/profilePic.JPG";

const Intro = () => {
  return (
    <div className="w-80 m-5">
      <img
        src={Pic}
        className="card-img-top rounded-circle shadow-lg bg-white rounded"
        alt="Shubahm Sunny"
      />
      <div className="card-body">
        <h5 className="card-title h3">Shubham Sunny</h5>
        <p className="card-text text-white text-justify">
          More than 1.5 yrs in Frontend Development. Skilled in Javascript, C++,
          PHP & MySQL ,Special interest in Data Structures & Algorithms
          competitive Programming. Strong engineering professional with a
          Bachelor’s Degree focused in Information Technology from National
          Institute of Technology Kurukshetra .
        </p>
      </div>
    </div>
  );
};

export default Intro;
