var React = require('react');

var List = React.createClass({
	render: function() {
		var styles = {
      		uList: {
        		paddingLeft: 0,
        		listStyleType: "none"
      		},
      		listGroup: {
        		margin: '5px 0',
        		borderRadius: 5
      		},
      		removeItem: {
        		fontSize: 20,
        		float: "left",
        		position: "absolute",
        		top: 12,
        		left: 6,
        		cursor: "pointer",
        		color: "rgb(222, 79, 79)"
      		},
      		todoItem: {
        		paddingLeft: 20,
        		fontSize: 17
      		},
      		finishedItem: {
      			paddingLeft: 20,
        		fontSize: 17,
        		color: "darkgrey"
      		},
      		right: {
      			float: "right",
      			width: "70px"
      		}
    	};
    	var that = this;
		return (
			<ul style={styles.uList}>
				{
					this.props.items.map(function(item, index) {
						return (
							<li key={index} className="list-group-item" style={styles.listGroup}>
          						<span className="glyphicon glyphicon-remove" style={styles.removeItem} onClick={that.props.removeAction.bind(that, index)}></span>
          						<span style={item.finished ? styles.finishedItem : styles.todoItem}>{item.description}</span>
          						<button type="button" className={'btn btn-primary btn-sm ' + (item.finished ? 'disabled' : '')} 
          							onClick={that.props.doneAction.bind(that, index)} style={styles.right}>DONE</button>
        					</li>
						);
					})
				}
			</ul>
		);
	}
});

module.exports = List;