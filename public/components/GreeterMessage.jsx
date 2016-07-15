var React = require('react');

var GreeterMessage = React.createClass({ //presentational component
  render: function () {
    //these two props are passed from the parents
    var name = this.props.name;
    var message = this.props.message;
    //it then renders them to the screen
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
