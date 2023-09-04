import api from '../../config';

const headers = {
  Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  'Content-Type': 'application/json',
};

export const executeCreateReserve = async (
  carId: number,
  startDate: Date | string,
  endDate: Date | string,
  setResponse: React.Dispatch<React.SetStateAction<any>>,
  setError: React.Dispatch<React.SetStateAction<any>>,
) => {
  await api
    .post('/reserves/create', { carId, startDate, endDate }, { headers })
    .then((response) => setResponse(response))
    .catch((error) => setError(error));
};
