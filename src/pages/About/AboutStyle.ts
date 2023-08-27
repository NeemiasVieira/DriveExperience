import styled from "styled-components"

export const AboutStyle = styled.main`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-flow: column wrap;
    min-height: 80vh;

    *{
        margin: 0;
    }

    h1{
        margin: 70px 0;
    }

    section{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        width: 100vw;
        flex-flow: row wrap;
    }

`