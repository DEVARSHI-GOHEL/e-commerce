import ActionTypes from '../constant/ActionTypes'

export const setProducts = (products) => {
    return (
        {
            type: ActionTypes.SET_PRODUCTS,
            payload: products
        }
    )
}

export const emptyCart = () => {
    return(
        {
            type: ActionTypes.EMPTY_CART
        }
    )
}

export const addToCart = (product) => {
    return (
        {
            type: ActionTypes.ADD_TO_CART,
            payload: product
        }
    )
}

export const removeFromCart = (id) => {
    return (
        {
            type: ActionTypes.REMOVE_FROM_CART,
            payload: id
        }
    )
}

export const adjustItemQty = (id, qty) => {
    return {
        type: ActionTypes.ADJUST_ITEM_QTY,
        payload: {
            id: id,
            qty
        }
    };
};