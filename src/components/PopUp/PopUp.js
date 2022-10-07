import React, { Component }  from 'react';

export default class PopUp extends React.Component {
  state = {
    data: '',
    value: 0,
    warn1: '.',
    warn2: '.',
    sel_popup: true,
  }

  constructor() {
    super();
    
    this.fechar = this.fechar.bind(this);
    this.submeter = this.submeter.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateInputValue = this.atualizar_data.bind(this);
  }
  
  get value() {
    return this.state.value;
  }

  get data() {
    return this.state.data;
  }

  validar() {

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

    this.setState({warn1: '.'});

    // QUANTIDADE NULA
    if(Number(this.value) === 0) {
      this.setState({warn2: '*a quantidade não pode ser nula'});
      return;
    }


    return true;
  }

  atualizar_data(evt) {
    const val = evt.target.value;
    this.setState({data: val});
  }

  submeter() {
    
    if(this.validar()) {
      // COMUNICA COM O BACK
      // ABRE O CODIGO DE RESERVA
      this.setState({sel_popup:false});
    }
     
  }

  fechar() {
    let retorno = {data: this.data, quantidade: -1,}
    this.props.fechar(retorno);
  }

  increment() {

    if(this.value === 0)
      this.setState({warn2: '.'});

    if (this.value >= 100)
      return;

    this.setState({ value: this.value + 1 });
  }

  decrement() {    
    if (this.value <= 0) return;
    this.setState({ value: this.value - 1 });
  }

  //  SELECIONA DATA E QUANTIDADE
  pop1() {

    // STYLES
      var styles_box = {
      position:'relative',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'flex-start',
      'flex-direction': 'column',
      'font-weight': '500',
      'font-size': '15px',
      color: 'black',
      
      width: '320px',
      'border-radius': '7px',
      'background-color': 'rgba(248, 249, 250, 1)',
      padding: '30px',
      }; var styles_input = {
      'background-color': 'white',
      border: '2px black solid',
      'border-radius': '5px',
      'font-size': '15px',  
      width: '150px',
      height: '25px',
      padding: '0px',
      }; var styles_btn = {
        'background-color': 'rgba(76, 175, 80, 1)',
        color: 'white',
        border: 'none',
        'margin-top': '20px',
      
        'font-size': '15px',
        'font-weight': '500',
        width: '100%',
        height: '50px',
        
      }; var style_fechar =  {
        'background-color': 'brown',
        color: 'white',
        border: 'none',
        position: 'relative',
      
        top: '-20px',
        right: '-132px',
      
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

    return <div style={styles_box}>
    <div style={{position: 'absolute'}}> <button onClick={this.fechar} style={style_fechar}>⨉</button> </div>
      Escolha a data
      <input
          type="date"
          onChange={evt => this.atualizar_data(evt)}
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
      <span style={{color:"red", fontSize:"10px"}}>
        {this.state.warn2}
      </span>
      {/*<br/>*/}
      <button style={styles_btn} onClick={this.submeter}>Reservar</button>
      {/*<BotaoCodigo />*/}
  </div>;
  }

  //  EXIBE CODIGO DE RESERVA
  pop2() {

    // STYLES
      var styles_box = {
        position:'relative',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'flex-start',
        'flex-direction': 'column',
        'font-weight': '500',
        'font-size': '15px',
        color: 'black',
        
        width: '320px',
        'border-radius': '7px',
        'background-color': 'rgba(248, 249, 250, 1)',
        padding: '30px',
      }; var styles_btn = {
          'background-color': 'rgba(76, 175, 80, 1)',
          color: 'white',
          border: 'none',
          'margin-top': '20px',
        
          'font-size': '15px',
          'font-weight': '500',
          width: '100%',
          height: '50px',
          
      }; var style_fechar =  {
          'background-color': 'brown',
          color: 'white',
          border: 'none',
          position: 'relative',
        
          top: '-20px',
          right: '-132px',
        
          'font-size': '15px',
          'font-weight': '500',
          
          width: '25px',
          height: '25px',
        
          padding: "0px",
          'border-radius': '5px',
      };
    //
  
    return (
        <div style={styles_box}>
          <div style={{position: 'absolute'}}> <button onClick={this.fechar} style={style_fechar}>⨉</button> </div>
            Código de Reserva
            <input 
                type="text"
                value="465654"
                style={{textAlign:"center"}}
             />
  
            <span style={{color:"red", fontSize:"10px"}}>
              {this.state.warn1}
            </span>
  
            <p>Informe seu código na retirada do produto</p>
            
            <span style={{color:"red", fontSize:"10px"}}>
              {this.state.warn2}
            </span>
            {/*<br/>*/}
            <button style={styles_btn} onClick={this.fechar}>OK</button>
        </div>
      );
    }
  
  render() {

  // STYLES
        var styles_bkg = {
            'background-color': 'rgba(0, 0, 0, 0.5)',
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            left:'0px',
            top: '0px',
          
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
        }; var styles_box = {
          position:'relative',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'flex-start',
          'flex-direction': 'column',
          'font-weight': '500',
          'font-size': '15px',
          color: 'black',
          
          width: '320px',
          'border-radius': '7px',
          'background-color': 'rgba(248, 249, 250, 1)',
          padding: '30px',
        }; var styles_input = {
          'background-color': 'white',
          border: '2px black solid',
          'border-radius': '5px',
          'font-size': '15px',  
          width: '150px',
          height: '25px',
          padding: '0px',
        }; var styles_btn = {
            'background-color': 'rgba(76, 175, 80, 1)',
            color: 'white',
            border: 'none',
            'margin-top': '20px',
          
            'font-size': '15px',
            'font-weight': '500',
            width: '100%',
            height: '50px',
            
        }; var style_fechar =  {
            'background-color': 'brown',
            color: 'white',
            border: 'none',
            position: 'relative',
          
            top: '-20px',
            right: '-132px',
          
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
          {(this.state.sel_popup?this.pop1():this.pop2())}
      </div>
    );
  }
}