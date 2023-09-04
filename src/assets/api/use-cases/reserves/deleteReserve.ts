import api from '../../config';

const config = {
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
};

export const deleteReserve = async (id: number) => {
  await api
    .delete(`/reserves/${id}`, config)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};
