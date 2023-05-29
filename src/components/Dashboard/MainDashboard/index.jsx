import React from 'react'
import Analise from '../Analise'
import Filtros from '../FIltros'
import ListaProdutos from '../ListaProdutos'
import PesqEnviadas from '../PesquisasEnviadas'
import './style.css'

export default function Dashboard() {
  return (
    <div className='containerMainDashboard' >
      <div>
        <Filtros />
        <PesqEnviadas />
      </div>
      <div>
        <ListaProdutos />
        <Analise />
      </div>
    </div>
  )
}
