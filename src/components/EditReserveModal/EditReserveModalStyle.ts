import styled from "styled-components"

export const EditReserveModalStyle = styled.div`

.DivInputDate {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 10px;
    margin-bottom: 25px;

    label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    padding: 8px;
    border: 2px solid #bbb;
    border-radius: 3px;
    font-size: 14px;
  }
  
  }

  button {
    width: 200px;
    background-color: #fff;
    border: solid #000 1px;
    cursor: pointer;
    font-size: 1rem;
    padding: 3px 15px;
    border-radius: 5px;
    font-weight: 700;
    transition: all 200ms;
  }
  button:hover {
    color: #f33;
    transform: scale(1.1);
  }

  .Error{
    margin: 0 0 10px 0;
    color: #F33;
    font-weight: 700;
  }

`

export const ButtonOpenEditReserve = styled.button`
      background-color: #fff;
      border: solid #000 1px;
      cursor: pointer;
      font-size: 1rem;
      padding: 3px 15px;
      border-radius: 0 10px 0 10px;
      font-weight: 700;
      transition: all 200ms;
      :hover {
         color: #f33;
        transform: scale(1.1);
    }

`