import api from "../../config";

export const executeListAvailableCars = async(startDate: string, finalDate: string, setResponse: React.Dispatch<React.SetStateAction<any>>, setError: React.Dispatch<React.SetStateAction<any>>) => {
    await api.post("/cars/listAvailables", {
        initialDate: startDate,
        finalDate: finalDate
      }).then((response) => {
        setResponse(response);
      }).catch((error) => {
        setError(error);
      })
}

