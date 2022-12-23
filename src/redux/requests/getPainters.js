import { BASE_URL } from '../API/BASE_URL';

export const getPainters = async () => {
  const response = await fetch(BASE_URL + 'exhibitions/authors/', {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};
