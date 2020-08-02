import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    width: 100%;
    transform: translate(-50%, 0);
    border-radius: 1.5rem 1.5rem 0 0;
    background-color: ${({ theme: { color } }) => color.white};
    user-select: none;
    z-index: 11;
    box-shadow: 0px 7px 13px 2px ${({ theme: { color } }) => color.darkFont};
    @media (min-width: 768px) {
        bottom: unset;
        top: 0;
        border-radius: 0 0;
        box-shadow: 0px -10px 20px 2px ${({ theme: { color } }) => color.darkFont};
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 137rem;
    margin: 0 auto;
`;

export const LinkTo = styled(Link)`
    margin: 1.3rem;
    margin-left: 3rem;
`;

export const SVG = styled.svg`
    fill: ${({ theme: { color } }) => color.darkFont};
`;
