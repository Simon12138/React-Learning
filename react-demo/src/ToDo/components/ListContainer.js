var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List')
var ToDoStore = require('../stores/ToDoStore');
var ToDoActions = require('../actions/ToDoActions');

var ListContainer = React.createClass({

	getInitialState: function() {
		return {
			todoList: ToDoStore.getList()
		}
	},

	componentDidMount: function() {
		ToDoStore.addChangeListener(this.__onChange);
	},

	componentWillOnmount: function() {
		ToDoStore.removeChangeListener(this.__onChange);
	},

	handleAddItem: function(newItem) {
		ToDoActions.addItem(newItem);
	},

	handleRemoveItem: function(index) {
		ToDoActions.removeItem(index);
	},

	handleDoneItem: function(index) {
		ToDoActions.doneItem(index);
	},

	__onChange: function() {
		this.setState({
			todoList: ToDoStore.getList()
		});
	},

	render: function() {
		return (
			<div className="col-sm-6 col-md-offset-3">
				<div className="col-sm-12">
					<h3 className="text-center"> Todo List </h3>
					<AddItem addAction={this.handleAddItem} />
					<List items={this.state.todoList} removeAction={this.handleRemoveItem} doneAction={this.handleDoneItem} />
				</div>
			</div>
		);
	}
});

module.exports = ListContainer;