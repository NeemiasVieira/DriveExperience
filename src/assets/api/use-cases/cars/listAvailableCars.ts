import api from "../../config";

export const executeListAvailableCars = async (
  startDate: string,
  finalDate: string,
  setResponse: React.Dispatch<React.SetStateAction<any>>,
  setError: React.Dispatch<React.SetStateAction<any>>,
  query?: string
) => {

  let url = "/cars/listAvailables";

  // Verifique se query é uma string não vazia
  if (typeof query === "string" && query.trim() !== "") {
    url += `?model=${query}`;
  }

  // Construa o corpo da requisição com initialDate e finalDate
  const requestBody = {
    initialDate: startDate,
    finalDate: finalDate,
  };

  await api.post(url, requestBody).then((response) => setResponse(response)).catch((error) => setError(error))

};
