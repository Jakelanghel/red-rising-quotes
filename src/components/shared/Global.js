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

    .brand {
        color: #991E1F;
        font-weight: 700;
        letter-spacing: 1px;
    }

    .button {
        background-color: #991E1F !important;
        border: none;
        color: #212529 !important;
        font-weight: 700;
    }

    .button:active {
        background-color: #991E1F !important;
        border: none;
        color: #212529 !important;
        font-weight: 700;
    }

    .button:hover {
        opacity: 1;
        background-color: #991E1F;
        border: none;
        color: #212529;
    }

    .text-grey {
        color:  #9B9D9E;
    }

    .home {
        min-height: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .pyramid {
        width: 100%;
        opacity: 0.8;
        margin-top: 3rem;
    }

    .answer {
        width: 45%;
    }

    @media screen and (min-width: 400px){
        .nav-link {
            font-size: 1.15rem;
        }
    }
    @media screen and (min-width: 1000px){
       
        .button {
            background-color: #991E1F;
            border: none;
            color: #212529;
            font-weight: 700;
            font-size: 1.15rem;
            opacity: .5;

        }

        .button:hover {
            opacity: 1;
            background-color: #991E1F;
            border: none;
            color: #212529;
        }
    }
`;
