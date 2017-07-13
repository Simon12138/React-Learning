var React = require('react');

var Cart = React.createClass({
	render: function() {
		return (
			<div className="flux-cart active">
				<div className="mini-cart">
					<button type="button" className="close-cart">&times;</button>
					<ul>
						<li>
							<h1 className="name">Beer</h1>
							<p className="type">Beer x 12</p>
							<p className="price">102$</p>
							<button type="button" className="remove-item">Remove</button>
						</li>
					</ul>
					<span className="total">Total:102$</span>
				</div>
				<button type="button" className="view-cart">View Cart</button>
			</div>
		);
	}
});

module.exports = Cart;