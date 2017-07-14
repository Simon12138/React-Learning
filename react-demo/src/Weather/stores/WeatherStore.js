var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var objectAssign = Object.assign;
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _weatherStore = {
	_weather: {}
};


var syncData = function(data) {
	_weatherStore._weather = data;
}

var WeatherStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getData: function() {
		return _weatherStore._weather;
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.actionType) {
		case AppConstants.SYNC_DATA:
			syncData(action.data);
			WeatherStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
});

module.exports = WeatherStore;