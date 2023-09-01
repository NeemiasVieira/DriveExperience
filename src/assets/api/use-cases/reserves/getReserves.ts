import { CarType } from "../../../../components/Car/Car";
import api from "../../config";

const config = {
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
};

export const getReserves = async (
    setReserves: React.Dispatch<React.SetStateAction<any>>,
    setError: React.Dispatch<React.SetStateAction<any>>,
    setImages: React.Dispatch<React.SetStateAction<any>>
) => {
    try {
        const response = await api.get("/reserves", config);
        const reserves = response.data;

        if (reserves.length === 0) {
            setReserves([]);
            return;
        }

        const carIds = reserves.map((reserve: any) => reserve.carId);

        const carResponses = await Promise.all(
            carIds.map((carId: any) => api.get(`/cars/${carId}`))
        );

        const images = carResponses.map((carResponse) => carResponse.data.images);

        setReserves(reserves);
        setImages(images.flat()); // Use .flat() para achatar o array de arrays de imagens

    } catch (error) {
        console.error(error);
        setReserves([]);
        setError({ message: "An error" });
    }
};
