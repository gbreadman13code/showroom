import { BASE_URL } from '../API/BASE_URL';

export const getEvents = async () => {
  const response = await fetch(BASE_URL + 'events', {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};
