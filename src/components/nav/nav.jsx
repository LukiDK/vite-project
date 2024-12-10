import { NavBarStyled } from "./NavBar.styled.js";
import { NavLink, useLocation } from "react-router-dom";

export const Nav = () => {
    return (
        <NavBarStyled>
            <ul>
                <li>
                    <NavLink to="/">LOGO</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/concept"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Koncepter
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Kontakt Os
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </NavBarStyled>
    );
};
