import styled from "styled-components";

export const RecipeWrapper = styled.div`
    width: 80%;
    margin: 2rem auto;
    margin-bottom: calc(2rem + 62px);
    background-image: linear-gradient(150deg, #764b65, #4b1338);
    padding: 3rem;
    border-radius: 1.5rem;
`;

export const RecipeTitle = styled.p`
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
`;

export const List = styled.ol`
    list-style: none;
    counter-reset: li;
    padding: 0;
`;
export const Ingredient = styled.li`
    position: relative;
    counter-increment: li;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 5rem;
    padding: 2rem 1rem 2rem 6rem;
    background: #633957;
    border-radius: 30px;
    margin: 1rem 0;
    &::before {
        position: absolute;
        content: counter(li);
        font-size: 2rem;
        font-weight: 700;
        color: #76526a;
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 4rem;
        height: 4rem;
        left: 1rem;
        top: 1rem;
        border-radius: 50%;
    }
`;
