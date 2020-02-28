import React from 'react';
import Main from './pages/main'

function App() {

  const autores =  [
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
    }
  ];
  return (
    <div className="App">
      <Main autores = {autores} />
    </div>
  );
}

export default App;
