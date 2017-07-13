var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ToDoActions = {
	initData: function(data) {
		AppDispatcher.handleAction({
			actionType: AppConstants.INIT_DATA,
			data: data
		});
	},

	addItem: function(item) {
		AppDispatcher.handleAction({
			actionType: AppConstants.ADD_ITEM,
			data: item
		});
	},

	removeItem: function(index) {
		AppDispatcher.handleAction({
			actionType: AppConstants.REMOVE_ITEM,
			data: index
		});
	},

	doneItem: function(index) {
		AppDispatcher.handleAction({
			actionType: AppConstants.DONE_ITEM,
			data: index
		});
	}
};

module.exports = ToDoActions;