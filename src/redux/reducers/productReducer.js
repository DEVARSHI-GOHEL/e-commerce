import ActionTypes from "../constant/ActionTypes";

const initState = {
    cart: [],
    products: []
}

export const productReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }

        case ActionTypes.ADD_TO_CART:
            const inCart = state.cart.find((item) =>
                item.id === payload.id ? true : false
            );
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...payload, qty: 1 }]
            }

        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload)
            }

        case ActionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map    ((item) =>
                    item.id === payload.id
                        ? { ...item, qty: payload.qty }
                        : item
                ),
            };

        case ActionTypes.EMPTY_CART:
            return{
                ...state,
                cart: []
            }    
            
        default:
            return state
    }
}