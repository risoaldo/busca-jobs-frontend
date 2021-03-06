import {createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background-color: #FAFAFA;
        -webkit-font-smoothhing: antialiased;

    }

    body, input, button{
        font-family: 'Roboto medium 500', sans-serif;
    }

    button{
        cursor: pointer;
    }

`;