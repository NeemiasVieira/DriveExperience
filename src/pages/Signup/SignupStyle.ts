import styled from 'styled-components';

export const SignupStyle = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  background-color: #222;

  * {
    margin: 0;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .sectionForm {
    width: 40vw;
    color: #fff;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 2vh;

    input {
      width: 300px;
      height: 25px;
      font-size: 1.2rem;
      border-radius: 5px;
      padding: 5px;
      border: none;
    }

    input:focus {
      border: none;
      box-shadow: none;
      outline: none;
    }
  }

  button {
    width: 200px;
    padding: 5px;
    margin-top: 10px;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    transition: all 200ms;
    background-color: #d44;
    color: #fff;
    cursor: pointer;
  }
  button:hover {
    transform: scale(1.1);
  }

  p {
    a {
      text-decoration: none;
      font-weight: 900;
      color: #fff;
    }
  }

  .inputDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    gap: 5px;
  }

  .sectionImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);

    img {
      width: 50vw;
      border-radius: 20px;
    }
  }

  @media screen and (max-width: 480px){

    min-height: 100vh;
    .sectionImg{
      display: none;
    }

    .sectionForm{
      width: 100%;
    }
  }
`;
