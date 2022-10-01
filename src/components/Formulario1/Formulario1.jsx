import React  from 'react';
import './Formulario1.scss' ;



export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Item Registrado com sucesso' );
      event.preventDefault();
    }
  
    render() {



        return (
<div>
<form action="#" method="post" onSubmit={this.handleSubmit}>
    <fieldset>
        <fieldset class="grupo">
        <div class="campo">
                <label for="nome" >Tamanho</label>
                <input type="text" id="nome" name="nome"   placeholder="4x3x2"/>
            </div> 
            {/* <div class="campo">
                <label for="snome">Quantidade</label>
                <input type="text" id="snome" name="snome"   placeholder="" />
            </div> */}
            <div class="campo">
                <label for="qtsaco">Quantidade de Sacos</label>
                <select name="qtsaco" id="qtsaco">
                    <option value="">--</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="30">30</option>
                </select>
            </div>
            
            <div class="campo">
                <label for="kg">Kg</label>
                <select name="kg" id="kg">
                    <option value="">--</option>
                    <option value="sacos de 3kg">sacos de 3kg</option>
                    <option value="sacos de 5kg">sacos de 5kg</option>
                    <option value="sacos de 10kg">sacos de 10kg</option>
                    <option value="sacos de 30kg">sacos de 30kg</option>
                </select>
            </div>
        </fieldset>
        {/* <div class="campo">
            <label>Sexo</label>
            <label>
                <input type="radio" name="sexo" value="masculino" /> Masculino
            </label>
            <label>
                <input type="radio" name="sexo" value="feminino" /> Feminino
            </label>
        </div> */}
        {/* <div class="campo">
            <label for="email">E-mail</label>
            <input type="text" id="email" name="email"  value="" />
        </div>
        <div class="campo">
            <label for="telefone">Telefone</label>
            <input type="text" id="telefone" name="telefone"  value="" />
        </div> */}

        <fieldset class="grupo">
            {/* <div class="campo">
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade"  value="" />
            </div> */}
            <div class="campo">
                <label for="estado">Tipo de Madeira</label>
                <select name="estado" id="estado">
                    <option value="">--</option>
                    <option value="PR">Pinus</option>
                </select>
            </div>
        </fieldset>

        {/* <div class="campo">
            <label for="mensagem">Mensagem</label>
            <textarea rows="6"  id="mensagem" name="mensagem"></textarea>
        </div> */}

        {/* <div class="campo">
            <label>Newsletter</label>
            <label>
                <input type="checkbox" name="newsletter" value="1" /> Gostaria de receber a Newsletter da empresa
            </label>
        </div> */}
        <h4>Disponibilidade:</h4>
        {/* <div class="campo">
                <label for="snome">Domingo</label>
                <input type="text" id="snome" name="snome"  value="" />
        </div> */}

        <div class="campo">
                <label for="domingo">Domingo</label>
                <select name="domingo" id="domingo">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="domingo">Segunda-feira</label>
                <select name="domingo" id="domingo">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="domingo">Terça-feira</label>
                <select name="domingo" id="domingo">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="domingo">Quarta-feira</label>
                <select name="domingo" id="domingo">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="domingo">Quinta-feira</label>
                <select name="domingo" id="domingo">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="domingo">Sexta-feira</label>
                <select name="domingo" id="domingo">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>
        <div class="campo">
                <label for="domingo">Sábado</label>
                <select name="domingo" id="domingo">
                    <option value="">--</option>
                    <option value="08h - 12h">08h - 12h</option>
                    <option value="09h - 12h">09h - 12h</option>
                    <option value="12h - 18h">12h - 18h</option>
                    <option value="13h - 18h">13h - 18h</option>
                    <option value="13h - 20h">13h - 20h</option>
                </select>
        </div>

        <button type="submit" name="submit">Enviar</button>
    </fieldset>
</form>
</div>
        );

}
}