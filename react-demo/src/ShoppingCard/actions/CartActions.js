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
	}
};

module.exports = CartActions;