import React from "react";
import './CardItem.scss'


// eslint-disable-next-line import/no-anonymous-default-export
export default props  => 
    <div className="caixa">
        <div className='imagem'> 
        <img src= {props.imagem}  />
        </div>
        <div className="descricao">
            <h1 className='tituloMadereira'> {props.titulo}</h1>
            <div className='tipo_dist'>            
                <h2 className='tipoMadeira'>{props.tipo}</h2>
                <h2 className="ponto">.</h2>
                <h2 className='distanciaMadeira'>{props.distancia}</h2>
            </div>
            <h2 className='comprimentoMadeira'>{props.comprimento}</h2>
        </div>
    </div>
