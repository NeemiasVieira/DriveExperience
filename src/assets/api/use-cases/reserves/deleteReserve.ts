import api from '../../config';

export const deleteReserve = async (id: number) => {
  const config = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };

  await api
    .delete(`/reserves/${id}`, config)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};
