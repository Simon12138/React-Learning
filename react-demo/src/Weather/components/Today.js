var React = require('react');

class Today extends React.Component {
	render() {
		return (
			<div className="panel panel-primary today-panel">
				<div className="panel-heading">
    				<h3 className="panel-title">Today's Weather</h3>
  				</div>
  				<div class="panel-body">
    				Panel content
  				</div>
			</div>
		);
	}
}

module.exports = Today;