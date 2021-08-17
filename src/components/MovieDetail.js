import React from "react";
import { img_780, unavailableLandscape } from "../config/config";
import Carousel from "./Carousel";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "@styled-icons/boxicons-regular";
import { popup } from "../animations";
// REDUX
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const MovieDetail = ({ pathId }) => {
  const history = useHistory();

  // EXIT DETAIL
  const handleExitDetail = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  // DATA
  const { movie, video, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={handleExitDetail}>
          <Detail
            variants={popup}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={pathId}
          >
            <DescriptionMovie>
              <Media>
                <motion.img
                  layoutId={`image-${pathId}`}
                  src={
                    movie.backdrop_path
                      ? `${img_780}/${movie.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={movie.name}
                />
              </Media>

              <div>
                <Title>
                  <motion.h3 layoutId={`title-${pathId}`}>
                    {movie.title} (
                    {(movie.release_date || "-----").substring(0, 4)})
                  </motion.h3>
                </Title>

                <Stats>
                  <Rating>
                    {movie.vote_average !== 0 && (
                      <p> Rating: {movie.vote_average}</p>
                    )}
                  </Rating>
                  <Genres>
                    {movie.genres.map((genre) => (
                      <p key={genre.id}>{genre.name}</p>
                    ))}
                  </Genres>
                  {movie.runtime !== 0 && <p>{movie.runtime} minutes</p>}
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
              </div>
            </DescriptionMovie>

            <Carousel />
          </Detail>
        </CardShadow>
      )}
    </>
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
  z-index: 5;
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
  overflow: hidden;
  z-index: 10;
  @media (max-width: 900px) {
    padding: 2rem 2rem;
  }
`;

const DescriptionMovie = styled(motion.div)``;

const Media = styled(motion.div)`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Title = styled(motion.div)`
  h3 {
    font-size: 2.5rem;
  }

  @media (max-width: 540px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  padding-bottom: 1rem;

  @media (max-width: 780px) {
    display: inline;
    padding-bottom: 2rem;
  }
`;

const Rating = styled(motion.div)`
  padding-right: 1.5rem;
`;

const Genres = styled(motion.div)`
  display: flex;
  padding-right: 1.5rem;

  p {
    padding: 0 0.3rem;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    p {
      padding: 0;
    }
  }
`;

const Overview = styled(motion.div)`
  margin: 1rem 0;
`;

const Button = styled(motion.a)`
  display: inline-block;
  border-radius: 3px;
  padding: 0.3rem 2rem;
  margin: 1rem 0;
  text-align: center;
  background: #ff7676;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  @media (max-width: 540px) {
    font-size: 0.9rem;
  }
`;

const SmallPlay = styled(Play)`
  height: 3rem;
`;

export default MovieDetail;
