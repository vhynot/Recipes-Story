import styled from "styled-components";

export const EditButton = styled.button`
    border-radius: 30px;
    width: 100%;
    height: 6rem;
    margin-top: 2rem;
    background-color: ${({ theme: { color } }) => color.lightPink};
    color: ${({ theme: { color } }) => color.white};
    font-size: 2rem;
    font-weight: 500;
    outline: none;
    border: none;
    border-radius: 30px;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: background-color 0.15s ease-in;
    &:hover {
        background-color: ${({ theme: { color } }) => color.pink};
    }
`;
