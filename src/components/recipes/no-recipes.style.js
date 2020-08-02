import styled from "styled-components";

export const Title = styled.p`
    color: ${({ theme: { color } }) => color.darkFont};
    font-size: 1.6rem;
    font-weight: 300;
    text-align: center;
    position: absolute;
    top: calc(50% - 62.7px);
    left: 50%;
    transform: translate(-50%, 0);
    @media (min-width: 768px) {
        top: calc(50% + 62.7px);
    }
`;
