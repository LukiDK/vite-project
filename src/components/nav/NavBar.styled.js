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
        font-weight: bold;
        font-size: 2.4rem;

        &:hover {
            text-decoration: underline;
        }
    }
`;
