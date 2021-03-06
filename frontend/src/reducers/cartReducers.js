import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	EMPTY_CART,
	EMPTY_CART_ADDRESS,
	CART_SAVE_SHIPPING_ADDRESS,
	CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const cartReducer = (
	state = { cartItems: [], shippingAddress: {} },
	action
) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload
			const existItem = state.cartItems.find(x => x.product === item.product)

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map(x =>
						x.product === existItem.product ? item : x
					),
				}
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				}
			}
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(x => x.product !== action.payload),
			}
		case CART_SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			}
		case CART_SAVE_PAYMENT_METHOD:
			return {
				...state,
				paymentMethod: action.payload,
			}

		case EMPTY_CART:
			return {
				...state,
				cartItems: [],
			}
		case EMPTY_CART_ADDRESS:
			return {
				cartItems: [],
				shippingAddress: {},
			}
		default:
			return state
	}
}
