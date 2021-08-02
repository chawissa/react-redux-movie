import React from "react";
import { img_300, img_400, unavailable, noPicture } from "../config/config";
import Carousel from "./Carousel";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
import { Play } from "@styled-icons/boxicons-regular";
// REDUX
import { useSelector } from "react-redux";

const MovieDetail = () => {
  // DATA
  const { movie, credits, video } = useSelector((state) => state.detail);

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
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </Genres>
              <p>{movie.runtime} minutes</p>
            </Stats>

            {/* {movie.tagline && <i className="tagline">{movie.tagline}</i>} */}
            <i className="tagline">{movie.tagline}</i>
            <Overview>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </Overview>
            <Button
              target="_blank"
              href={`https://www.youtube.com/watch?v=${video.results[0]?.key}`}
            >
              <SmallPlay />
              Watch the trailer
            </Button>
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
  padding: 3rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
`;

const DescriptionMovie = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

const Info = styled(motion.div)`
  padding-left: 3rem;
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const Genres = styled(motion.div)`
  display: flex;

  & p {
    padding: 0 0.3rem;
  }
`;

const Overview = styled(motion.div)`
  margin: 1rem 0;
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 2rem;
  margin: 1rem 0;
  text-align: center;
  background: #ff7676;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
`;

const SmallPlay = styled(Play)`
  height: 3rem;
`;

export default MovieDetail;
