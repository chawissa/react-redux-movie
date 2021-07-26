const initialState = { movie: {}, credits: {} };

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        movie: action.payload.movie,
        credits: action.payload.credits,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
