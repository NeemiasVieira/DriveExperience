import styled from 'styled-components';

export const ConfirmDeleteModalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 15px;

  button {
    background-color: #fff;
    border: solid #000 1px;
    cursor: pointer;
    font-size: 1rem;
    padding: 3px 15px;
    border-radius: 0 10px 0 10px;
    font-weight: 700;
    transition: all 200ms;
  }
  button:hover {
    color: #f33;
    transform: scale(1.1);
  }
`;
