import React from 'react'
import './ResuCardProdutos.css'
import {CiCircleRemove} from 'react-icons/ci'

export default function ResuCardProdutos() {
  return (
    <div className='containerCardProdutos'>
        <p className='itemCardProdutos'>Produtos</p>
        <CiCircleRemove  className='iconRemovePro'/>
    </div>
  )
}
