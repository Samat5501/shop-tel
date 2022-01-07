import * as types from './actionTypes'


export const addToBasket = (item) => ({
  type: types.ADD_TO_BASKET,
  payload: item,
});
