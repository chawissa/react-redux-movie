const initState = {
  popular: [],
  nowShowing: [],
  upcoming: [],
  searched: [],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        popular: action.payload.popular,
        nowShowing: action.payload.nowShowing,
        upcoming: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
