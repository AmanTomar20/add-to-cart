import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constants"



export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART condition ", action, data);
            return data.filter(val => val.name !== action.data)
        case EMPTY_CART:
            console.warn("EMPTY CART condition ", action);
            return []
        default:
            return []
    }
}