import React, { Component } from 'react';
import Main from './pages/main'

class App extends Component {
  //I cant fixe the this.props of table.
  
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Nico',
        livro: 'Java',
        preco: '10000'
      }
    ],
  };
  
  removeAutor = index => {
    const { autores } = this.state;
    
    this.setState(
      {
        autores :  autores.filter((autor, posAtual) => {
          
          return posAtual !== index;

        }),
      }
    );
  }
  
  render(){
    return (
      <div className="App">
        <Main autores = {this.state.autores} removeAutor = {this.removeAutor} />
      </div>
  );
  }
}

export default App;
