import { BASE_URL } from '../API/BASE_URL';

export const getShops = async () => {
  const response = await fetch(BASE_URL + 'shops/shops/', {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};
