const initialState = { movie: {} };

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        movie: action.payload.movie,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
