import React from "react";
// ANIMATIONS
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX AND ROUTES
import { fetchSearch } from "../actions/moviesAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  return (
    <StyledNav>
      <h1>Movies</h1>
      <form className="search">
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
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
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
export default Nav;
