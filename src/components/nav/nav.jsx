import { NavBarStyled, NavList, NavItem, NavLink } from "./NavBar.styled.js";

const NavBar = () => {
  return (
    <NavBarStyled $bgcolor="black">
      <NavList>
        <NavItem>
          <NavLink href="#">LOGO</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Wallah</NavLink>
        </NavItem>
      </NavList>
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
