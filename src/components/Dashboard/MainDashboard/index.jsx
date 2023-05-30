import React from 'react'
import { useState } from 'react'
import Analise from '../Analise'
import Filtros from '../FIltros'
import ListaProdutos from '../ListaProdutos'
import PesqEnviadas from '../PesquisasEnviadas'
import './style.css'

export default function Dashboard() {

  const [pesquisaSelecionada,SetPesquisaSelecionada] = useState()
  const [respostasExibidas,setRespostasExibidas] = useState([])

  return (
    <div className='containerMainDashboard' >
      <div className='containerLeft'>
        <Filtros />
        <PesqEnviadas SetPesquisaSelecionada = {SetPesquisaSelecionada} />
      </div>
      <div className='container-produtos-respostas'>
        <ListaProdutos pesquisaSelecionada = {pesquisaSelecionada} setRespostasExibidas = {setRespostasExibidas} />
        <Analise respostasExibidas = {respostasExibidas}/>
      </div>
    </div>
  )
}
