import React from 'react';
import { Reserve } from '../../../components/Reserve/Reserve';
import { MyReservesStyle } from './MyReservesStyle';
import { Footer } from '../../../components/Footer/Footer';
import { NavTabPrivatePages } from '../../../components/NavTabPrivatePages/NavTabPrivatePages';

const MyReserves = () => {
  return (
    <>
      <NavTabPrivatePages />
      <MyReservesStyle>
        <h1>My Reserves</h1>
        <Reserve />
      </MyReservesStyle>
      <Footer />
    </>
  );
};

export default MyReserves;
