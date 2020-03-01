import React, {Component} from 'react';


export default class Table extends Component{
    state = {
        autores: []
    }

    componentDidMount(){

        const {autores} = this.props;
        this.setState({ autores : autores});

    }

    

   render(){
    const {autores} = this.state;

    return(
        <div className = "table">
        {autores.map( linha => (
            <tbody>
                <tr>
                    <td>{linha.nome}</td>
                    <td>{linha.livro}</td>
                    <td>{linha.preco}</td>
                    <td><button>Remover</button></td>
                </tr>
            </tbody>
        ))}
        
        </div>
    )
   }

}