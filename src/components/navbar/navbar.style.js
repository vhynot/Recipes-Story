import styled from "styled-components";

export const NavbarWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 35px 35px 0 0;
    background-color: ${({ theme: { color } }) => color.white};
    user-select: none;
    z-index: 11;
`;

export const SVG = styled.svg`
    margin: 1.3rem;
    margin-left: 3rem;
    fill: ${({ theme: { color } }) => color.darkFont};
`;
