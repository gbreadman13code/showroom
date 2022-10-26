const initialState = {
    exhibitions: [],
};

const GET_EXHIBITION = "GET_EXHIBITION";
const SET_LIKE = "SET_LIKE";

export const exhibitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXHIBITION:
      return { ...state, exhibitions: action.payload.results };
    // case SET_LIKE: 
    //   return {...state}
    default:
      return state;
  }
};

export const getExhibitionAction = (payload) => ({ type: GET_EXHIBITION, payload });
