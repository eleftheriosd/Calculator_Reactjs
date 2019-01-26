import React, { Component } from 'react';
import reactDOM from 'react-dom';
import Calculator from './Components/Calculator';

export default class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    )
  }
}

reactDOM.render(
    <App />,
    document.getElementById('root'));

