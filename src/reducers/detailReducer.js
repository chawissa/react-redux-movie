const initialState = {
  movie: { genres: [] },
  credits: { cast: [] },
  video: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        movie: action.payload.movie,
        credits: action.payload.credits,
        video: action.payload.video,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
