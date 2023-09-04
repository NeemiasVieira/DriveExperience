import api from "../../config";

export const updateReserve = async (reserveId: number, startDate: string, endDate: string, setResponse: React.Dispatch<React.SetStateAction<any>>, setError: React.Dispatch<React.SetStateAction<any>>) => {
    const headers = {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json',
    };
    await api.patch("/reserves", { reserveId, startDate, endDate }, { headers })
        .then((response) => {
            console.log(response.data);
            setResponse(response.data);
        })
        .catch((error) => {
            console.log(error.response.data.message);
            setError(error.response.data.message);
        })
}