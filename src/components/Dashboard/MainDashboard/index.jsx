import React from 'react'
import Filtros from '../FIltros'
import ListaProduto from '../ListaProduto'

import './style.css'

export default function Dashboard() {
  return (
    <div className='containerMainDashboard' >
      <div>
        <Filtros />
      </div>
      <div>
        <ListaProduto />
      </div>
    </div>
  )
}
