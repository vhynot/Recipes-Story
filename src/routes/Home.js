import React, { useContext } from "react";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import Recipe from "../components/recipe/Recipe";
import { Button } from "../components/buttons/Button";
import AddForm from "../components/forms/AddForm";
import { RecipesContext } from "../context/recipesContext";
import { FormContext } from "../context/formContext";

const Home = () => {
    const { recipes } = useContext(RecipesContext);
    const { addFormVisible, handleAddFormVisible } = useContext(FormContext);

    const recipesList = recipes.map((recipe) => {
        return <Recipe recipe={recipe} key={recipe.id} />;
    });

    return (
        <>
            <Header />
            <Layout>{recipesList}</Layout>
            <Button
                activeAdd={addFormVisible}
                activeButton={handleAddFormVisible}
            />
            <AddForm />
        </>
    );
};

export default Home;
