import React, {Component} from 'react';

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key = {index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick = { () => {props.removeAutor(index) }}>Remover</button></td>
            </tr>

        )
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

export default TableBody; 