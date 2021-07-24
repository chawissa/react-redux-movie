import React from "react";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

const Movie = ({ name, released, poster }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={poster} alt={name} />
    </div>
  );
};

export default Movie;
