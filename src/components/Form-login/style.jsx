import styled from "styled-components";




export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;
`

export const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`

export const Label = styled.label``

export const Input = styled.input`
    border: 1px solid transparent;
    border-radius: 1.5rem;
    background: #030318ae;
    color: white;
    outline: none;
    padding: .7rem;
    &:focus{
        border: #5d0ab6 1px solid;
        box-shadow: #5d0ab634 0 0 6px;
    }
    &::placeholder{
        color: #5d0ab664;
    }
`

export const ButtonLogin = styled.button`
    border: none;
    background-color: #68119a;
    color: white;
    padding: 1rem;
    margin: 2rem auto;
    width: 100%;
    border-radius: .2rem;
    font-size: 1rem;
    font-weight: 600;
    &:hover{
        background-color: #68119ad1;
        box-shadow: black 0 0 4px;
    }
`