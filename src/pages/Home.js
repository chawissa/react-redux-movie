import React, { useEffect } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/moviesAction";
// COMPONENTS
import Movie from "../components/Movie";
import MovieDetail from "../components/MovieDetail";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Home = () => {
  // GET THE CURRENT LOCATION
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);

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
      {pathId && <MovieDetail />}
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
      <h2>Upcoming</h2>
      <Movies>
        {upcoming.map((movie) => (
          <Movie
            name={movie.title}
            released={movie.release_date}
            id={movie.id}
            poster={movie.poster_path}
            key={movie.id}
          />
        ))}
      </Movies>
      <h2>Popular</h2>
      <Movies>
        {popular.map((movie) => (
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

const MovieList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Movies = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
