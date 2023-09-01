import styled from "styled-components"

export const ReserveStyle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    border: solid #000 1px;
    border-radius: 15px;
    padding: 30px;


.ReserveDetails{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 25px;
}

.ReserveButtons{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
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

    

    img{
            width: 300px;
            height: 170px;
        }

    .atributesOfReserve{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-flow: column wrap;
        gap: 5px;

        

        p{
            margin: 0;
        }
    }



`