import React from 'react';
import { SignupStyle } from './SignupStyle';
import gla from '../../assets/imgs/mercades-gla.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { newUser } from '../../assets/api/use-cases/clients/signup';
import { executeSignup } from '../../assets/api/use-cases/clients/signup';
import { ErrorModal } from '../../components/ErrorModal/errorModal';
import { SucessModal } from '../../components/SucessModal/SucessModal';
import { useNavigate } from 'react-router-dom';

export interface ErrorType {
  message: string | string[];
}

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [driverLicenseNumber, setDriverLicenseNumber] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState<object>();
  const [error, setError] = useState<object | ErrorType | any>({});
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const newUser: newUser = {
    username,
    email,
    fullName,
    phoneNumber,
    driverLicenseNumber,
    password,
  };

  useEffect(() => {}, [error]);

  const signup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newUser: newUser,
  ) => {
    e.preventDefault();
    await executeSignup(newUser, setResponse, setError);
  };

  return (
    <>
      {response && (
        <SucessModal
          message='Welcome Mario! Account registered successfully'
          messageButton='Login Now'
          buttonAction={goToLogin}
        />
      )}
      {error.message && <ErrorModal messages={error.message} error={error} />}
      <SignupStyle>
        <section className='sectionForm'>
          <form>
            <h1>Signup</h1>
            <div className='inputDiv'>
              <label htmlFor=''>Username</label>
              <input
                type='text'
                placeholder='Type a username'
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className='inputDiv'>
              <label htmlFor=''>E-mail</label>
              <input
                type='email'
                placeholder='Type a e-mail'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='inputDiv'>
              <label htmlFor=''>Full Name</label>
              <input
                type='text'
                placeholder='Type your full name'
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div className='inputDiv'>
              <label htmlFor=''>Phone Number</label>
              <input
                type='tel'
                placeholder='Type your phone number'
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
            <div className='inputDiv'>
              <label htmlFor=''>Driver License Number</label>
              <input
                type='text'
                placeholder='Type your driver license number'
                value={driverLicenseNumber}
                onChange={(e) => {
                  setDriverLicenseNumber(e.target.value);
                }}
              />
            </div>
            <div className='inputDiv'>
              <label htmlFor=''>Password</label>
              <input
                type='password'
                placeholder='Type a password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <p>
              Already signup? <Link to='/login'>Login Here</Link>
            </p>
            <button onClick={async (e) => await signup(e, newUser)}>
              Get Started
            </button>
          </form>
        </section>
        <section className='sectionImg'>
          <img src={gla} alt='' />
        </section>
      </SignupStyle>
    </>
  );
};

export default Signup;
