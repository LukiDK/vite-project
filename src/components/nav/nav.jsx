import { NavBarStyled } from "./NavBar.styled.js";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <NavBarStyled $bgcolor="black">
            <ul>
                <li>
                    <Link to="/">LOGO</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </NavBarStyled>
    );
};

export const Nav = () => {
    return (
        <>
            <NavBar />
        </>
    );
};
