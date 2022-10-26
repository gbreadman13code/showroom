import { BASE_URL } from '../API/BASE_URL';

export const setPayments = async (data) => {


    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }


    const csrftoken = getCookie('csrftoken');

    const response = await fetch(BASE_URL + 'payments/', {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'X-CSRFToken': csrftoken,
        },
        method: 'POST',
        body: JSON.stringify(data),
    });

    const json = await response.json();

    window.localStorage.setItem('paymentsIndustry', JSON.stringify(json))

    const link = document.createElement('a');
    link.setAttribute('href', json.confirmation_url);
    link.click();
}