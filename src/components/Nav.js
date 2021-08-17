import React, { useState } from "react";
// ANIMATIONS
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
// REDUX AND ROUTES
import { fetchSearch } from "../actions/moviesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const handleInput = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="visible">
      <h1 onClick={clearSearched}>Movies</h1>
      <form className="search">
        <input value={textInput} onChange={handleInput} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 0rem;
  text-align: center;
  margin: 10rem 0;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    border: none;
    color: white;
  }
  @media (max-width: 768px) {
    padding: 2rem 0rem;
    margin: 0;
    input {
      width: 50%;
      font-size: 1rem;
    }
    button {
      font-size: 1rem;
    }
  }
`;
export default Nav;
