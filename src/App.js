import React from "react";
// COMPONENTS AND PAGES
import Home from "./pages/Home";
import Nav from "./components/Nav";
// STYLES
import GlobalStyles from "./components/GlobalStyles";
// ROUTER
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/movie/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
