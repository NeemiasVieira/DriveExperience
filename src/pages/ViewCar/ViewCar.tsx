import { ViewCarStyle } from "./ViewCarStyle";
import { useParams } from "react-router-dom";
import { CarType } from "../../components/Car/Car";
import { useEffect, useState } from "react";
import { findCarById } from "../../assets/api/use-cases/cars/findCarById";
import { useNavigate } from "react-router-dom";
import { NavTabPrivatePages } from "../../components/NavTabPrivatePages/NavTabPrivatePages";
import { Footer } from "../../components/Footer/Footer";

const ViewCar = () => {
  const [car, setCar] = useState<CarType>();
  const [error, setError] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    findCarById(Number(id), setCar, setError);
  }, []);

  useEffect(() => {}, [car]);

  return (
    <>
      <ViewCarStyle>
        <NavTabPrivatePages />
        <section>
          <div className="content">
            <div>
              <img src={car?.images[0]} alt="Car's images" />
            </div>
            <div>
              <h1>{car?.model}</h1>

              <p>
                <strong>Year: </strong>
                {car?.year}
              </p>
              <p>
                <strong>Plate-Number: </strong>
                {car?.plateNumber}
              </p>

              <p>
                <strong>Transmission: </strong>
                {car?.isAutomatic ? "Automatic" : "Manual"}
              </p>
              <p>
                <strong>Type: </strong>
                {car?.carType}
              </p>

              <p>
                <strong>Fuel Efficiency: </strong>
                {car?.fuelEfficiency} Km/L
              </p>

              <p>
                <strong>Features: </strong>Air Conditioning, GPS Navigation
              </p>
              <h3>${car?.dailyRate.toFixed(2)} per day</h3>
            </div>
          </div>
          <button
            onClick={(e) => {
              navigate(-1);
            }}
          >
            Come back
          </button>
        </section>
      </ViewCarStyle>
      <Footer />
    </>
  );
};

export default ViewCar;
