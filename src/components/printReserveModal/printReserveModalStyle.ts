import styled from 'styled-components';

export const PrintReserveModalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  border: solid #000 1px;
  padding: 50px;
  border-radius: 15px;
  gap: 20px;

  p {
    font-size: 1.2rem;
  }

  .QRCODE {
    width: 200px;
  }

  .Logo {
    width: 250px;
  }

  .finalImages {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 20px;
  }

  p {
    margin: 0;
  }

  .invoice {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 20px;
  }

  .invoice-detailsContent {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 40px;
  }

  .invoice-details {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: row nowrap;
    gap: 50px;
  }

  .invoice-car,
  .invoice-reservation,
  .invoice-carDetails {
    display: flex;
    flex-flow: column wrap;
    gap: 5px;
  }

  @page {
    size: A4;
    margin: 1cm;
    orientation: portrait;
  }

  @media print {
    overflow: hidden;

    * {
      margin: 0;
    }
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 750px;
    width: 500px;
    border: none;

    h1{
      font-size: 1.5rem;
    }

    h2{
      font-size: 1.3rem;
      margin: 0 0 5px 0;
    }

    .invoice-car{
      gap: 0;
    }

    .invoice {
      gap: 10px;
    }

    .invoice-details {
      gap: 0;
    }

    p {
      font-size: 1rem;
    }

    .CarImage {
      width: 250px;
      height: 150px;
    }

    .invoice-detailsContent {
      flex-flow: column wrap;
      gap: 10px;
    }

    .invoice-details {
      flex-flow: column wrap;
    }

    .Logo{
      width: 200px;
      height: 70px;
    }

    .QRCODE{
      width: 100px;
      height: 100px;
    }
  }
`;


export const OpenModalButton = styled.button`

    background-color: #fff;
      cursor: pointer;
      font-size: 1rem;
      padding: 3px 15px;
      border: none;
      font-weight: 700;
      transition: all 200ms;
      align-self: flex-end;

      svg{
        font-size: 2rem;
      }

      :hover{
        color: #f33;
        
      }
    


`