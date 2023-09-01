import styled from 'styled-components';

export const HomeStyle = styled.main`
  * {
    margin: 0;
  }

  .Introduction {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 30px;
    margin-top: 50px;
    padding: 35px;
    border: solid #111 1px;
    border-radius: 10px;

    svg {
      font-size: 4rem;
    }

    p {
      font-size: 1.2rem;
      width: 22vw;
    }
  }

  .getStarted {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
    width: 150px;
    height: 50px;
    cursor: pointer;
    font-size: 1.3rem;
    color: #fff;
    text-decoration: none;
    border-radius: 15px 5px 15px 5px;
    transition: all 200ms;
  }

  .getStarted:hover {
    transform: scale(1.1);
    font-weight: 600;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    margin-top: 50px;
    height: 67.5vh;

    .welcome {
      width: 50vw;
      height: 67.5vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;

      h1 {
        font-size: 2.4rem;
      }

      h2 {
        font-size: 1.7rem;
      }
    }

    .bgimage {
      width: 50vw;
      height: 67.5vh;
      border-left: solid #ccc 1px;

      img {
        width: 50vw;
        height: 67.5vh;
      }
    }
  }
`;
