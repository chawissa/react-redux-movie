import React from "react";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
import { img_300, unavailable } from "../config/config";
// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Movie = ({ name, released, poster, id }) => {
  // LOAD DETAIL
  const dispatch = useDispatch();
  const handleLoadDetail = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledMovie onClick={handleLoadDetail}>
      <img alt={name} src={poster ? `${img_300}/${poster}` : unavailable} />
      <h3>{name}</h3>
      <p>{released}</p>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  img {
    width: 100%;
    height: 40vh;
    border-radius: 1rem 1rem 0rem 0rem;
  }
`;

export default Movie;
