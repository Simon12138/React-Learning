var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var WeatherActions = {
	syncData: function(data) {
		AppDispatcher.handleAction({
			actionType: AppConstants.SYNC_DATA,
			data: data
		});
	}
};

module.exports = WeatherActions;