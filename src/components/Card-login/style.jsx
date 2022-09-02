import styled from "styled-components";



export const CardLogin = styled.div`
    background-color: #07073fd2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    padding: 2.5rem 2rem;
    border-radius: .3rem;
    width: 360px;
    box-shadow: #49079e4a 0 0 4px;

    h1{
        border-bottom: #ffffff98 inset;
        padding-bottom: 1rem;
        width: 100%;
        text-align: center;
    }

    @media screen and (max-width:420px) {
        height: 100vh;
        margin: 0 auto;
        width: 100%;
    }
`

export const NotAccount = styled.span`
    font-size: small;
    a{
        color: #7b00ffb2;
    }
`