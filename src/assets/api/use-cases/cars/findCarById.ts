import api from '../../config';
import { carPrint } from '../../../../components/Reserve/Reserve';

export const findCarById = async (
  id: number,
  setResponse: React.Dispatch<React.SetStateAction<any>>,
  setError: React.Dispatch<React.SetStateAction<any>>,
): Promise<carPrint> => {
  let car: carPrint | any = false;
  await api
    .get(`/cars/${id}`)
    .then((response) => {
      const {
        carType,
        color,
        dailyRate,
        features,
        fuelEfficiency,
        isAutomatic,
        model,
        plateNumber,
        year,
      } = response.data;
      car = {
        carType,
        color,
        dailyRate,
        features,
        fuelEfficiency,
        isAutomatic,
        model,
        plateNumber,
        year,
      };
      setResponse(response.data);
    })
    .catch((error) => setError(error));

  return car;
};
