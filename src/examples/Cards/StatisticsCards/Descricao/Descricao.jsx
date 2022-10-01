import React from "react"
import style from "./Descricao.scss"
import Botao from "../../../../components/Botao/Botao"

// eslint-disable-next-line import/no-anonymous-default-export
export default props  => (<div className="corpo">
    
        <div className="topbar">
            <img src= {props.imagem}/>
            <div className='descr'>
                <h1 className='tituloMadereira1'> {props.titulo}</h1>           
                <h2 className='endereço1'>{props.endereco}</h2>
                <h2 className='tipoMadeira1'>{props.tipo}</h2>
                <h2 className='comprimentoMadeira1'>{props.comprimento}</h2> 
                <div className="btnReserva">
                    <Botao />   
                </div>       
            </div>
        </div>

        <div style={{width: '300px', padding:'10px 5px'}}>
            <div className="perguntas1">
                <h3 >Qual a quantidade disponível? </h3>
                <p> 30 sacos de 3kg </p>
                <h3 >Quais os dias disponiveis? </h3>
                <p> Domingo: - <br />
                    Segunda-feira: 09:00 - 18:00 | 19:00 - 20:00<br />
                    Terça-feira: 09:00 - 18:00<br />
                    Quarta-feira: 09:00 - 18:00<br />
                    Quinta-feira: 09:00 - 18:00<br />
                    Sexta-feira: 09:00 - 18:00<br />
                    Sábado: 09:00 - 12:00<br />
                </p>
            </div>
        </div>
</div>)

