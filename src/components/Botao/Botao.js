import React, { Component }  from 'react';
import {useState} from 'react';
import "./Botao.css"
import PopUp from "../PopUp/PopUp";


export default class Botao extends React.Component {
  
  state={hidden: true};

  constructor() {
    super();
    this.abrir = this.abrir.bind(this);
    this.fechar = this.fechar.bind(this);
  }

  abrir() {
    this.setState({hidden: false});
  }

  fechar(param) {
    //param = {data, quantidade}
    this.setState({hidden: true});

    //so fecha o componente
    if(param.quantidade == 0)
      return;
    
    //realiza reserva
    //window.alert("data:<"+param.data+">\nquantidade: <"+param.quantidade+">");
  }

  render() {
      return (
        <div>
          <button onClick={this.abrir}>Reservar</button>

          {/*state.hidden define a instancia do popup*/}
          {this.state.hidden?"":<PopUp fechar={this.fechar}/>}
        </div>
      );
  }
}
