import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
    RecipeWrapper,
    Text,
    DeleteButton,
    ButtonWrapper,
} from "./recipe.style";
import { RecipesContext } from "../../context/recipesContext";

export const LinkTo = styled(Link)`
    color: white;
    text-decoration: none;
`;

const Recipe = ({ recipe: { title, ingredients, id } }) => {
    const { dispatch } = useContext(RecipesContext);
    return (
        <RecipeWrapper>
            <LinkTo to={`/${id}`}>
                <Text>{title}</Text>
            </LinkTo>
            <ButtonWrapper>
                <DeleteButton
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => dispatch({ type: "REMOVE_RECIPE", id })}
                >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </DeleteButton>
            </ButtonWrapper>
        </RecipeWrapper>
    );
};

export default Recipe;
