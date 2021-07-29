import React from "react";
import { img_300, img_500, unavailable, noPicture } from "../config/config";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useSelector } from "react-redux";

const MovieDetail = () => {
  // DATA
  const { movie, credits } = useSelector((state) => state.detail);

  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>
              {movie.title} ({(movie.release_date || "-----").substring(0, 4)})
            </h3>

            <p>Rating: {movie.vote_average}</p>
          </div>

          <div className="info">
            <div className="genres">
              {movie.genres.map((genre) => (
                <h3 key={genre.id}>{genre.name}</h3>
              ))}
              {movie.runtime} minutes
            </div>
          </div>
        </div>

        <div className="media">
          <img
            src={
              movie.backdrop_path
                ? `${img_500}/${movie.poster_path}`
                : unavailable
            }
            alt={movie.name}
          />
        </div>
        {/* {movie.tagline && <i className="tagline">{movie.tagline}</i>} */}
        <i className="tagline">{movie.tagline}</i>
        <div className="description">
          <p>{movie.overview}</p>
        </div>
        <div className="carousel">
          {credits.cast.map((cast) => (
            <img
              src={
                cast.profile_path
                  ? `${img_300}/${cast.profile_path}`
                  : noPicture
              }
              key={cast.id}
              alt={cast?.name}
            />
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
`;

export default MovieDetail;
