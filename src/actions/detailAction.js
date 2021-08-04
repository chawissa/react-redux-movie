import axios from "axios";
import { movieDetailsURL, movieCreditsURL, movieVideoURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(movieDetailsURL(id));
  const creditsData = await axios.get(movieCreditsURL(id));
  const videoData = await axios.get(movieVideoURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      movie: detailData.data,
      credits: creditsData.data,
      video: videoData.data,
    },
  });
};
