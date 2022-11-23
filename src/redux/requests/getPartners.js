import { BASE_URL } from '../API/BASE_URL';

export const getPartners = async () => {
  const response = await fetch(BASE_URL + 'partners/categories/', {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};
