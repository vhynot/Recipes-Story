import React, { useContext } from "react";
import { RecipesContext } from "../../context/recipesContext";
import { FormContext } from "../../context/formContext";
import {
    DeleteFormWrapper,
    Title,
    Bold,
    ButtonsWrapper,
    Submit,
    Reject,
} from "./delete-form.style";

const DeleteForm = ({ title, id }) => {
    const { dispatch } = useContext(RecipesContext);
    const { deleteFormVisible, setDeleteFormVisible } = useContext(FormContext);
    return (
        <DeleteFormWrapper visible={deleteFormVisible}>
            <Title>
                Are you sure you want delete <Bold>{title}</Bold> recipe?
            </Title>
            <ButtonsWrapper>
                <Reject onClick={() => setDeleteFormVisible(false)}>
                    Cancel
                </Reject>
                <Submit
                    onClick={() => {
                        setDeleteFormVisible(false);
                        dispatch({ type: "REMOVE_RECIPE", id });
                    }}
                >
                    Delete
                </Submit>
            </ButtonsWrapper>
        </DeleteFormWrapper>
    );
};

export default DeleteForm;
