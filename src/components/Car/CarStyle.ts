import styled from "styled-components"

export const CarStyle = styled.div`

display: flex;
justify-content: center;
flex-flow: column wrap;
gap: 5px;
margin-bottom: 25px;
padding: 20px;
border: solid #000 1px;
border-radius: 10px;

p{
    max-width: 350px;
}

img{
    width: 300px;
    height: 175px;
    align-self: center;
}

h2{
    text-align: center;
    margin-bottom: 20px;
}

h3{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    padding: 5px;
    font-weight: 900;
    text-align: center;
    background-color: #C44;
    color: #fff;
    width: 200px;
    height: 30px;
    border-radius: 7px;
    align-self: center;
}

.carDescription{
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
}

.reserveNowNoAuthenticated{
    color: #000;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    border: solid #000 1px;
    border-radius: 5px;
    height: 25px;
    font-weight: 900;
    font-size: 1.1rem;
    transition: all 200ms;
    cursor: pointer;
    align-self: center;
}

.reserveNowNoAuthenticated:hover{
    transform: scale(1.1);
}

button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    border: solid #000 1px;
    border-radius: 5px;
    height: 25px;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 200ms;
    cursor: pointer;
    align-self: center;
}

button:hover{
    transform: scale(1.1);
}


`