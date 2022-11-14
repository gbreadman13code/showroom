import { BASE_URL } from '../API/BASE_URL';

export const getPaths = async () => {
  const response = await fetch(BASE_URL + 'paths', {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};
