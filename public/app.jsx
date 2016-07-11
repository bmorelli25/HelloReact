//uppercase for react components
var Greeter = React.createClass({ //one argument: options object, only thing that is required is a render method
  render: function(){ //expects jsx code to be returned
    return (
      <div> //can only return ONE root element. That is why we have this div
        <h1>Hello React!</h1>
        <p>This is from the component.</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
