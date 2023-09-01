import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import FAQ from '../../pages/FAQ/FAQ';
import CarsNotAuthenticated from '../../pages/CarsNotAuthenticated/CarsNotAuthenticated';
import Signup from '../../pages/Signup/Signup';
import PrivateRoute from './privateRoute';
import MyReserves from '../../pages/AuthenticatedPages/MyReserves/MyReserves';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/cars' element={<CarsNotAuthenticated />} />
        <Route path='/signup' element={<Signup />} />

        <Route
          path='/myreserves'
          element={
            <PrivateRoute>
              <MyReserves />
            </PrivateRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default Router;
