import styled from "styled-components";

export const DeleteFormWrapper = styled.div`
    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
    position: fixed;
    z-index: 10;
    top: calc(50% - 62.7px);
    left: 50%;
    width: 80%;
    padding: 3rem;
    background-color: ${({ theme: { color } }) => color.darkFont};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 57rem;
    transform: ${({ visible }) =>
            visible ? "translateY(0)" : "translateY(10px)"}
        translate(-50%, calc(-50% + 62.7px));
    transition: transform 0.3s ease-out;
    border-radius: 5px;
    @media (min-width: 768px) {
        top: calc(50% + 62.7px);
        transform: ${({ visible }) =>
                visible ? "translateY(0)" : "translateY(-10px)"}
            translate(-50%, calc(-50% - 62.7px));
    }
`;

export const Title = styled.p`
    font-weight: 300;
    font-size: 2rem;
    color: white;
    text-align: center;
`;

export const Bold = styled.span`
    font-weight: 700;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    width: 100%;
    @media (min-width: 375px) {
        justify-content: space-around;
    }
`;

export const Submit = styled.button`
    font-weight: 500;
    font-size: 2rem;
    padding: 1rem;
    border: 1px solid ${({ theme: { color } }) => color.lightRed};
    outline: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.1s ease-in;
    color: ${({ theme: { color } }) => color.lightRed};
    background-color: transparent;
    &:hover {
        color: white;
        background-color: ${({ theme: { color } }) => color.lightRed};
    }
    @media (min-width: 375px) {
        padding: 1rem 2rem;
        margin-left: 1rem;
    }
    @media (min-width: 768px) {
        margin: 0;
    }
`;

export const Reject = styled(Submit)`
    background-color: transparent;
    border: 1px solid white;
    color: ${({ theme: { color } }) => color.white};
    transition: all 0.1s ease-in;
    &:hover {
        color: ${({ theme: { color } }) => color.darkFont};
        background-color: white;
    }
    @media (min-width: 375px) {
        margin-left: 0;
        margin-right: 1rem;
    }
    @media (min-width: 768px) {
        margin: 0;
    }
`;
