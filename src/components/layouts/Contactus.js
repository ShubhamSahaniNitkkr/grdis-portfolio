import React from "react";
import styles from "../../css/home.module.css";

import img1 from "../../graphics/github.png";
import img2 from "../../graphics/gmail.png";
import img3 from "../../graphics/linkedin.png";
import img4 from "../../graphics/twitter.png";
import img5 from "../../graphics/facebook.png";

const Contactus = () => {
  let imgArr = [img5, img4, img3, img2, img1],
    result;
  result = imgArr.map((i) => {
    return (
      <div key={i} className={`p-2 bd-highlight`}>
        <img
          className={`img-thumbnail ${styles.socialBtn}`}
          src={i}
          alt="Social"
          width="50"
          height="50"
        />{" "}
      </div>
    );
  });
  return (
    <div className="d-flex flex-row-reverse bd-highlight pt-5 shadow-lg rounded ">
      {result}
    </div>
  );
};

export default Contactus;
