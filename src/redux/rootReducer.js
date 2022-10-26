import { combineReducers } from "redux";
import { exhibitionReducer } from './reducers/exhibitionReducer';
import { orderReducer } from './reducers/orderReducer';


export const rootReducer = combineReducers({
    exhibitions: exhibitionReducer,
    order: orderReducer,
})