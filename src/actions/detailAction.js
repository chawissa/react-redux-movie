import axios from "axios";
import { movieDetailsURL } from "../api";

const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(movieDetailsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      movie: detailData.data,
    },
  });
};
