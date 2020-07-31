import styled from "styled-components";

export const HeaderWrapper = styled.div`
    text-align: center;
    margin: 2rem;
`;

export const Title = styled.p`
    color: ${({ theme: { color } }) => color.darkFont};
    font-size: 3.2rem;
    font-weight: ${({ bold }) => (bold ? "500" : "300")};
`;
