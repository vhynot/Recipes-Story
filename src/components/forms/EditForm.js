import React, { useState, useContext, useRef, useEffect } from "react";
import {
    Overlay,
    FormWrapper,
    Title,
    InputTitle,
    InputIngredients,
    InputButton,
} from "./form.style";
import { FormContext } from "../../context/formContext";
import { RecipesContext } from "../../context/recipesContext";

const AddForm = ({ currentRecipe }) => {
    const { editFormVisible, handleEditFormVisible } = useContext(FormContext);
    const { dispatch } = useContext(RecipesContext);
    const [editTitle, setEditTitle] = useState("");
    const [editIngredients, setEditIngredients] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (editFormVisible) {
            setEditTitle(currentRecipe.title);
            setEditIngredients(currentRecipe.ingredients);
            inputRef.current.focus();
        }
    }, [editFormVisible, currentRecipe]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((editTitle.trim() !== "") & (editIngredients.trim() !== "")) {
            dispatch({
                type: "EDIT_RECIPE",
                recipe: {
                    title: editTitle,
                    ingredients: editIngredients,
                    id: currentRecipe.id,
                },
            });
            handleEditFormVisible();
        }
    };

    const handleTitleChange = (e) => {
        const { value } = e.target;
        setEditTitle(value);
    };

    const handleIngredientsChange = (e) => {
        const { value } = e.target;
        setEditIngredients(value);
    };

    return (
        <Overlay onSubmit={handleSubmit} visible={editFormVisible}>
            <FormWrapper visible={editFormVisible}>
                <Title>Update your recipe</Title>
                <InputTitle
                    ref={inputRef}
                    type="text"
                    value={editTitle}
                    onChange={handleTitleChange}
                    name="title"
                />
                <InputIngredients
                    value={editIngredients}
                    onChange={handleIngredientsChange}
                    name="ingredients"
                ></InputIngredients>
                <InputButton>Update</InputButton>
            </FormWrapper>
        </Overlay>
    );
};

export default AddForm;
