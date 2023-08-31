import { AxiosError } from "axios";
import api from "../../config"
export interface newUser{
    username: string,
    email: string,
    password: string,
    driverLicenseNumber: string,
    fullName: string,
    phoneNumber: string
  }
  

export const executeSignup = async(newUser: newUser, setResponse: React.Dispatch<React.SetStateAction<object>>, setError: React.Dispatch<React.SetStateAction<string | string[]>>) => {
    await api.post("/signup", newUser).then((response) => {
        setResponse(response);
    }).catch((error: AxiosError) => {
        if (error.response) {
            setError(error.response.data as string[]);
          } else {
            setError('An error occurred');
          }
    })
}