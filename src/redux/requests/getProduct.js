import { BASE_URL } from '../API/BASE_URL';

export const getProduct = async (id) => {
  const response = await fetch(BASE_URL + `shops/products/${id}/`, {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};
