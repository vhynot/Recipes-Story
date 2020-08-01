import React from "react";
import { NavbarWrapper, SVG } from "./navbar.style";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
    return (
        <NavbarWrapper>
            <Link to={"/"}>
                <SVG
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="32px"
                    height="32px"
                >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SVG>
            </Link>
            {children}
        </NavbarWrapper>
    );
};

export default Navbar;
