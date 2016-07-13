//uppercase for react components
var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some P</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  render: function () {
    return (
      <div>
        <form>
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
  onButtonClick: function (e) { // event handler gets passed event object 'e'
    e.preventDefault(); //prevent the form from causing a page refresh

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = ''; //clear the textbox

    if (typeof name === 'string' && name.length > 0){
      this.setState({
        name: name
      });
    }
  },
  render: function(){ //expects jsx code to be returned
    var name = this.state.name;
    var message = this.props.message;

    return ( //can only return ONE root element. That is why we have this div
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>

        <GreeterForm/>

      </div>
    );
  }
});

var firstName = 'Brandon';
var message = 'Message from prop';

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
