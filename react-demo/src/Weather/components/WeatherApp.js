var React = require('react');
var Today = require('./Today')

class WeatherApp extends React.Component {

	render() {
		return(
			<div>
				<Today />
			</div>
		);
	}
}

module.exports = WeatherApp;