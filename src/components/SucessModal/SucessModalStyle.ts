import styled from 'styled-components';

export const SucessModalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin-top: 20px;

  p {
    margin: 30px;
  }

  .iconCheck {
    margin: 10px 0;
    font-size: 4rem;
    color: #5f0;
  }

  .iconClose {
    color: #000;
    border: none;
    font-size: 2rem;
  }

  button {
    position: fixed;
    top: 7%;
    right: 5%;
    border: none;
    cursor: pointer;
  }

  .actionButton {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #ccc;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    width: 150px;
    height: 35px;
    transition: all 200ms;
  }

  .actionButton:hover {
    transform: scale(1.1);
  }
`;
