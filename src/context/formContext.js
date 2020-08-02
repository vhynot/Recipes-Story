import React, { createContext, useState } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
    const [addFormVisible, setAddFormVisible] = useState(false);
    const [editFormVisible, setEditFormVisible] = useState(false);
    const [addFormSubmitted, setAddFormSubmitted] = useState(false);
    const [editFormSubmitted, setEditFormSubmitted] = useState(false);
    const [deleteFormVisible, setDeleteFormVisible] = useState(false);

    const handleAddFormVisible = () => {
        if (!deleteFormVisible) {
            setAddFormVisible((prev) => !prev);
            setAddFormSubmitted(false);
        }
    };

    const handleEditFormVisible = () => {
        setEditFormVisible((prev) => !prev);
        setEditFormSubmitted(false);
    };

    const handleHomeButton = () => {
        setEditFormVisible(false);
        setAddFormVisible(false);
        setAddFormSubmitted(false);
        setEditFormSubmitted(false);
        setDeleteFormVisible(false);
    };

    return (
        <FormContext.Provider
            value={{
                addFormVisible,
                handleAddFormVisible,
                editFormVisible,
                handleEditFormVisible,
                handleHomeButton,
                addFormSubmitted,
                setAddFormSubmitted,
                editFormSubmitted,
                setEditFormSubmitted,
                deleteFormVisible,
                setDeleteFormVisible,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export { FormContextProvider, FormContext };
