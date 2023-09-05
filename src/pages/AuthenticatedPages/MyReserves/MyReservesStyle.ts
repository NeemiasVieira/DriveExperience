import styled from 'styled-components';

export const MyReservesStyle = styled.main`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  min-height: 71.5vh;
  margin-top: 50px;

  .cars {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-flow: column wrap;
    margin-bottom: 50px;
  }

  .noReserves{
    font-size: 1.4rem;
  }

  .reserveLink{    
    a{background-color: #fff;
    border: solid #000 1px;
    cursor: pointer;
    font-size: 1rem;
    padding: 3px 15px;
    border-radius: 0 10px 0 10px;
    transition: all 200ms;
    text-decoration: none;
    color: #000;
    font-weight: 900;
    font-size: 1.6rem;
    }
    a:hover{
      transform: scale(1.1);
      color: #f33;
    }
  
  }

  @media print {
    * {
      display: none;
    }
  }
`;
