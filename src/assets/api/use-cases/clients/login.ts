import api from '../../config';

export const executeLogin = async (
  email: string,
  password: string,
  setIsLogin: any,
  setError: any,
) => {
  await api
    .post('/login', { email, password })
    .then((response) => {
      console.log(response.data.token);
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('username', response.data.user.username);
      setIsLogin(true);
    })
    .catch((error) => {
      setError(error);
    });
};
