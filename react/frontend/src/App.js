import React, { Component } from 'react';



function Abc(props){
  return(
    <h1>{props.name} </h1>
  )
};

function App() {
  return (
    <div className="App">
      <form action = "http://localhost:8080/produtos" method = "get">
        <label>Usuário</label>
        <input required ></input>
        <label>Senha</label>
        <input required type="password"></input>
        <input type = "submit" ></input>
      </form>

    </div>
  );
}

export default App;
