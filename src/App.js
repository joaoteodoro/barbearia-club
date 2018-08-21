import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itens: [
        {
          nome: 'HOME',
          enable: true
        },
        {
          nome: 'SERVIÇOS',
          enable: false
        },
        {
          nome: 'GALERIA',
          enable: false
        },
        {
          nome: 'CONTATO',
          enable: false
        }
      ]
    }
  }

  handleClick = (event, target) => {
    console.log(event)
    console.log(target)
  }

  render() {
    return (
      <Menu itens={this.state.itens} handleClick={this.handleClick}/>
    );
  }
}

export default App;
