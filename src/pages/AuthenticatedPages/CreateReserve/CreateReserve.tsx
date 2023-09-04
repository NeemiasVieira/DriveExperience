import React, { useEffect, useState } from 'react';
import { CreateCarStyle } from './CreateReserveStyle';
import { NavTabPrivatePages } from '../../../components/NavTabPrivatePages/NavTabPrivatePages';
import { Footer } from '../../../components/Footer/Footer';
import { Car } from '../../../components/Car/Car';
import { CarType } from '../../../components/Car/Car';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { executeListAvailableCars } from '../../../assets/api/use-cases/cars/listAvailableCars';

const CreateCar = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();
  const [cars, setCars] = useState<CarType[]>([]);
  const [startDate, setStartDate] = useState<Date | string>(new Date());
  const [endDate, setEndDate] = useState<Date | string>(new Date());

  useEffect(() => {
    try {
      setCars(takeCars(response));
    } catch {}
  }, [response]);

  const takeCars = (response: any) => {
    if (response) {
      const { data } = response;
      const carsAvailables: CarType[] = data.map((item: CarType) => ({
        id: item.id,
        model: item.model,
        plateNumber: item.plateNumber,
        year: item.year,
        isAutomatic: item.isAutomatic,
        carType: item.carType,
        color: item.color,
        fuelEfficiency: item.fuelEfficiency,
        dailyRate: item.dailyRate,
        images: item.images,
        features: item.features,
      }));
      return carsAvailables;
    }
    return [];
  };

  const execute = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    await executeListAvailableCars(
      String(startDate),
      String(endDate),
      setResponse,
      setError,
    );
    const carsSection: HTMLElement = document.querySelector(
      '.Cars',
    ) as HTMLElement;
    carsSection.style.display = 'flex';

    if (error) console.log(error);
  };

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
    setStartDate(formattedDate);

    const endDate = new Date(currentDate);

    endDate.setDate(endDate.getDate() + 1);

    const endYear = endDate.getFullYear();
    const endMonth = String(endDate.getMonth() + 1).padStart(2, '0');
    const endDay = String(endDate.getDate()).padStart(2, '0');
    const endHours = String(endDate.getHours()).padStart(2, '0');
    const endMinutes = String(endDate.getMinutes()).padStart(2, '0');

    const formattedEndDate = `${endYear}-${endMonth}-${endDay}T${endHours}:${endMinutes}`;
    setEndDate(formattedEndDate);
  }, []);

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedDate = new Date(event.target.value);
    const formattedDateTime = selectedDate.toISOString().slice(0, 16);
    setStartDate(formattedDateTime);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    const formattedDateTime = selectedDate.toISOString().slice(0, 16);
    setEndDate(formattedDateTime);
  };

  return (
    <>
      <NavTabPrivatePages />
      <CreateCarStyle>
        <div className='DivInputs'>
          <div className='DivSearch'>
            <input type='text' id='search' placeholder='Type a car' />
            <button onClick={async (e) => execute(e)}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className='DivInputDate'>
            <label htmlFor='startDate'>Start Date: </label>
            <input
              type='datetime-local'
              id='startDate'
              value={startDate as string}
              onChange={handleStartDateChange}
            />
            <br />
            <label htmlFor='endDate'>End Date: </label>

            <input
              type='datetime-local'
              id='endDate'
              value={endDate as string}
              onChange={handleEndDateChange}
            />
          </div>
        </div>

        <section className='Cars'>
          <h1>Cars Available</h1>
          <div className='CarsDiv'>
            {cars.length === 0 ? (
              <>
                <p>Anyone car available</p>
              </>
            ) : (
              cars.map((car) => (
                <Car
                  key={car.id}
                  car={car}
                  isAuthenticated={true}
                  startDate={startDate}
                  endDate={endDate}
                />
              ))
            )}
          </div>
        </section>
      </CreateCarStyle>
      <Footer />
    </>
  );
};

export default CreateCar;
