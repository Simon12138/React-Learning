import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartApp from './ShoppingCard/components/CartApp';
import WeatherApp from './Weather/components/WeatherApp';
import registerServiceWorker from './registerServiceWorker';

var ProductData = require('./ShoppingCard/ProductData');
var CartAPI = require('./ShoppingCard/utils/CartAPI');
var ToDoData = require('./ToDo/utils/ToDoData');


// Load Mock Product Data into localStorage
// ProductData.init();

// Load Mock API Call
// CartAPI.getProductData();
ToDoData.initData();

ReactDOM.render(<WeatherApp />, document.getElementById('app'));
registerServiceWorker();
