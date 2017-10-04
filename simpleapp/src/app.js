import React = require('React');
import ReactDom = require('reat-dom');

//Component creation.
var App = React.createClass({
  render : function(){
    return (
      <div>
      <div id="header"></div>
      <div className="container"></div>
      <h1>I'm React</h1>
     </div>
    )
  }
});

ReactDom.render(<App />, document.getElementById('main'));
