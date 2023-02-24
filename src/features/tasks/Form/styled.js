import styled from "styled-components";


export const NewTaskSection = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 15px;
    padding: 10px;
    background-color: white;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }

`;

export const EnterTask = styled.input`
    padding: 10px;
    border: 1px solid rgb(221, 212, 212);    
`;

export const SubmitTask = styled.button`
    border: none;
    background-color: rgb(0, 128, 128);
    color: white;
    padding: 10px 20px;
    transition: 1s; 

    &:hover {
        background-color: rgba(0, 128, 128, 0.74);
        transform: scale(1.1);
    }
    &:active {
        background-color: rgba(0, 128, 128, 0.5);
        transform: scale(1.1);
    }
`;