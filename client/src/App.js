import React, { Component } from 'react';
import Currency from './components/currency'
import './assets/css/App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Currency currency = {'dolar'} />
        <Currency currency = {'euro'} />
        <Currency currency = {'real'} />
        <p>{}</p>
      </div>
    );
  }
}
export default App;
