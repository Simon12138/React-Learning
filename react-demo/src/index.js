import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartApp from './ShoppingCard/components/CartApp';
import registerServiceWorker from './registerServiceWorker';

var ProductData = require('./ShoppingCard/ProductData');
var CartAPI = require('./ShoppingCard/utils/CartAPI');


// Load Mock Product Data into localStorage
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();


ReactDOM.render(<CartApp />, document.getElementById('root'));
registerServiceWorker();
