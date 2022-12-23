import { BASE_URL } from '../API/BASE_URL';

export const getPainterProfile = async (id) => {
  const response = await fetch(BASE_URL + `exhibitions/authors/${id}/`, {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};
