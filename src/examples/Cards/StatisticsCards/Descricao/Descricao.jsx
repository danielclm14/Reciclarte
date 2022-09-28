import React from "react"
import "./Descricao.scss"

// eslint-disable-next-line import/no-anonymous-default-export
export default props  => 
    <div className="caixaFora1"> 
    <div className="caixa1">
        <div className='imagem1'>
        <img src= {props.imagem}  />
        </div>
    
        <div className="descricao1">
            <h1 className='tituloMadereira1'> {props.titulo}</h1>
            <div className='3infos1'>            
                <h2 className='endereço1'>{props.endereco}</h2>
                <h2 className="tipoMadeira1">{props.tipo}</h2>
                <h2 className='comprimentoMadeira1'>{props.comprimento}</h2>
            </div>
            <div className="perguntas1">
                <h3 >Qual a quantidade disponível? </h3>
                <p> 30 sacos de 3kg </p>
                <h3 >Quais os dias disponiveis? </h3>
                <p>
                Domingo: - <br />
                Segunda-feira: 09:00 - 18:00   19:00 - 20:00<br />
                Terça-feira: 09:00 - 18:00<br />
                Quarta-feira: 09:00 - 18:00<br />
                Quinta-feira: 09:00 - 18:00<br />
                Sexta-feira: 09:00 - 18:00<br />
                Sábado: 09:00 - 12:00<br />
                </p>
            </div>
            <div className="botao">
            
            </div>
        </div>
    </div>
    </div>

