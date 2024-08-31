import { combineReducers, createStore, compose } from 'redux';

import { cartReducer } from './cart.reducers';

export const rootReducer = combineReducers({
  cart: cartReducer,
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;