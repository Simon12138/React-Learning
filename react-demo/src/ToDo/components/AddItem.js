var React = require('react');
var ReactDOM = require('react-dom');

var AddItem = React.createClass({

	handleSubmit: function(event) {
		if(event.keyCode === 13) {
			var newItem = ReactDOM.findDOMNode(this.refs.newItem).value;
			var item = {"description": newItem, "finished": false};
			ReactDOM.findDOMNode(this.refs.newItem).value = '';
			this.props.addAction(item);
		}
	},

	render: function() {
		return (
			<div>
				<input type="text" ref="newItem" className="form-control" placeholder="New Item"
					 onKeyDown={this.handleSubmit} />
			</div>
		);
	}
});

module.exports = AddItem;