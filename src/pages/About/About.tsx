import React, { useEffect, useState } from "react";
import { AboutStyle } from "./AboutStyle"
import { NavTab } from "../../components/NavTab/NavTab";
import { Footer } from "../../components/Footer/Footer";
import { Car } from "../../components/Car/Car";
import { CarProps } from "../../components/Car/Car";
import { CarType } from "../../components/Car/Car";
import { executeListAvailableCars } from "../../assets/api/use-cases/cars/listAvailableCars";

const car1: CarType = {
    model: "HB20 SPORT 1.0",
    plateNumber: "FXF9F33",
    year: 2023,
    isAutomatic: true,
    carType: "Hatch",
    color: "Black",
    fuelEfficiency: 30,
    dailyRate: 39.90,
    images: ["https://www.localiza.com/brasil-site/geral/Frota/HB2X.png", "imagem2.jpg"],
    features: ["ar"]
  };

  const car2: CarType = {
    model: "ONIX Turbo 1.0",
    plateNumber: "DZA9099",
    year: 2023,
    isAutomatic: false,
    carType: "Sedan",
    color: "Gray",
    fuelEfficiency: 12,
    dailyRate: 49.90,
    images: ["https://www.localiza.com/brasil-site/geral/Frota/ONIX.png", "imagem2.jpg"],
    features: ["ar"]
  };
  

const About = () => {

  const [response, setResponse] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    console.log(response);
  }, [response]);

  const execute = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    await executeListAvailableCars(setResponse, setError);
    if(error) console.log(error);
  }

    return(
        <>
        
        <NavTab/>
        <AboutStyle>
            <h1>Cars Available</h1>
            <section>
                <Car car={car1}/>   
                <Car car={car2}/> 
            </section>
                <button onClick={async(e) => execute(e)}>Chamar API</button>                   
            
        </AboutStyle>
        <Footer/>

        </>
    )
}

export default About;