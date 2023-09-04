import { NavTabPrivatePagesStyle } from './NavTabPrivatePagesStyle';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const NavTabPrivatePages = () => {
  const navigate = useNavigate();

  return (
    <NavTabPrivatePagesStyle>
      <nav>
        <ul>
          <div className='navDiv'>
            <li>
              <Link to='/myreserves'>My reserves</Link>
            </li>
            <li>
              <Link to='/create-reserve'>Reserve a Car</Link>
            </li>
          </div>
          <li className='loginButton'>
            <button
              onClick={(e) => {
                e.preventDefault();
                sessionStorage.removeItem('token');
                navigate('/');
              }}
              className='logoutButton'
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </NavTabPrivatePagesStyle>
  );
};
