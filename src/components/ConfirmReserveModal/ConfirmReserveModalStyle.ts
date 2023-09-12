import styled from "styled-components"

export const ConfirmReserveModalStyle = styled.div`

display: flex;
justify-content: center;
flex-flow: column wrap;
gap: 10px;

p{
    margin: 7px;
}

h1{
    text-align: center;
}

img{
    align-self: center;
    width: 250px;
    height: 120px;
}

.Buttons{
    display: flex;
    justify-content: center;
    gap: 20px;

    button{
    background-color: #fff;
    border: solid #000 1px;
    cursor: pointer;
    font-size: 1rem;
    padding: 3px 15px;
    border-radius: 0 10px 0 10px;
    font-weight: 700;
    transition: all 200ms;
    }
    button:hover{
    color: #f33;
    transform: scale(1.1);
    }
}


.Details{
    display: flex;
    justify-content: space-evenly;
    flex-flow: row nowrap;
    width: 95%;
}

.CarDetails, .ReserveDetails{
    width: 45%;
}

.Logo{
    width: 200px;
    height: 60px;
    align-self: flex-start;
    margin-left: 20px;
}

.Alert{
    color: #222;
    font-weight: 700;
}

@media screen and (max-width: 480px){

    gap: 0;

    p{
        margin: 4px;
    }

    img{
        width: 150px;
        height: 75px;
    }
    
    .Details{
        flex-flow: column wrap;
    }

    .CarDetails{
        width: 90%;
    }

    .ReserveDetails{
        width: 90%;
    }

    .Logo{
        margin-left: 0;
        align-self: center;
    }

    h1{
        font-size: 1.3rem;
    }

    .Buttons{
        margin-top: 10px;
    }
}

`