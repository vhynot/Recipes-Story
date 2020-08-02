import React, { useContext } from "react";
import { NavbarWrapper, SVG, LinkTo, NavbarContainer } from "./navbar.style";

import { FormContext } from "../../context/formContext";

const Navbar = ({ children }) => {
    const { handleHomeButton } = useContext(FormContext);
    return (
        <NavbarWrapper>
            <NavbarContainer>
                <LinkTo to={"/"}>
                    <SVG
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="32px"
                        height="32px"
                        onClick={() => handleHomeButton()}
                    >
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SVG>
                </LinkTo>
                {children}
            </NavbarContainer>
        </NavbarWrapper>
    );
};

export default Navbar;
