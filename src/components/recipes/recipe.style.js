import styled from "styled-components";

export const RecipeWrapper = styled.div`
    background-image: linear-gradient(150deg, #764b65, #4b1338);
    border-radius: 1.5rem;
    margin: 2rem;
    position: relative;
`;

export const Text = styled.p`
    text-align: center;
    padding: 2rem calc(2rem + 55px);
    font-size: 2rem;
    font-weight: 500;
`;

export const HoverWrapper = styled.div`
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    right: 2rem;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 2;
    background: red;
`;
