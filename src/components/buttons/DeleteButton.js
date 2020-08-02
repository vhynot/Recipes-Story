import React, { useContext } from "react";

import { ButtonWrapper, SVG } from "./delete-button.style";
import { FormContext } from "../../context/formContext";

const DeleteButton = ({ id }) => {
    const { setDeleteFormVisible } = useContext(FormContext);
    return (
        <ButtonWrapper>
            <SVG
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => {
                    setDeleteFormVisible(true);
                }}
            >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </SVG>
        </ButtonWrapper>
    );
};

export default DeleteButton;
