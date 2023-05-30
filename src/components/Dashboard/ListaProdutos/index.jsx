import React from 'react'
import ProdutoDashboard from '../ProdutoDashboard'
import './style.css'


export default function ListaProdutos({pesquisaSelecionada,setRespostasExibidas}) {
  return (
    <div className='containerListaPro'>
      {pesquisaSelecionada?.produtos?.map(item=><ProdutoDashboard 
      nome = {item.nome} 
      id = {item.id}
      pesquisa = {pesquisaSelecionada}
      setRespostasExibidas = {setRespostasExibidas}
      />)}
    </div>
  )
}
