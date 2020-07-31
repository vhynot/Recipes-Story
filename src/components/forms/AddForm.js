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

const AddForm = () => {
    const { addFormVisible, handleAddFormVisible } = useContext(FormContext);
    const { dispatch } = useContext(RecipesContext);
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (addFormVisible) {
            inputRef.current.focus();
        }
    }, [addFormVisible]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((title.trim() !== "") & (ingredients.trim() !== "")) {
            dispatch({
                type: "ADD_RECIPE",
                recipe: { title, ingredients },
            });
            handleAddFormVisible();
            setTitle("");
            setIngredients("");
        }
    };

    const handleTitleChange = (e) => {
        const { value } = e.target;
        setTitle(value);
    };

    const handleIngredientsChange = (e) => {
        const { value } = e.target;
        setIngredients(value);
    };

    return (
        <Overlay onSubmit={handleSubmit} visible={addFormVisible}>
            <FormWrapper visible={addFormVisible}>
                <Title>Type your recipe</Title>
                <InputTitle
                    ref={inputRef}
                    type="text"
                    onChange={handleTitleChange}
                    value={title}
                    placeholder="Recipe title"
                />
                <InputIngredients
                    value={ingredients}
                    onChange={handleIngredientsChange}
                    name="ingredients"
                    placeholder="Enter ingredients separated by comma"
                ></InputIngredients>
                <InputButton>Add</InputButton>
            </FormWrapper>
        </Overlay>
    );
};

export default AddForm;
