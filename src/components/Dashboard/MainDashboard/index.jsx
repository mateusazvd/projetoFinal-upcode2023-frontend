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
      <div className='containerLeft'>
        <Filtros />
        <PesqEnviadas SetPesquisaSelecionada = {SetPesquisaSelecionada} />
      </div>
<<<<<<< HEAD
      <div>
        <ListaProdutos pesquisaSelecionada = {pesquisaSelecionada} />
=======
      <div className='containerRight'>
        <ListaProdutos />
>>>>>>> 601567cc06c59b60d09e5d667897e7942bd75f6b
        <Analise />
      </div>
    </div>
  )
}
