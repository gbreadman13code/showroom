import { BASE_URL } from '../API/BASE_URL';

export const getShop = async (id) => {
  const response = await fetch(BASE_URL + `shops/shops/${id}/`, {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};
