const initialState = { movie: {}, credits: {}, video: {} };

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        movie: action.payload.movie,
        credits: action.payload.credits,
        video: action.payload.video,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
