import React, { Component }  from 'react';

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
      alert('Item Registrado com sucesso: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Tamanho  
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Quantidade  
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
          Tipo de Madeira  
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="pinus">Pinus</option>
            <option value="carvalho">Carvalho</option>
            <option value="ipê">Ipê</option>
            <option value="peroba">Peroba</option>
          </select>
        </label>
        <label>
        
            <h3>Disponibilidade:</h3>
            <label>
            Domingo
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
            Segunda 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <label>
            Terça
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <label>
            Quarta 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <label>
            Quinta
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <label>
            Sexta
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <label>
            Sábado
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
}