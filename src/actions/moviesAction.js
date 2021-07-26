import axios from "axios";
import {
  popularMoviesURL,
  nowShowingMoviesURL,
  upcomingMoviesURL,
  // trendingMoviesURL,
} from "../api";

// ACTION CREATOR

export const loadMovies = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularMoviesURL());
  // const trendingData = await axios.get(trendingMoviesURL());
  const nowShowingData = await axios.get(nowShowingMoviesURL());
  const upcomingData = await axios.get(upcomingMoviesURL());
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      popular: popularData.data.results,
      // trending: trendingData.data.results,
      nowShowing: nowShowingData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};
