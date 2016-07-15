var React = require('react');

var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

//container component
var Greeter = React.createClass({ //one argument: options object, only thing that is required is a render method
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message.'
    };
  },
  getInitialState: function () {
    //similiar to get default props. Returns an object which gets set to this.state
    return {
      name: this.props.name, //you know you're gonna get a name prop no matter what. As a component, maintain a name state that you can change yourself
      message: this.props.message
    }
  },
  handleNewData: function (updates) { // event handler gets passed event object 'e'
    this.setState(updates); //maintains state for the application. When state changes it rerenders its children
  },
  render: function(){ //expects jsx code to be returned
    var name = this.state.name;
    var message = this.state.message;

    return ( //can only return ONE root element. That is why we have this div
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;
