import styled from "styled-components";

export const ButtonWrapper = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    right: 1.5rem;
    top: 50%;
    transform: translate(0, -50%);

    &:hover > svg {
        stroke: ${({ theme: { color } }) => color.lightRed};
    }
`;

export const SVG = styled.svg`
    stroke: #846779;
    transition: stroke 0.15s ease-in;
    cursor: pointer;
`;
