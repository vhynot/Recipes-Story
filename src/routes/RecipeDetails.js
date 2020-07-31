import React, { useContext, useState, useEffect } from "react";
import { RecipesContext } from "../context/recipesContext";
import { FormContext } from "../context/formContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import EditForm from "../components/forms/EditForm";
import { Button } from "../components/buttons/Button";
import { BackArrow } from "../components/buttons/back-arrow.style";
import {
    RecipeWrapper,
    RecipeTitle,
    List,
    Ingredient,
} from "../components/recipe/recipe-wrapper.style";
import { EditButton } from "../components/buttons/edit-button.style";
import styled from "styled-components";

const CloseButton = styled(Button)`
    transform: rotate(45deg);
    visibility: ${(props) => (props.activeClose ? "visible" : "hidden")};
`;

const RecipeDetails = () => {
    const { recipes } = useContext(RecipesContext);
    const { editFormVisible, handleEditFormVisible } = useContext(FormContext);
    const [currentRecipe, setCurrentRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const param = useParams();
    const currentID = param.id;

    useEffect(() => {
        const filteredRecipe = recipes.filter(
            (recipe) => recipe.id === currentID
        );
        setCurrentRecipe(...filteredRecipe);
    }, [currentID, recipes]);

    useEffect(() => {
        if (Object.keys(currentRecipe).length !== 0) {
            const ingredientsArr = currentRecipe.ingredients.split(",");
            setIngredients(ingredientsArr);
        }
    }, [currentRecipe]);

    const spread = ingredients
        .filter((ingredient) => ingredient.trim() !== "")
        .map((ingredient, idx) => (
            <Ingredient key={idx}>{ingredient.trim()}</Ingredient>
        ));

    return (
        <>
            <BackArrow>
                <Link to={"/"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {/* <line x1="19" y1="12" x2="5" y2="12"></line> */}
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </Link>
            </BackArrow>
            <RecipeWrapper>
                <RecipeTitle>{currentRecipe.title}</RecipeTitle>
                <List>{spread}</List>
                <EditButton onClick={() => handleEditFormVisible()}>
                    Edit
                </EditButton>
            </RecipeWrapper>
            <EditForm currentRecipe={currentRecipe} />
            <CloseButton
                activeClose={editFormVisible}
                activeButton={handleEditFormVisible}
            />
        </>
    );
};

export default RecipeDetails;
