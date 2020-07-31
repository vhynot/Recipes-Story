import { v4 as uuidv4 } from "uuid";

export const recipesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return [
                ...state,
                {
                    title: action.recipe.title,
                    ingredients: action.recipe.ingredients,
                    id: uuidv4(),
                },
            ];
        case "EDIT_RECIPE":
            const editedRecipe = action.recipe;
            const updatedRecipes = state.map((recipe) => {
                if (recipe.id !== editedRecipe.id) {
                    return recipe;
                }
                return editedRecipe;
            });
            return [...updatedRecipes];
        case "REMOVE_RECIPE":
            return state.filter((recipe) => recipe.id !== action.id);
        default:
            return state;
    }
};
