var React = require('react');
var ListContainer = require('./ToDo/components/ListContainer');

var App = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <ListContainer />
        </div>
      </div>
    )
  }
});

export default App;
