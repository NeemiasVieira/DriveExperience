import api from "../../config";



export const getReserves = async (
    setReserves: React.Dispatch<React.SetStateAction<any>>,
    setError: React.Dispatch<React.SetStateAction<any>>,
    setImages: React.Dispatch<React.SetStateAction<any>>
) => {
    const config = {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
    };
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
        setImages(images.flat());

    } catch (error) {
        console.error(error);
        setReserves([]);
        setError({ message: "An error" });
    }
};
