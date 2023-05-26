import React from 'react'
import Filtros from '../FIltros'
import PesqEnviadas from '../PesquisasEnviadas'
import './style.css'

export default function Dashboard() {
  return (
    <div className='containerMainDashboard' >
      <div>
        <Filtros />
        <PesqEnviadas/>
    </div>
  )
}
