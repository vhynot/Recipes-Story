import styled from "styled-components";

export const Add = styled.div`
    visibility: ${({ activeDelete }) => (activeDelete ? "hidden" : "visible")};
    margin: 1.2rem;
    margin-right: 3rem;
    border-radius: 50%;
    stroke: ${({ theme: { color } }) => color.darkFont};
    user-select: none;
    transform: ${({ activeAdd }) =>
        activeAdd ? "rotate(45deg)" : "rotate(0)"};
    cursor: pointer;
    transition: transform 0.3s ease;
`;
