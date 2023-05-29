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
<<<<<<< HEAD
    <div className='containerProdutoDash' title={nome}>
     <p className='itemProduto'>{ajustarString(nome)}</p>
=======
    <div className='containerProdutoDash'>
     <p className='itemProduto'></p>
>>>>>>> 601567cc06c59b60d09e5d667897e7942bd75f6b
    </div>
  )
}
