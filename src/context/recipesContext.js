import React, { createContext, useReducer, useEffect } from "react";
import { recipesReducer } from "../reducers/recipesReducer";

const RecipesContext = createContext();

const RecipesContextProvider = ({ children }) => {
    const [recipes, dispatch] = useReducer(recipesReducer, [], () => {
        let stringRecipes = localStorage.getItem("recipeStory");
        return stringRecipes ? JSON.parse(stringRecipes) : [];
    });
    useEffect(() => {
        const stringifyRecipes = JSON.stringify(recipes);
        localStorage.setItem("recipeStory", stringifyRecipes);
    }, [recipes]);

    return (
        <RecipesContext.Provider value={{ recipes, dispatch }}>
            {children}
        </RecipesContext.Provider>
    );
};

export { RecipesContextProvider, RecipesContext };
