import { Reserve } from "../../../components/Reserve/Reserve";
import { MyReservesStyle } from "./MyReservesStyle";
import { Footer } from "../../../components/Footer/Footer";
import { NavTabPrivatePages } from "../../../components/NavTabPrivatePages/NavTabPrivatePages";
import { useState, useEffect } from "react";
import { getReserves } from "../../../assets/api/use-cases/reserves/getReserves";
import { ReserveProps } from "../../../components/Reserve/Reserve";
import { Loading } from "../../../components/Loading/Loading";

const MyReserves = () => {
  const [reserves, setReserves] = useState<any>([]);
  const [error, setError] = useState();
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getReserves(setReserves, setError, setImages);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {}, [reserves]);

  return (
    <>
      <NavTabPrivatePages />
      <MyReservesStyle>
        <h1>My Reserves</h1>
        <div className="cars">
          {isLoading ? (
            <Loading />
          ) : (
            reserves.map((reserve: any, index: number) => (
              <Reserve
                key={reserve.id}
                reserve={reserve}
                image={images[index]}
              />
            ))
          )}
        </div>
      </MyReservesStyle>
      <Footer />
    </>
  );
};

export default MyReserves;
