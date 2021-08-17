import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
          }
    }
    body {
        font-family: "Montserrat", sans-serif;
        width: 100%;
    }
    h2 {
        font-size: 3rem;
        font-family: "Abril Fatface", cursive;
        font-weight: lighter;
        color: #333;
        @media(max-width: 400px) {
            padding: 1rem;
            font-size: 2rem;
        }
    }
    h3 {
        font-size: 1.2rem;
        color: #333;
        @media(max-width: 540px) {
            font-size: 0.9rem
        }
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
        @media (max-width: 1040px) {
            font-size: .9rem;
        }
    }
    a {
        text-decoration: none;
        color: #333;
    }
    input {
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;
