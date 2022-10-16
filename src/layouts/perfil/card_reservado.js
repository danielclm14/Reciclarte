
import React, { Component }  from 'react';
import style from "./perfil.scss"


import { useLocation, NavLink } from "react-router-dom";
import madeiras from '../../dados_itens';
import usuarios from '../../dados_artesaos';
import reservas from '../../reservas';


export default class CardReserva extends React.Component {

    //img
    //qntd
    //name
    //descr
    
    render() {

        const func = ()=> {
            new reservas().remover(this.props.id, 0);
        }

        return (<div className='item_reservado'>
        < NavLink to={{'pathname': '/itens'}}   
            state={this.props.id}       
            key={null}
            style={{width: '100%'}}>
                <div className='representacao'>
                    <img src={this.props.img}/>
                    <div>
                        <h1>{this.props.name}</h1>
                        <h2>{this.props.descr}</h2>
                        <h3>quantidade: {this.props.qntd}</h3>
                    </div>
                </div>
            <button onClick={func} title="remover reserva">╳</button>
            </NavLink>
        </div>);
    }
};