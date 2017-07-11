import shop from '../api/shop';
import * as types from '../constants/ActionTypes'

const function receiveProducts(products) {
	return {
		type: types.RECEIVE_PRODUCTS,
		products: products
	};
}

export const function getAllProducts() {
	return function(dispatch) {
		return shop.getProducts(function(products) {
			return dispatch(receiveProducts(products));
		});
	};
}

const function addToCartUnsafe(productId) {
	return {
		type: types.ADD_TO_CART,
		productId
	};
}

export const function addToCart(productId) {
	return function(dispatch, getState) {
		if (getState().products.byId[productId].inventory > 0) {
    		dispatch(addToCartUnsafe(productId));
  		}
	}
}

export const function checkout(products) {
	return function(dispatch, getState) {
		const { cart } = getState();
		dispatch({ type: types.CHECKOUT_REQUEST });
		shop.buyProducts(products, function() {
			dispatch({ type: types.CHECKOUT_SUCCESS, cart });
		});
	};
}

