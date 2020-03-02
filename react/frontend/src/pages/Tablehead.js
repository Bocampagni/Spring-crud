import React, {Component} from 'react';


export default class Tablehead extends Component{


    render(){
        return(
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Livro</th>
                    <th>Preço</th>
                </tr>
    </thead>
        )
    }
}