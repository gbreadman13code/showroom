import { BASE_URL } from '../API/BASE_URL';

export const getPaymentInfo = async (url, localStorageVariableName) => {
  const payment = window.localStorage.getItem(localStorageVariableName);
  const paymentID = JSON.parse(payment).payment_id;
  console.log(payment);

  const response = await fetch(BASE_URL + url + '/?id=' + paymentID, {
    method: 'GET',
  });

  const data = await response.json();

  if (data.status === 'succeeded') {
    return true;
  } else return false;
};
