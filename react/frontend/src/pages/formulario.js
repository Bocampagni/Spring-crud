import React, { Component } from 'react'


export default class Formulario extends Component{

    constructor(props){
        super(props);

        this.stateInitial = {
            nome: '',
            livro: '',
            preco: ''
        }

        this.state = this.stateInitial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({

            [name] : value
        })

    }
    submitForm = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInitial);
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}
                        />

                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                </div>
                <button className = 'waves-effect waves-light btn' onClick={this.submitForm} type="button">Salvar
                </button>
            </form>

        )

    }
}