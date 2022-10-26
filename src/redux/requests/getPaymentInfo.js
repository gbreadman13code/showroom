import { BASE_URL } from '../API/BASE_URL';

export const getPaymentInfo = async () => {
    const payment = window.localStorage.getItem('paymentsIndustry');
    const paymentID = JSON.parse(payment).payment_id;

    // const requestData = JSON.stringify({id: paymentID})
    const response = await fetch(BASE_URL + 'payments/?id=' + paymentID, {
        method: 'GET',
        // body: requestData,
    })

    const data = await response.json();
    
    if (data.status === 'succeeded') {
        return true
    } else return false;
}