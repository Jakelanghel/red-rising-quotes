import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, 
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #212529;

    }

    #root {
        height: 100%;
    }

    .quote-card {
        min-height: 150px;
        max-width: 400px;
    }

    .quote, 
    .character {
        font-weight: 300;
        text-align: center;
        color: #fff;
        font-family: 'League Spartan', sans-serif;

    }

    .quote {
        font-size: 1.5rem;
    }

    .character {
        font-size: 1.5rem;
    }

    .pyramid {
        width: 100%;
        opacity: .8;
    }

    .home {
        min-height: 90%;
        gap: 5rem;
    }

    .text-grey {
        color:  #9B9D9E;
    }
`;
