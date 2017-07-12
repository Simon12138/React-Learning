var React = require('react');
var Product = require('./Product.js');
// var Cart = require('./Cart.js');
var ProductStore = require('../stores/ProductStore');

function getCartState() {
	return {
		product: ProductStore.getProduct(),
		selectedProduct: ProductStore.getSelected()
	};
}

var CartApp = React.createClass({

	getInitialState: function() {
		return getCartState();
	},

	componentDidMount: function () {
    	ProductStore.addChangeListener(this._onChange);
  	},

  	componentWillUnmount: function () {
    	ProductStore.removeChangeListener(this._onChange);
  	},

	render: function() {
		return (
			<div className='flux-cart-app'>
				<Product product={this.state.product} selected={this.state.selectedProduct}/>
			</div>
		);
	},
	_onChange: function () {
	  	this.setState(getCartState());
  	}
});

module.exports = CartApp;