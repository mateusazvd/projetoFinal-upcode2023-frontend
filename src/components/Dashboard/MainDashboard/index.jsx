import React from 'react'
import { useState } from 'react'
import Analise from '../Analise'
import Filtros from '../FIltros'
import ListaProdutos from '../ListaProdutos'
import PesqEnviadas from '../PesquisasEnviadas'
import './style.css'

export default function Dashboard() {

  const [pesquisaSelecionada,SetPesquisaSelecionada] = useState()

  return (
    <div className='containerMainDashboard' >
      <div>
        <Filtros />
        <PesqEnviadas SetPesquisaSelecionada = {SetPesquisaSelecionada} />
      </div>
      <div>
        <ListaProdutos pesquisaSelecionada = {pesquisaSelecionada} />
        <Analise />
      </div>
    </div>
  )
}
