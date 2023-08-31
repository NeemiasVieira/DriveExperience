import api from "../../config";

export const executeListAvailableCars = async(setResponse: React.Dispatch<React.SetStateAction<any>>, setError: React.Dispatch<React.SetStateAction<any>>) => {
    await api.post("/cars/listAvailables", {
        initialDate: "2023-09-21T00:00:01Z",
        finalDate: "2023-09-20T00:00:00Z"
      }).then((response) => {
        setResponse(response);
      }).catch((error) => {
        setError(error);
      })
}

