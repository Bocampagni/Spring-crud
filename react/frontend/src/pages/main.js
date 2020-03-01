import React, {Component} from 'react';
import api from '../service/api';
import Table from './table';
import Tablehead from './Tablehead';



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
        const {autores, removeAutor} = this.props;

        return(
                <table>
                    <Tablehead />
                    <Table autores = {autores} removeAutor = { removeAutor } />
                </table>           

        );
    };
};