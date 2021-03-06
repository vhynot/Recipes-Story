import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { RecipesContext } from "../context/recipesContext";
import { FormContext } from "../context/formContext";
import EditForm from "../components/forms/EditForm";
import Navbar from "../components/navbar/Navbar";
import { Button } from "../components/buttons/Button";
import {
    RecipeWrapper,
    RecipeTitle,
    List,
    Ingredient,
} from "../components/recipes/recipe-wrapper.style";
import { EditButton } from "../components/buttons/edit-button.style";
import { Overlay } from "../components/global/overlay.style";

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
            <RecipeWrapper>
                <RecipeTitle>{currentRecipe.title}</RecipeTitle>
                <List>{spread}</List>
                <EditButton onClick={() => handleEditFormVisible()}>
                    Edit recipe
                </EditButton>
            </RecipeWrapper>
            <EditForm currentRecipe={currentRecipe} />
            <Overlay visible={editFormVisible} />
            <Navbar>
                <CloseButton
                    activeClose={editFormVisible}
                    activeButton={handleEditFormVisible}
                />
            </Navbar>
        </>
    );
};

export default RecipeDetails;
