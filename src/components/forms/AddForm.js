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

const AddForm = () => {
    const {
        addFormVisible,
        handleAddFormVisible,
        addFormSubmitted,
        setAddFormSubmitted,
    } = useContext(FormContext);
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
        setAddFormSubmitted(true);
        if ((title.trim() !== "") & (ingredients.trim() !== "")) {
            dispatch({
                type: "ADD_RECIPE",
                recipe: { title, ingredients },
            });
            handleAddFormVisible();
            setTitle("");
            setIngredients("");
            setAddFormSubmitted(false);
        }
        console.log(addFormSubmitted);
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
        <FormWrapper onSubmit={handleSubmit} visible={addFormVisible}>
            <TitleWrapper>
                <Title>Type your recipe</Title>
            </TitleWrapper>
            <InputTitle
                ref={inputRef}
                type="text"
                onChange={handleTitleChange}
                value={title}
                placeholder="Recipe title"
                isEmpty={addFormSubmitted && title.trim() === "" ? true : false}
            />
            <InputIngredients
                value={ingredients}
                onChange={handleIngredientsChange}
                name="ingredients"
                placeholder="Enter ingredients separated by comma"
                isEmpty={
                    addFormSubmitted && ingredients.trim() === "" ? true : false
                }
            ></InputIngredients>
            <InputButton
                isEmpty={
                    addFormSubmitted &&
                    (ingredients.trim() === "" || title.trim() === "")
                        ? true
                        : false
                }
            >
                {addFormSubmitted &&
                (ingredients.trim() === "" || title.trim() === "")
                    ? "Fill out all empty fields!"
                    : "Add new recipe"}
            </InputButton>
        </FormWrapper>
    );
};

export default AddForm;
