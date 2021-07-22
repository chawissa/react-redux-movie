import axios from "axios";
import { popularMoviesURL } from "../api";

// ACTION CREATOR

export const loadMovies = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularMoviesURL());
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
