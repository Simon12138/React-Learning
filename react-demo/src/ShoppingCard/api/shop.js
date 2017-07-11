import _products from './products.json';

const TIMEOUT = 100;

export default {
  function getProducts(cb, timeout) {
  	setTimeout(function() {
  		return cb(_products);
  	}, timeout || TIMEOUT);
  },

  function buyProducts(payload, cb, timeout) {
    setTimeout(function() {
    	return cb();
    }, timeout || TIMEOUT);
  }
  // getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  // buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}