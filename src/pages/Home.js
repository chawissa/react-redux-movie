import React, { useEffect } from "react";
// REDUX
import { useDispatch } from "react-redux";
import { loadMovies } from "../actions/moviesAction";

const Home = () => {
  // FETCH MOVIES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
