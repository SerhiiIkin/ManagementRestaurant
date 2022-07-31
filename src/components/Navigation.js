import { Link } from "react-router-dom";
import React from "react";
import style from "./Navigation.module.scss";
import CategoryDropdown from "./HoverMenyButton.js";

function Navigation() {
    return (
        <nav className={style.navMenu}>
            <Link className={style.link} to="/">
                Home
            </Link>
            <CategoryDropdown title="Table List" />
        </nav>
    );
}

export default Navigation;
