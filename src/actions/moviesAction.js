import axios from "axios";
import {
  popularMoviesURL,
  nowShowingMoviesURL,
  upcomingMoviesURL,
  searchMovieURL,
} from "../api";

// ACTION CREATOR

export const loadMovies = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularMoviesURL());
  const nowShowingData = await axios.get(nowShowingMoviesURL());
  const upcomingData = await axios.get(upcomingMoviesURL());
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      popular: popularData.data.results,
      nowShowing: nowShowingData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearch = (movie_name) => async (dispatch) => {
  const searchMovies = await axios.get(searchMovieURL(movie_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchMovies.data.results,
    },
  });
};
