import * as types from './actionTypes'

const initialState = {
    basket: []
}

const basketReducer = (state = initialState, action) => {
    switch (action.types) {
        case types.ADD_TO_BASKET:
            const newBasket = [...state, action.payload]
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
}

export default basketReducer