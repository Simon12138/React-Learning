var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var objectAssign = Object.assign;
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _todoStore = {
	todoList: []
};

var addItem = function(item) {
	_todoStore.todoList.push(item);
}

var removeItem = function(index) {
	_todoStore.todoList.splice(index, 1);
}

var initData = function(data) {
	_todoStore.todoList = data;
}

var doneItem = function(index) {
	_todoStore.todoList[index].finished = true;
}

var ToDoStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getList: function() {
		return _todoStore.todoList;
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.actionType) {
		case AppConstants.INIT_DATA:
			initData(action.data);
			ToDoStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.ADD_ITEM:
			addItem(action.data);
			ToDoStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.REMOVE_ITEM:
			removeItem(action.data);
			ToDoStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.DONE_ITEM:
			doneItem(action.data);
			ToDoStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
});

module.exports = ToDoStore;