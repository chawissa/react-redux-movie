import React from "react";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useSelector } from "react-redux";

const MovieDetail = () => {
  // DATA
  const { movie, credits } = useSelector((state) => state.detail);

  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="rating">
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
        </div>

        <div className="info">
          <div className="genres">
            {movie.genres &&
              movie.genres.map((genre) => <h3 key={genre.id}>{genre.name}</h3>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
