import styled from "styled-components"


export const ErrorModalStyle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    margin-top: 20px;

    p{
        margin: 5px;
    }
    
    .iconError{
        margin: 10px 0;
        font-size: 3rem;
        color: #f70;
    }

    .iconClose{
        color: #f33;
        border: none;
        font-size: 2rem;
    }

    button{
        position: fixed;
        top: 7%;
        right: 5%;
        border: none;
        cursor: pointer;
    }

`