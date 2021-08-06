import React from "react";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
import { img_300, unavailable } from "../config/config";
// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

const Movie = ({ name, released, poster, id }) => {
  const stringPathId = id.toString();
  // LOAD DETAIL HANDLER
  const dispatch = useDispatch();
  const handleLoadDetail = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledMovie
      layout={false}
      layoutId={stringPathId}
      onClick={handleLoadDetail}
    >
      <Link to={`/movie/${id}`}>
        <motion.img
          layoutId={`image-${stringPathId}`}
          alt={name}
          src={poster ? `${img_300}/${poster}` : unavailable}
        />
        <motion.h3 layoutId={`title-${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    border-radius: 1rem 1rem 0rem 0rem;
  }
`;

export default Movie;
