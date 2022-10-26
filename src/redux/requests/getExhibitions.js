import { BASE_URL } from "../API/BASE_URL";
import { getExhibitionAction } from "../reducers/exhibitionReducer";


const getExhibitions = () => {
    return async (dispatch) => {
        const response = await fetch(BASE_URL + 'exhibitions/');
        const data = await response.json();

        dispatch(getExhibitionAction(data));
    }
}

export default getExhibitions;