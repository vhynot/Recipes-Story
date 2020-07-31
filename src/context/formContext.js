import React, { createContext, useState } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
    const [addFormVisible, setAddFormVisible] = useState(false);
    const [editFormVisible, setEditFormVisible] = useState(false);

    const handleAddFormVisible = () => {
        setAddFormVisible((prev) => !prev);
    };

    const handleEditFormVisible = () => {
        setEditFormVisible((prev) => !prev);
    };

    return (
        <FormContext.Provider
            value={{
                addFormVisible,
                handleAddFormVisible,
                editFormVisible,
                handleEditFormVisible,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export { FormContextProvider, FormContext };
