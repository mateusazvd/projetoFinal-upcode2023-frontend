import React from 'react'
import './style.css'
import Title from '../../Title'
import InputNomeFiltro from '../InputNomeFiltro'
import InputProdFiltro from '../InputProdFiltro'

export default function Filtros() {
  return (
    <div className='containerFiltros'>
        <Title titulo='Filtros'/>
        <InputNomeFiltro /> 
        <InputProdFiltro />
    </div>
  )
}
