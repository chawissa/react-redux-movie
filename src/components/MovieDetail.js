import React from "react";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useSelector } from "react-redux";

const MovieDetail = () => {
  // DATA
  const detail = useSelector((state) => state.detail);

  return <div></div>;
};

export default MovieDetail;
