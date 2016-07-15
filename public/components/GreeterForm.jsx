var React = require('react');

var GreeterForm = React.createClass({ //presentational component
  onFormSubmit: function (e) {
    e.preventDefault(); //prevent browser from refreshing

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    this.props.onNewData(updates); //gets passed onNewName function, then calls it with (name)
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="name" placeholder="Enter Name"/>
          </div>
          <div>
            <textarea ref="message" placeholder="Enter Message"></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = GreeterForm;
