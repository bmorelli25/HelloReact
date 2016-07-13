//uppercase for react components
var Greeter = React.createClass({ //one argument: options object, only thing that is required is a render method
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message.'
    };
  },
  onButtonClick: function (e) { // event handler gets passed event object 'e'
    e.preventDefault(); //prevent the form from causing a page refresh

    var name = this.refs.name.value;
    alert(name);
  },
  render: function(){ //expects jsx code to be returned
    var name = this.props.name;
    var message = this.props.message;

    return ( //can only return ONE root element. That is why we have this div
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
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
