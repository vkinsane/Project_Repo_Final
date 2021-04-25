import React from "react";
// import axios from "axios";
const ImageHelper = ({ post }) => {
  const imageurl = post
    ? `http://localhost:5000/post/photo/${post._id}`
    : `https://upload.wikimedia.org/wikipedia/commons/7/77/Google_Images_2015_logo.svg`;

  return <img src={imageurl} alt="photo" height="200px" width="400px" />;
};

export default ImageHelper;
