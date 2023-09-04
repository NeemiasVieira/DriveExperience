import React, { useState, useEffect } from 'react';
import { CarStyle } from './CarStyle';
import { Link } from 'react-router-dom';
import { executeCreateReserve } from '../../assets/api/use-cases/reserves/createReserve';
import { SucessModal } from '../SucessModal/SucessModal';
import { ErrorModal } from '../ErrorModal/errorModal';

export interface CarType {
  id: number;
  model: string;
  plateNumber: string;
  year: number;
  isAutomatic: boolean;
  carType: string;
  color: string;
  fuelEfficiency: number;
  dailyRate: number;
  images: string[];
  features: string[];
}

export interface CarProps {
  car: CarType;
  isAuthenticated: boolean;
  startDate: string | Date;
  endDate: string | Date;
}

export const Car: React.FC<CarProps> = (props: CarProps) => {
  const [sucessmodal, setSucessModal] = useState<boolean>(false);
  const [errormodal, setErrorModal] = useState<boolean>(false);
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    if (response?.status === 201) setSucessModal(true);
    if (error) setErrorModal(true);
  }, [response, error]);

  const createReserve = async () => {
    await executeCreateReserve(
      props.car.id,
      props.startDate,
      props.endDate,
      setResponse,
      setError,
    );
    setSucessModal(true);
  };

  return (
    <CarStyle>
      {sucessmodal && (
        <SucessModal
          message='Reserve created with sucess =)'
          messageButton='Back'
        />
      )}
      {errormodal && (
        <ErrorModal
          messages={error ? error.response.data.message : 'An error'}
        />
      )}
      <h2>{props.car.model}</h2>
      <img src={props.car.images[0]} alt="Car's images" />
      <div className='carDescription'>
        <p>
          <strong>Year: </strong>
          {props.car.year}
        </p>
        <p>
          <strong>Plate-Number: </strong>
          {props.car.plateNumber}
        </p>
      </div>
      <div className='carDescription'>
        <p>
          <strong>Transmission: </strong>
          {props.car.isAutomatic ? 'Automatic' : 'Manual'}
        </p>
        <p>
          <strong>Type: </strong>
          {props.car.carType}
        </p>
      </div>
      <div className='carDescription'>
        <p>
          <strong>Fuel Efficiency: </strong>
          {props.car.fuelEfficiency} Km/L
        </p>
      </div>
      <p>
        <strong>Features: </strong>Air Conditioning, GPS Navigation
      </p>
      <h3>${props.car.dailyRate.toFixed(2)} per day</h3>
      {!props.isAuthenticated && (
        <Link to='/login' className='reserveNowNoAuthenticated'>
          Reserve Now
        </Link>
      )}
      {props.isAuthenticated && (
        <button onClick={createReserve}>Rent now</button>
      )}
    </CarStyle>
  );
};
