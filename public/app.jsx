//uppercase for react components
var Greeter = React.createClass({ //one argument: options object, only thing that is required is a render method
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message.'
    };
  },
  render: function(){ //expects jsx code to be returned
    var name = this.props.name;
    var message = this.props.message;

    return ( //can only return ONE root element. That is why we have this div
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var firstName = 'Brandon';

ReactDOM.render(
  <Greeter name={firstName} message="Message from prop!"/>,
  document.getElementById('app')
);
