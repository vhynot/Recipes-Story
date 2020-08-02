import React, { useContext } from "react";
import Header from "../components/header/Header";
import Recipe from "../components/recipes/Recipe";
import { Button } from "../components/buttons/Button";
import AddForm from "../components/forms/AddForm";
import { RecipesContext } from "../context/recipesContext";
import { FormContext } from "../context/formContext";
import Navbar from "../components/navbar/Navbar";
import { RecipesWrapper } from "../components/recipes/recipes-wrapper.style";
import { Overlay } from "../components/global/overlay.style";
import NoRecipes from "../components/recipes/NoRecipes";

const Home = () => {
    const { recipes } = useContext(RecipesContext);
    const {
        addFormVisible,
        handleAddFormVisible,
        deleteFormVisible,
    } = useContext(FormContext);

    const recipesList = recipes.map((recipe) => {
        return <Recipe recipe={recipe} key={recipe.id} />;
    });
    return (
        <>
            <Header />
            {recipesList.length > 0 ? (
                <RecipesWrapper>{recipesList}</RecipesWrapper>
            ) : (
                <NoRecipes />
            )}
            <AddForm />
            <Overlay
                visible={addFormVisible}
                visibleDelete={deleteFormVisible}
            />
            <Navbar>
                <Button
                    activeDelete={deleteFormVisible}
                    activeAdd={addFormVisible}
                    activeButton={handleAddFormVisible}
                />
            </Navbar>
        </>
    );
};

export default Home;
