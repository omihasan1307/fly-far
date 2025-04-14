/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "../../public/sliderimg5.webp",
  "../../public/sliderimg5.webp",
  "../../public/sliderimg5.webp",
];

const SliderSections = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <Slider {...settings}>
        {images.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`Slide ${i}`}
            sx={{
              width: "100%",
              height: { xs: 200, sm: 300, md: 400, lg: 500 },
              objectFit: "contain",
              borderRadius: 2,
            }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderSections;
