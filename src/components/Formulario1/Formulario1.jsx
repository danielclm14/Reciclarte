import React  from 'react';
import './Formulario1.scss' ;

import madeiras from '../../dados_itens'

var aux = true;

export default class NameForm extends React.Component {

    state= {
        img: null,
    }

    constructor(props) {
      super(props);
      //this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.funcao = this.funcao.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    //window.alert("sasd");
        madeiras.push({
            id: 5,
            img: null,
            name: 'acabou de inserir',
            descr: 'new item',
            local: 'new item',
            src: 'new item',
            qntd: 'new item',
            tipo: 'new item',
        });



      alert('Item Registrado com sucesso' );
      event.preventDefault();
    }

    /*var loadFile = function(event) {
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    };*/

    funcao (event) {
        this.setState({img: URL.createObjectURL(event.target.files[0])});
    };

 
    render() {
        
        const submeter = () =>{
            var param = {
                id: madeiras.length,
                img: this.state.img,
                name: 'ripa de pinus',
                descr: 'em tamanhos irregulares',
                local: 'jaboatao dos guararapes',
                src: 'madereira forte',
                qntd: '30~50 pedaços por dia',
                tipo: 'pinus',
            }

            madeiras.push(param);
        }

        const cancelar = () => {
            this.setState({img: null});
        }

        return (<div className='fomulario'>
            <div className='topbar'>
                <div>
                    <div>
                        nome
                        <input type='text' placeholder='madeira de pinus'/>
                    </div>
                    <div>
                        descrição
                        <input type='text' placeholder='sobras de corte'/>
                        {/*<textarea placeholder='sobras de corte'/>*/}
                    </div>
                </div>
                <div className='image'>
                    {
                        (this.state.img == null?
                            <input type='file' onChange={event => this.funcao(event)} accept="image/*" name="image"/>:
                            (<div>
                                <img src={this.state.img} alt='imagem de apresentação'/>
                                <button onClick={cancelar}>X</button>
                            </div>))
                    }
                </div>
            </div>
            <div>dimensao</div>
            <div>quantidade</div>
            <div>disponibilidade</div>
            <div><button onClick={submeter}>submeter</button></div>
        </div>);
    }
}