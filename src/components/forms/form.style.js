import styled from "styled-components";

export const FormWrapper = styled.form`
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
    position: fixed;
    top: 1rem;
    left: 50%;
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    width: 80%;
    max-width: 57rem;
    margin-bottom: 62.7px;
    /* background: #fff; */
    background-image: linear-gradient(150deg, #764b65, #4b1338);
    border-radius: 5px;
    transform: ${({ visible }) =>
            visible ? "translateY(0)" : "translateY(10px)"}
        translate(-50%, 0);
    transition: transform 0.3s ease-out;
    z-index: 10;
    @media (min-width: 768px) {
        top: calc(50% + 62.7px);
        transform: ${({ visible }) =>
                visible ? "translateY(0)" : "translateY(-10px)"}
            translate(-50%, calc(-50% - 62.7px));
    }
`;

export const TitleWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const Title = styled.p`
    margin: 1.5rem auto;
    text-align: start;
    font-size: 2rem;
    font-weight: 700;
    /* color: ${({ theme: { color } }) => color.darkFont}; */
    color: ${({ theme: { color } }) => color.white};
    @media (min-width: 375px) {
        margin: 2rem auto;
        font-size: 2.4rem;
    }
    @media (min-width: 768px) {
        margin: 5rem auto;
        font-size: 3rem;
    }
`;

export const InputTitle = styled.input`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 1rem;
    /* background-image: linear-gradient(150deg, #fab51b, #fac347); */
    background: #774669;
    color: ${({ theme: { color } }) => color.white};
    font-size: 1.6rem;
    font-weight: 500;
    outline: none;
    border: ${({ isEmpty }) =>
        isEmpty ? "1px solid #f76040" : "1px solid transparent"};
    border-radius: 30px;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.34);
    &::placeholder {
        color: #fff;
    }
    @media (min-width: 375px) {
        padding: 1.5rem;
        font-size: 1.8rem;
    }
    /* @media (min-width: 768px) {
        font-size: 2rem;
    } */
`;

export const InputIngredients = styled.textarea`
    font-family: "Inter", sans-serif;
    width: 80%;
    margin: 1rem auto;
    padding: 1rem;
    min-height: 10rem;
    /* background-image: linear-gradient(150deg, #fab51b, #fac347); */
    background: #774669;
    color: ${({ theme: { color } }) => color.white};
    font-size: 1.6rem;
    font-weight: 400;
    outline: none;
    border: ${({ isEmpty }) =>
        isEmpty ? "1px solid #f76040" : "1px solid transparent"};
    border-radius: 30px;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.34);
    &::placeholder {
        font-family: "Inter", sans-serif;
        color: #fff;
        font-weight: 400;
    }
    @media (min-width: 375px) {
        font-size: 1.8rem;
        padding: 1.5rem;
        min-height: 12rem;
    }
    /* @media (min-width: 768px) {
        font-size: 2rem;
    } */
`;

export const InputButton = styled.button`
    width: 80%;
    margin: 1.5rem auto;
    padding: 1rem;
    color: ${({ theme: { color } }) => color.white};
    font-size: 1.9rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    outline: none;
    border: none;
    border-radius: 30px;
    background-color: ${({ isEmpty }) => (isEmpty ? "#f76040" : "#e63a65")};
    transition: background-color 0.15s ease-in;
    cursor: pointer;
    &:hover {
        background-color: ${({ isEmpty }) => (isEmpty ? "#f76040" : "#f73565")};
    }
    @media (min-width: 375px) {
        margin: 2rem auto;
        font-size: 2rem;
        padding: 1.5rem;
    }
    @media (min-width: 768px) {
        margin: 5rem auto;
        font-size: 2.1rem;
    }
`;
