import React, {Component} from 'react';
import api from '../service/api';
import Table from './table';



export default class Main extends Component{
    state = {
        login: null,
        avatar_url: null,
        name: null
    }

    componentDidMount(){
        this.loadinfo();
    }

    loadinfo = async() => {
        const response = await api.get();

        const{login, avatar_url, url, name} = response.data;

        this.setState({login: login, avatar_url: avatar_url, url: url, name: name})

    }

    render(){
        const {login, avatar_url, name} = this.state;
        const {autores} = this.props;

        return(
            <div className = "main">
                <article>
                    <img alt={name} src={avatar_url}></img>
                    <strong>{name}</strong>
                    <aside>{login}</aside>
                    <a href= {`https://github.com/${login}`} target = '_blank' >Acessar</a>
                </article>

                <table>
                    <thead>
                        <tr>Nome</tr>
                        <tr>Livro</tr>
                        <tr>Preco</tr>
                        <tr><button>Remover</button></tr>
                    </thead>
                    
                    <Table autores = {autores} />
                </table>

            </div>
            

        );
    };
};