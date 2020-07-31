import styled from "styled-components";

export const EditButton = styled.button`
    background: yellow;
    border-radius: 30px;
    width: 100%;
    height: 6rem;
    margin-top: 3rem;
    background-color: ${({ theme: { color } }) => color.pink};
    color: ${({ theme: { color } }) => color.white};
    font-size: 2rem;
    font-weight: 700;
    outline: none;
    border: none;
    border-radius: 30px;
    letter-spacing: 0.1rem;
`;
