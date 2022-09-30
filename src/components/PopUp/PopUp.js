import React, { Component }  from 'react';



export default class PopUp extends React.Component {
  state = {
    data: '',
    value: 1,
    warn1: '.',
    warn2: '.',
  }

  constructor() {
    super();
    
    this.fechar = this.fechar.bind(this);
    this.submeter = this.submeter.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  
  get value() {
    return this.state.value;
  }

  get data() {
    return this.state.data;
  }

  updateInputValue(evt) {
    const val = evt.target.value;
    this.setState({data: val});
  }

  submeter() {

    // DATA VAZIA
    if(this.data === '') {
      this.setState({warn1: '*selecione a data da coleta'});
      return;
    }
       

    var dif = {
        dia: Number(this.data.substring(8, 10)) - new Date().getDate(),
        mes: Number(this.data.substring(5,  7)) - new Date().getMonth() - 1,
        ano: Number(this.data.substring(0,  4)) - new Date().getFullYear(),
    };
    
    //  DATA ANTERIOR
    if((/*ANO*/dif.ano < 0) || (/*MES*/ dif.ano === 0 & dif.mes < 0) || (/*DIA*/ dif.ano === 0 & dif.mes === 0 & dif.dia < 0)) {
      this.setState({warn1: ('*selecione uma data a partir do dia '+new Date().getDate()+'/'+(1+new Date().getMonth())+'/'+new Date().getFullYear())});
      return;
    }


    let retorno = {data:this.data, quantidade:this.value,}
    this.props.fechar(retorno);
  }

  fechar() {
    let retorno = {data: this.data, quantidade: 0,}
    this.props.fechar(retorno);
  }

  increment() {
    if (this.value >= 100) return;
    this.setState({ value: this.value + 1 });
  }

  decrement() {    
    if (this.value <= 1) return;
    this.setState({ value: this.value - 1 });
  }
  
  render() {

  // STYLES
        var styles_bkg = {
            'background-color': 'rgba(0, 0, 0, 0.425)',
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: '0px',
          
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
        }; var styles_box = {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'flex-direction': 'column',
          'font-weight': '500',
          'font-size': '15px',
          color: 'black',
          
          width: '350px',
          'border-radius': '20px',
          'background-color': 'azure',
          padding: '20px',
        }; var styles_input = {
          'background-color': 'white',
          border: '2px black solid',
          'border-radius': '5px',
          'font-size': '15px',  
          width: '150px',
          height: '25px',
          padding: '0px',
        }; var styles_btn = {
            'background-color': 'mediumseagreen',
            color: 'white',
            border: 'none',
            'margin-top': '20px',
          
            'font-size': '15px',
            'font-weight': '500',
            width: '100%',
            height: '50px',
          
            /*padding: 5px;*/
            'border-radius': '5px',
        }; var style_fechar =  {
            'background-color': 'brown',
            
            color: 'white',
            border: 'none',
            'margin-top': '20px',
            position: 'absolute',
          
            top: '-135px',
            left: '135px',
          
            'font-size': '15px',
            'font-weight': '500',
            
            width: '25px',
            height: '25px',
          
            padding: "0px",
            'border-radius': '5px',
        }; var input_number = {
          'background-color': 'white',
          border: '2px black solid',
          'border-radius': '5px',
          color: 'black',
        
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
          'align-items': 'center',
          gap: '18px',
        
          width: '80px',
        }; var input_number_button = {
          'background-color': 'transparent',
          'font-weight': '500',
          'font-size': '20px',
          color: 'black',
          border: 'none',
          padding: '0px',
          margin: '0px',
          height: '100%',
          width: '50px',
        
          'transition': '200ms all ease-in-out',
          '-webkit-transition': '200ms all ease-in-out',
          '-moz-transition': '200ms all ease-in-out',
          '-ms-transition': '200ms all ease-in-out',
          '-o-transition': '200ms all ease-in-out',
        }
    //

    return (      
      <div style={styles_bkg}>
      <div style={styles_box}>
        <div style={{position: 'absolute'}}> <button onClick={this.fechar} style={style_fechar}>⨉</button> </div>
          Escolha a data
          <input
              type="date"
              onChange={evt => this.updateInputValue(evt)}
              style={styles_input}
          />
          <span style={{color:"red", fontSize:"10px"}}>
            {this.state.warn1}
          </span>

          Quantidade de sacos
          
          <div style={input_number}>
            <button style={input_number_button} onClick={this.decrement}>&minus;</button>
            <span>{this.value}</span>
            <button style={input_number_button} onClick={this.increment}>&#43;</button>     
          </div>

          <br/>
          <button style={styles_btn} onClick={this.submeter}>Reservar</button>
      </div>
    </div>
    );
  }
}