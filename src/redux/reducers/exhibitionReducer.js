const initialState = {
  exhibitions: [],
};

const GET_EXHIBITION = 'GET_EXHIBITION';

export const exhibitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXHIBITION:
      return { ...state, exhibitions: action.payload.results };
    default:
      return state;
  }
};

export const getExhibitionAction = (payload) => ({ type: GET_EXHIBITION, payload });
