import React from 'react'
import './style.css'
import Title from '../../Title'
import InputNomeFiltro from '../InputNomeFiltro'

export default function Filtros() {
  return (
    <div className='containerFiltros'>
        <Title titulo='Filtros'/>
        <InputNomeFiltro /> 
    </div>
  )
}
