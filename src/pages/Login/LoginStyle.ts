import styled from 'styled-components';

export const LoginStyle = styled.main`
  min-height: 67.5vh;

  * {
    margin: 0;
  }

  .error {
    color: #f33;
    font-weight: 700;
  }

  section {
    margin: 100px 0 50px 0;
    height: 67.5vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      gap: 2vh;
      width: 400px;
      background-color: rgba(0, 0, 0, 0.85);
      padding: 25px;
      border-radius: 35px 5px 35px 5px;
      color: #fff;

      button {
        background-color: #fff;
        border: none;
        width: 150px;
        height: 40px;
        border-radius: 5px;
        color: #000;
        font-weight: 600;
        margin: 25px 0;
        font-size: 1.2rem;
        transition: all 200ms;
        cursor: pointer;
      }

      button:hover {
        transform: scale(1.1);
      }
    }

    .inputDiv {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row nowrap;

      svg {
        font-size: 2rem;
        padding: 8px;
        background-color: #fff;
        color: #000;
      }

      input {
        height: 38px;
        width: 250px;
        padding: 5px;
        font-size: 18px;
        border-radius: 0;
        border: none;
      }

      input:focus {
        border: none;
        box-shadow: none;
        outline: none;
      }
    }

    p {
      a {
        text-decoration: none;
        color: #fff;
        font-weight: 900;
      }
    }
  }

  @media screen and (max-width: 480px){
    form{
      max-width: 80vw;
    }

    section form button{
      margin: 10px 0;
    }

  }
`;


export const InvisibleDiv = styled.div`

  min-height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px){
    min-height: 750px;
  }


`
