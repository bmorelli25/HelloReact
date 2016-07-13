//uppercase for react components
var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault(); //prevent browser from refreshing

    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

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
      name: this.props.name //you know you're gonna get a name prop no matter what. As a component, maintain a name state that you can change yourself
    }
  },
  handleNewName: function (name) { // event handler gets passed event object 'e'
    this.setState({
      name: name
    });
  },
  render: function(){ //expects jsx code to be returned
    var name = this.state.name;
    var message = this.props.message;

    return ( //can only return ONE root element. That is why we have this div
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Brandon';
var message;

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
