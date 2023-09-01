import styled from 'styled-components';

export const CreateCarStyle = styled.main`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  min-height: 70vh;

  * {
    margin: 0;
  }

  h1 {
    margin-top: 40px;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100vw;
    flex-flow: row wrap;
  }

  .DivInputs {
    margin-top: 100px;
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
    align-items: center;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .DivSearch {
    width: 100%;
    svg {
      font-size: 1.3rem;
      transform: scaleX(-1);
      margin-left: 15px;
    }

    input {
      width: 85%;
      border-radius: 10px;
    }
    button {
      margin: 0;
      border: none;
      cursor: pointer;
    }
  }

  .DivInputDate {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
  }

  .Cars {
    display: none;
    flex-flow: column wrap;
    margin-bottom: 30px;
    max-width: 95vw;
  }

  .CarsDiv {
    display: flex;
    flex-flow: row wrap;
    gap: 30px;
  }

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

  br {
    margin: 10px 0;
  }
`;
