import axios from "axios";
import { movieDetailsURL, movieCreditsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(movieDetailsURL(id));
  const creditsData = await axios.get(movieCreditsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      movie: detailData.data,
      credits: creditsData.data,
    },
  });
};
