import React from "react"
import { CarStyle } from "./CarStyle"
import { Link } from "react-router-dom";

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
    features: string[]
  }
  
export interface CarProps{
    car: CarType,
    isAuthenticated: boolean
}

export const Car: React.FC<CarProps> = (props: CarProps) => {   
    
    return (
        <CarStyle>
            <h2>{props.car.model}</h2>
            <img src={props.car.images[0]} alt="Car's images" />
            <div className="carDescription">
                <p><strong>Year: </strong>{props.car.year}</p>
                <p><strong>Plate-Number: </strong>{props.car.plateNumber}</p>
            </div>
            <div className="carDescription">
            <p><strong>Transmission: </strong>{props.car.isAutomatic? "Automatic" : "Manual"}</p>
            <p><strong>Type: </strong>{props.car.carType}</p>
            </div>
            <div className="carDescription">
            <p><strong>Fuel Efficiency: </strong>{props.car.fuelEfficiency} Km/L</p>
            </div>
            <p><strong>Features: </strong>Air Conditioning, GPS Navigation</p>
            <h3>${props.car.dailyRate.toFixed(2)} per day</h3>
            {!props.isAuthenticated && <Link to="/login" className="reserveNowNoAuthenticated">Reserve Now</Link>}
            {props.isAuthenticated && <button>Rent now</button>}
            

        </CarStyle>
    )
}