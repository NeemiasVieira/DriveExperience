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

    .invoice {
      gap: 0;
    }

    .invoice-details {
      gap: 0;
    }

    p {
      font-size: 0.9rem;
    }

    .CarImage {
      width: 250px;
      height: 150px;
    }

    .invoice-detailsContent {
      flex-flow: column wrap;
    }

    .invoice-details {
      flex-flow: column wrap;
    }
  }
`;
