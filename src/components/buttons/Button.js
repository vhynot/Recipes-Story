import React from "react";
import { Add } from "./button.style";

export const Button = ({
    className,
    activeButton,
    activeAdd,
    activeClose,
    activeDelete,
}) => {
    return (
        <Add
            className={className}
            activeAdd={activeAdd}
            activeClose={activeClose}
            activeDelete={activeDelete}
            onClick={() => activeButton()}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </Add>
    );
};
