import React from "react"
import { CarStyle } from "./CarStyle"

export interface CarType {
    model: string;
    plateNumber: string;
    year: number;
    isAutomatic: boolean;
    carType: string;
    color: string;
    fuelEfficiency: number;
    dailyRate: number;
    images: string[];
    features: {
      airConditioning: boolean;
      powerWindows: boolean;
      gpsNavigation: boolean;
    };
  }
  
export interface CarProps{
    car: CarType
}

export const Car: React.FC<CarProps> = (car: CarProps) => {
    return (
        <CarStyle>
            <h2>{car.car.model}</h2>
            <img src={car.car.images[0]} alt="Car's images" />
            <div className="carDescription">
                <p><strong>Year: </strong>{car.car.year}</p>
                <p><strong>Plate-Number: </strong>{car.car.plateNumber}</p>
            </div>
            <div className="carDescription">
            <p><strong>Transmission: </strong>{car.car.isAutomatic? "Automatic" : "Manual"}</p>
            <p><strong>Type: </strong>{car.car.carType}</p>
            </div>
            <div className="carDescription">
            <p><strong>Fuel Efficiency: </strong>{car.car.fuelEfficiency} Km/L</p>
            </div>
            <p><strong>Features: </strong>Air Conditioning, GPS Navigation</p>
            <h3>${car.car.dailyRate.toFixed(2)} per day</h3>
            <button>Rent now</button>

        </CarStyle>
    )
}