import React from "react";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
import { img_500 } from "../config/config";

const Movie = ({ name, released, poster }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{released}</p>
      {/* <img alt={name} src={`${img_500}/${poster}`/> */}
      <img alt={name} src={`${img_500}/${poster}`} />
    </div>
  );
};

export default Movie;
