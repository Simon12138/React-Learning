var React = require('react');
var CartActions = require('../actions/CartActions');

var Product = React.createClass({

	selectVariant: function (event) {
		CartActions.selectProduct(event.target.value);
	},

	render: function() {
		return (
			<div className='flux-product'>
				<img src={'img/' + 'scotch-beer.png'} />
				<div className='flux-product-detail'>
					<h1 className='name'>{this.props.product.name}</h1>
					<p className='description'>{this.props.product.description}</p>
					<p className="price">Price: {this.props.selected.price}$</p>
					<select onChange={this.selectVariant}>
						{this.props.product.variants.map(function (variant, index) {
							return (
								<option key={index} value={index}>{variant.type}</option>
							)
						})}
					</select>
					<button type='button'>Add To Cart</button>
				</div>
			</div>
		);
	}
});

module.exports = Product;