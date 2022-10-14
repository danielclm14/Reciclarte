import React  from 'react';
import './Formulario1.scss' ;

import madeiras from '../../dados_itens'
import { array } from 'prop-types';
import { number } from 'prop-types';

let disponibilidade = new Array(42);

export default class NameForm extends React.Component {

    state= {
        img:   null,
        name:  null,
        descr: null,
        local: null,
        src:   null,
        qntd:  null,
        tipo:  null,
        size:  null,
        disp: null,
    }

    constructor(props) {
      super(props);

        for(var i = 0; i < 42; i++)
            disponibilidade[i] = false;
        

      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.funcao = this.atualizarImagem.bind(this);
    }

    onChange(e) {

        if (e.target.id === 'name') {
            this.setState({ name: e.target.value });
        } else if (e.target.id === 'descr') {
            this.setState({ descr: e.target.value });
        } else if (e.target.id === 'img') {
            this.setState({img: URL.createObjectURL(e.target.files[0])});
        } else if (e.target.id === 'local') {
            this.setState({ local: e.target.value});
        } else if (e.target.id === 'src') {
            this.setState({ src: e.target.value});
        }else if (e.target.id === 'qntd') {
            this.setState({ qntd: e.target.value});
        }else if (e.target.id === 'tipo') {
            this.setState({ tipo: e.target.value});
        }else if (e.target.id === 'size') {
            this.setState({ size: e.target.value});
        }
    }
    
    handleSubmit(event) {

        var param = {
            id:    madeiras.length,
            img:   this.state.img,
            name:  this.state.name,
            descr: this.state.descr,
            local: this.state.local,
            src:   this.state.src,
            qntd:  this.state.qntd,
            size:  this.state.size,
            tipo:  this.state.tipo,
            disp:  this.state.disp,
        }

        if(param.name == null) {
            window.alert('insira um nome');
        } else if(param.descr == null) {
            window.alert('insira uma descrição');
        } else if(param.img == null) {
            window.alert('insira uma imagem');
        } else if(param.local == null) {
            window.alert('insira o local de coleta');
        } else if(param.src == null) {
            window.alert('insira o nome da instituição');
        } else if(param.size == null) {
            window.alert('insira as dimensões aproximadas da madeira');
        } else if(param.qntd == null) {
            window.alert('insira a quantidade disponível');
        } else {
            let todoFalso = true;
            for(var i = 0; i < 42; i++)
                if(disponibilidade[i])
                    todoFalso = false;
            
            if (todoFalso) {
                window.alert('marque pelo menos um dia e horário para a coleta');
            } else {
                window.alert(`<${param.qntd}> sacos de <${param.name}> adicionados com sucesso!`);
                madeiras.push(param);
            }
        }
    }    

    atualizarImagem (event) {
        this.setState({img: URL.createObjectURL(event.target.files[0])});
    };

    radios (param, index) {

        const marcar = (event) => {
            let indx = parseInt(index)*6 + parseInt(event.target.id);
            disponibilidade[indx] = event.target.checked;
            this.setState({disp: disponibilidade});

            //alert('deu change no: <' + indx + ' - ' + event.target.checked + '>');
        };


        return(<div className='radios'>
            <h1>{param}</h1>
            <div className='checkboxes'>
                <input type="checkbox" id='0' onChange={marcar}/>
                <input type="checkbox" id='1' onChange={marcar}/>
                <input type="checkbox" id='2' onChange={marcar}/>
                <input type="checkbox" id='3' onChange={marcar}/>
                <input type="checkbox" id='4' onChange={marcar}/>
                <input type="checkbox" id='5' onChange={marcar}/>
            </div>
        </div>);
    };

 
    render() {
        
        const cancelar = () => {
            this.setState({img: null});
        }

        return (<div className='fomulario'>      
                    <div className='topbar_'>
                        <div className='nome-descr'>
                            <div>
                                nome
                                <input id='name' type='text' placeholder='madeira de pinus' onChange={this.onChange}/>
                            </div>
                            <div>
                                descrição
                                <input id="descr" type='text' placeholder='sobras de corte' onChange={this.onChange}/>
                                {/*<textarea placeholder='sobras de corte'/>*/}
                            </div>
                            <div>
                                localização
                                <input id="local" type='text' placeholder='Av. Ipiranga, Recife-PE' onChange={this.onChange}/>
                            </div>
                            <div>
                                nome do comércio
                                <input id="src" type='text' placeholder='Madeira Dois Irmãos' onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className='image'>
                            {
                                (this.state.img == null?
                                    <input id="img" type='file' accept="image/*" onChange={this.onChange} />:
                                    (<div>
                                        <img src={this.state.img} alt='imagem de apresentação'/>
                                        <button onClick={cancelar}>X</button>
                                    </div>))
                            }
                        </div>
                    </div>
                    
                    <div className='middlebar'>
                        <div>
                            tipo de madeira
                            <select id="tipo" onChange={this.onChange}>
                                <option value={null}> </option>
                                <option value="eucalípto">eucalípto</option>
                                <option value="pinus">pinus</option>
                                <option value="mdf">mdf</option>
                            </select>
                        </div>
                        <div>
                            dimensões
                            <input id="size" type='text' placeholder='3x4x5' onChange={this.onChange}/>
                        </div>
                        <div>
                            quantidade
                            <input id="qntd" type='number' min={1} max={200} placeholder='5 sacos' onChange={this.onChange}/>
                        </div> 
                    </div>
                    <div className='bottombar'>
                        disponibilidade
                        
                        <div className='horarios'>
                        <h1></h1>
                                <span>8h</span>
                                <span>10h</span>
                                <span>12h</span>
                                <span>14h</span>
                                <span>16h</span>
                                <span>18h</span>
                        </div>
                        
                        {this.radios('domingo',       0)}
                        {this.radios('segunda-feira', 1)}
                        {this.radios('terça-feira',   2)}
                        {this.radios('quarta-feira',  3)}
                        {this.radios('quinta-feira',  4)}
                        {this.radios('sexta-feira',   5)}
                        {this.radios('sábado',        6)}
                        
                    </div>

                    <div><button onClick={this.handleSubmit}>submeter</button></div>
                </div>);
    }
}