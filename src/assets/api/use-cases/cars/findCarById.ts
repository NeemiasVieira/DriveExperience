import api from "../../config";

export const findCarById = async (id: number, setResponse: React.Dispatch<React.SetStateAction<any>>, setError: React.Dispatch<React.SetStateAction<any>>) => {
    await api.get(`/cars/${id}`).then((response) => {
        setResponse(response.data)
    }).catch((error) => setError(error))

}