import { createGlobalStyle } from "styled-components";




export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #030318;
        color: white;
        font-family: sans-serif;
    }

    button{
        cursor: pointer;
    }
`