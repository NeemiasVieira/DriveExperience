import { Reserve } from '../../../components/Reserve/Reserve';
import { MyReservesStyle } from './MyReservesStyle';
import { Footer } from '../../../components/Footer/Footer';
import { NavTabPrivatePages } from '../../../components/NavTabPrivatePages/NavTabPrivatePages';
import { useState, useEffect } from 'react';
import { getReserves } from '../../../assets/api/use-cases/reserves/getReserves';
import { Loading } from '../../../components/Loading/Loading';
import { Link } from 'react-router-dom';

const MyReserves = () => {
  const [reserves, setReserves] = useState<any>([]);
  const [error, setError] = useState();
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const removeReserve = () => {
    getReserves(setReserves, setError, setImages);
  };

  useEffect(() => {
    getReserves(setReserves, setError, setImages);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {}, [reserves]);

  return (
    <>
      <NavTabPrivatePages />
      <MyReservesStyle>
        <h1>My Reserves</h1>
        <div className='cars'>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {reserves.length > 0 ? (
                <>
                  <h3>
                    {reserves.length}{' '}
                    {reserves.length === 1 ? 'result' : 'results'} found.
                  </h3>
                  {reserves.map((reserve: any, index: number) => (
                    <Reserve
                      key={reserve.id}
                      reserve={reserve}
                      image={images[index]}
                      onRemove={() => removeReserve()}
                    />
                  ))}
                </>
              ) : (
                <>
                  <p>You don't have any reserves.</p>
                  <Link to='/create-reserve'>Reserve a Car Now</Link>
                </>
              )}
            </>
          )}
        </div>
      </MyReservesStyle>
      <Footer />
    </>
  );
};

export default MyReserves;
