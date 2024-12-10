import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f9f9f9;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    #root {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
    }

    main {
        flex: 1;
    }

`;
