const initialState = {
  orderList: [],
};

const SET_ITEM = "SET_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEM:
      if (state.orderList.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
          orderList: state.orderList.map((item) => {
            if (item.id === action.payload.id) {
              item.count = item.count + 1;
              return item;
            } else return item;
          }),
        };
      } else {
        return { ...state, orderList: [...state.orderList, action.payload] };
      }
    case DELETE_ITEM:
      if (state.orderList.length > 1) {
        return {
          ...state,
          orderList: state.orderList.filter(
            (item) => item.id !== action.payload
          ),
        };
      } else if (state.orderList.length === 1) {
        return { ...state, orderList: [] };
      }
    // eslint-disable-next-line no-fallthrough
    case INCREMENT:
      return {
        ...state,
        orderList: state.orderList.map((item) => {
          if (item.id === action.payload.id) {
            item.count = action.payload.value;
            return item;
          } else return item;
        }),
      };
    case DECREMENT:
      return {
        ...state,
        orderList: state.orderList.map((item) => {
          if (item.id === action.payload) {
            item.count = item.count - 1;
          }
        }),
      };
    default:
      return state;
  }
};

export const setNewItemToOrderAction = (payload) => ({
  type: SET_ITEM,
  payload,
});

export const deleteItemFromOrderAction = (payload) => ({
  type: DELETE_ITEM,
  payload,
});

export const incrementAction = (payload) => ({ type: INCREMENT, payload });
export const decrementAction = (payload) => ({ type: DECREMENT, payload });
