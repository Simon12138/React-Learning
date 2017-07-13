var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstants = require('../constants/CartConstants');

var CartActions = {
	receiveProduct: function(data) {
		AppDispatcher.handleAction({
			actionType: CartConstants.RECEIVE_DATA,
			data: data
		});
	},
	selectProduct: function(index) {
		AppDispatcher.handleAction({
			actionType: CartConstants.SELECT_PRODUCT,
			data: index
    	});
	},
	addToCart: function(sku, update) {
		AppDispatcher.handleAction({
			actionType: CartConstants.CART_ADD,
			sku: sku,
			update: update
		})
	}
};

module.exports = CartActions;