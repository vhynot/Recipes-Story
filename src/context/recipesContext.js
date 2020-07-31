import React, { createContext, useReducer } from "react";
import { recipesReducer } from "../reducers/recipesReducer";

const RecipesContext = createContext();

const RecipesContextProvider = ({ children }) => {
    const [recipes, dispatch] = useReducer(recipesReducer, []);

    return (
        <RecipesContext.Provider value={{ recipes, dispatch }}>
            {children}
        </RecipesContext.Provider>
    );
};

export { RecipesContextProvider, RecipesContext };
