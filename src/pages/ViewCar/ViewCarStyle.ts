import styled from "styled-components"

export const ViewCarStyle = styled.main`
margin: 100px 0 50px 0;
display: flex;
justify-content: center;
align-items: center;
flex-flow: column wrap;
width: 100vw;
height: 70vh;
background-color: rgba(255, 255, 255);

section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 10px;
    background-color: rgba(0,0,0, 0.8);
    width: 70vw;
    height: 70vh;
    min-width: 850px;
    color: #fff;
    border-radius: 20px;

    img{
        width: 30vw;
        height: auto;
        border-radius: 15px;
    }
}

.content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 40px;
}

button{
        background-color: initial;
        color: #fff;
        border: solid #fff 1px;
        width: 150px;
        cursor: pointer;
        font-size: 1rem;
        padding: 3px 15px;
        border-radius: 10px;
        font-weight: 700;
        transition: all 200ms;
    }
    button:hover{
        transform: scale(1.1);
    }

@media screen and (max-width: 480px){

    margin: 100px 0 50px 0;
    width: 98vw;
    height: 600px;

    .content{
        flex-flow: column wrap;
         
    }   

    section{
        min-width: 100px;
        width: 85vw;
        padding: 20px;

        img{
            width: 250px;
            height: 140px;
        }
    }


}

`