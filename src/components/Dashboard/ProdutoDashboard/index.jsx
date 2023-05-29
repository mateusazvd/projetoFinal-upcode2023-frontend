import React from 'react'
import './style.css'

export default function ProdutoDashboard({nome}) {

  function ajustarString(texto) {
    if (texto.length <= 30) {
      return texto;
    } else {
      return texto.slice(0, 27) + "...";
    }
  }
  return (
    <div className='containerProdutoDash' title={nome}>
     <p className='itemProduto'>{ajustarString(nome)}</p>
    </div>
  )
}
