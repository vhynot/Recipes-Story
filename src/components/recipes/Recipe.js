import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RecipeWrapper, Text } from "./recipe.style";
import DeleteForm from "../forms/DeleteForm";
import DeleteButton from "../buttons/DeleteButton";

export const LinkTo = styled(Link)`
    color: white;
    text-decoration: none;
`;

const Recipe = ({ recipe: { title, id } }) => {
    return (
        <>
            <RecipeWrapper>
                <LinkTo to={`/${id}`}>
                    <Text>{title}</Text>
                </LinkTo>
                <DeleteButton id={id} />
            </RecipeWrapper>
            <DeleteForm id={id} title={title} />
        </>
    );
};

export default Recipe;
