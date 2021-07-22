import axios from "axios";
import {
  popularMoviesURL,
  nowShowingMoviesURL,
  upcomingMoviesURL,
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
