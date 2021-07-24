import React, { useEffect } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/moviesAction";
// COMPONENTS
import Movie from "../components/Movie";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  // FETCH MOVIES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);
  // GET DATA BACK
  const { popular, nowShowing, upcoming } = useSelector(
    (state) => state.movies
  );

  return (
    <MovieList>
      <h2>Now Showing</h2>
      <Movies>
        {nowShowing.map((movie) => (
          <Movie
            name={movie.title}
            released={movie.release_date}
            id={movie.id}
            poster={movie.poster_path}
            key={movie.id}
          />
        ))}
      </Movies>
    </MovieList>
  );
};

const MovieList = styled(motion.div)``;

const Movies = styled(motion.div)``;

export default Home;
