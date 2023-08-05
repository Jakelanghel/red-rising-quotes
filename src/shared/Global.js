import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --red: #991E1F;
    --black-1: #18181A;
    --black-2: #212529;
    --grey-1: #9B9D9E;
    --grey-2: rgba(155, 157, 158, 0.5);
    --white: #fff;
}

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #root {
        height: 100%;
    }

    h1, h2, p {
        margin: 0;
        padding:0
    }
    
    html, 
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        color: var(--white);
        background-color: var(--black-2);
        text-align: center;
        position: relative;
    }

    .error-msg {
        margin-top: 1rem;
    }

    .container-loader {
        display: flex;
        align-items: center;
        margin: auto 0;
    }

    .brand {
        color: var(--red);
        font-weight: 700;
        letter-spacing: 1px;
    }

    .button {
        font-size: 1rem;
        background-color: #991E1F !important;
        color: #212529 !important;
        font-weight: 700;
        border: none;

    }

    .button:active {
        background-color: #991E1F !important;
        color: #212529 !important;
        font-weight: 700;
        border: none;
    }

    .button:hover {
        opacity: 1;
        background-color: var(--red);
        border: none;
        color: var(--black);
    }

    .text-grey {
        color:  var(--grey-1);
    }

    .text-red {
        color:  var(--red);
        font-weight: 700;
    }

    .app {
        height: 100%;
    }

    .page {
        min-height: 93%;
        padding: 2rem 1rem;
    }

    .search-page {
        height: auto;
    }

    .home {
        height: 93%;
        padding-bottom: 0;
    }

    .game {
        height: 93%;
    }

    
    
    


  
`;
