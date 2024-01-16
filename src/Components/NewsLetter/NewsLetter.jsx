import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive offer on your email</h1>
      <p>subscribe to our newsletter to stay updated</p>
      <div>
        <input type="email" placeholder="your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
