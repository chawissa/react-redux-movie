import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMovies } from "./actions/moviesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <div className="App">
      <h1>Hello Movie</h1>
    </div>
  );
}

export default App;
