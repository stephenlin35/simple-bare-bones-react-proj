require('bootstrap/dist/css/bootstrap.min.css');
require('./main.css');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends Component {
  render() {
    return(
      <div>
        <h1>Hello World!!! This is Randy Randelson</h1>
        <input type='button' value='This is a bootstrap button' className='btn btn-primary' />
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
