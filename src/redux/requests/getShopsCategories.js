import { BASE_URL } from '../API/BASE_URL';

export const getShopsCategories = async () => {
  const response = await fetch(BASE_URL + 'shops/categories/', {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};
