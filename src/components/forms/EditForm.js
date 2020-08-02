import React, { useState, useContext, useRef, useEffect } from "react";
import {
    FormWrapper,
    TitleWrapper,
    Title,
    InputTitle,
    InputIngredients,
    InputButton,
} from "./form.style";
import { FormContext } from "../../context/formContext";
import { RecipesContext } from "../../context/recipesContext";

const EditForm = ({ currentRecipe }) => {
    const {
        editFormVisible,
        handleEditFormVisible,
        editFormSubmitted,
        setEditFormSubmitted,
    } = useContext(FormContext);
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
        setEditFormSubmitted(true);
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
            setEditFormSubmitted(false);
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
        <FormWrapper onSubmit={handleSubmit} visible={editFormVisible}>
            <TitleWrapper>
                <Title>Update your recipe</Title>
            </TitleWrapper>
            <InputTitle
                ref={inputRef}
                type="text"
                value={editTitle}
                onChange={handleTitleChange}
                name="title"
                placeholder="Recipe title"
                isEmpty={
                    editFormSubmitted && editTitle.trim() === "" ? true : false
                }
            />
            <InputIngredients
                value={editIngredients}
                onChange={handleIngredientsChange}
                name="ingredients"
                placeholder="Enter ingredients separated by comma"
                isEmpty={
                    editFormSubmitted && editIngredients.trim() === ""
                        ? true
                        : false
                }
            ></InputIngredients>
            <InputButton
                isEmpty={
                    editFormSubmitted &&
                    (editIngredients.trim() === "" || editTitle.trim() === "")
                        ? true
                        : false
                }
            >
                {editFormSubmitted &&
                (editIngredients.trim() === "" || editTitle.trim() === "")
                    ? "Fill out all empty fields!"
                    : "Update recipe"}
            </InputButton>
        </FormWrapper>
    );
};

export default EditForm;
