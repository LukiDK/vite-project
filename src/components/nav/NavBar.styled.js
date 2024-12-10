import styled from "styled-components";

export const NavBarStyled = styled.nav`
    width: 100%;
    padding: 2rem;
    background-color: ${(props) => props.$bgcolor || "#333"};

    ul {
        max-width: 1080px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        list-style: none;
        gap: 2rem;
    }

    li {
        list-style-type: none;

        &:nth-child(1) {
            margin-right: auto;
        }
    }

    a {
        text-decoration: none;
        color: white;
        font-weight: 400;
        font-size: 1.6rem;
        text-transform: uppercase;
        position: relative;

        &.active {
            color: orange;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 1px;
            background: white;
            transition: width 0.3s;
        }

        &:hover::after {
            width: 100%;
        }
    }
`;
