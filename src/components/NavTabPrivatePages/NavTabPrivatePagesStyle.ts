import styled from 'styled-components';

export const NavTabPrivatePagesStyle = styled.header`
  * {
    margin: 0;
  }

  nav {
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: #c33;
    height: 50px;
    width: 100vw;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
    list-style: none;
  }

  li {
    font-size: 1.1rem;
    a {
      text-decoration: none;
      color: #fff;
    }
  }

  .logoutButton {
    font-size: 1rem;
    position: fixed;
    right: 3%;
    top: 1.7%;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    background-color: #c33;
    color: #fff;
    transition: all 200ms;
  }

  .logoutButton:hover {
    transform: scale(1.2);
  }

  .navDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 50px;
  }

  .username {
    position: fixed;
    top: 1.5%;
    right: 12%;
    font-weight: 900;
  }

  @media print {
    display: none;
  }

  @media screen and (max-width: 480px){
    ul{
      margin: 0 5px;
    }

    .navDiv{
      gap: 20px;
      font-size: 1rem;
    }

    .username{
      display: none;
    }
  }
`;
