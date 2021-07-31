import React from "react";
import { img_300, img_400, unavailable, noPicture } from "../config/config";
import Carousel from "./Carousel";
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
        <DescriptionMovie>
          <div className="media">
            <img
              src={
                movie.backdrop_path
                  ? `${img_400}/${movie.poster_path}`
                  : unavailable
              }
              alt={movie.name}
            />
          </div>

          <Info>
            <div className="title">
              <h3>
                {movie.title} ({(movie.release_date || "-----").substring(0, 4)}
                )
              </h3>
            </div>

            <Stats>
              <p>Rating: {movie.vote_average}</p>
              <Genres>
                {movie.genres.map((genre) => (
                  <h3 key={genre.id}>{genre.name}</h3>
                ))}
              </Genres>
              {movie.runtime} minutes
            </Stats>

            {/* {movie.tagline && <i className="tagline">{movie.tagline}</i>} */}
            <i className="tagline">{movie.tagline}</i>
            <div className="overview">
              <p>{movie.overview}</p>
            </div>
          </Info>
        </DescriptionMovie>

        <Carousel />
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
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
`;

const DescriptionMovie = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)``;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const Genres = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const Description = styled(motion.div)``;

export default MovieDetail;
