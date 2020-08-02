import styled from "styled-components";

export const Overlay = styled.div`
    visibility: ${({ visible, visibleDelete }) =>
        visible || visibleDelete ? "visible" : "hidden"};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    backdrop-filter: blur(10px) grayscale(10%) brightness(80%);
`;
