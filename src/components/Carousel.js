import React, { useState } from "react";
import { img_185, noPicture } from "../config/config";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { LeftArrowAlt, RightArrowAlt } from "@styled-icons/boxicons-regular";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const handleDragStart = (e) => e.preventDefault();

const Carousel = () => {
  const { credits } = useSelector((state) => state.detail);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = credits.cast.map((cast) => (
    <div className="carouselItem">
      <img
        src={cast.profile_path ? `${img_185}/${cast.profile_path}` : noPicture}
        alt={cast?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{cast?.name}</b>
    </div>
  ));

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    0: {
      items: 1,
    },
    800: {
      items: 3,
    },
    1024: {
      items: 5,
    },
  };

  return [
    <AliceCarousel
      responsive={responsive}
      mouseTracking
      items={items}
      //   autoPlay={true}
      disableDotsControls
      disableButtonsControls
      activeIndex={activeIndex}
      onSlideChange={syncActiveIndex}
    />,
    <div
      className="b-refs-buttons"
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <LeftArrowAlt
        onClick={slidePrev}
        style={{ marginRight: "15px", cursor: "pointer" }}
      />
      <RightArrowAlt onClick={slideNext} style={{ cursor: "pointer" }} />
    </div>,
  ];
};

export default Carousel;
