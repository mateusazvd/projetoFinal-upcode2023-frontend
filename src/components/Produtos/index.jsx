import React from 'react'
import './style.css'

export default function Produtos() {
    return (
        <div className='containerProdutosCom'>
            <div className='produto'>
                <p className='nomeProduto'>Produto</p>
                <p className='descricaoProduto'>Analgésico, 500mg, 10 comprimidos</p>
            </div>
            <input className='check' type="checkbox" />
        </div>
    )
}
