import React from 'react'
import ProdutoDashboard from '../ProdutoDashboard'
import './style.css'


export default function ListaProdutos({pesquisaSelecionada}) {
  return (
    <div className='containerListaPro'>
      {pesquisaSelecionada?.produtos?.map(item=><ProdutoDashboard nome = {item.nome}/>)}
    </div>
  )
}
