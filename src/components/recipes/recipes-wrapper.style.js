import styled from "styled-components";

export const RecipesWrapper = styled.div`
    margin: 3rem auto;
    max-width: 57rem;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 1rem;
        max-width: 98rem;
        margin: 3rem auto;
    }
`;
