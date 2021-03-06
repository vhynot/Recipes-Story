import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        overflow: ${({ noScrollAddForm, noScrollEditForm }) =>
            noScrollAddForm || noScrollEditForm ? "hidden" : "unset"};
        font-size: 62.5%;
        font-family: 'Inter', sans-serif;
        color: ${({ theme: { color } }) => color.white};
        background-image: linear-gradient(120deg, #fac348, #fab41a);
        min-height: 100vh;
    }
    p,li, input,button {
        font-size: 1.6rem;
    }
`;
