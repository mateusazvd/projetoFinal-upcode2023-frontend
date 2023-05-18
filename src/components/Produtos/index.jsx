import React, { useState } from 'react'
import './style.css'

export default function Produtos({nome, id, descricao}) {

    const [texto,setTexto] = useState(false)

    function verMais(){
        return descricao
    }
    //função que limita texto 
    function limitarTexto(string, maxCaracteres) {
        if (string.length <= maxCaracteres) {
          return string;
        } else {
          return string.substring(0, maxCaracteres) + "...";
        }
    }



    return (
        <div className='containerProdutosCom' id={id}>
            <div className='produto'>
                <p className='nomeProduto'>{nome}</p>
                <p title={descricao} className='descricaoProduto' onClick={()=> setTexto(!texto)}>{texto?verMais():limitarTexto(descricao,80)}</p>
            </div>
            <input className='check' type="checkbox" />
        </div>
    )
}
