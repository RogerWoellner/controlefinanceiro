import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px){
        display: grid;
    }
`

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    justify-content: center;
`

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`

export const RadioGroup = styled.div`
    display: flex;
    align-items: center:
    justify-content: center;

    input{
        margin-left: 30px;
        margin-right: 10px;
        accent-color: black;
        margin-top: 0;
    }
`

export const Button = styled.button`
    padding: 5px 10px;
    border: 2px solid #b0cfdd;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #27a4f2;
`
