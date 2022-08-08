import React from "react";
import CustomImage from "./CustomImage";

const Hero = () => {
  const images = [
    "/img/food/food (1).png",
    "/img/food/food (2).png",
    "/img/food/food (3).png",
    "/img/food/food (4).png",
    "/img/food/food (5).png",
    "/img/food/food (6).png",
    "/img/food/food (7).png",
    "/img/food/food (8).jpg",
    "/img/food/food (9).jpg",

  ];
  return (
    <div className="section hero">
      <div className="col typography">
        <h className="title">What Are We About</h>
        <p className="info">
         ShawarmTek is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <button className="btn">export now</button>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} pt={"90%"} imgSrc={src} />
        )
        )}
      </div>
    </div>
  );
};

export default Hero;
