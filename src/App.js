import React from "react";
// COMPONENTS AND PAGES
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import {Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/movie/:id", "/"]}>
      <Home />
      </Route>
    </div>
  );
}

export default App;
