var ToDoActions = require('../actions/ToDoActions');

var todos = JSON.stringify([
	{"description": "Call Chris at 09:00", "finished": true},
	{"description": "Metting with PR department at 10:00", "finished": false},
	{"description": "Pay bills on TAOBAO at 11:00", "finished": true},
	{"description": "Betty's Birthday at today", "finished": false}
]);

module.exports = {
	initData : function() {
		var data = JSON.parse(todos);
    	ToDoActions.initData(data);
	}
}