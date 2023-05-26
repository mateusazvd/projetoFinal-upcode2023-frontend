import React from 'react'
import './style.css'
import {AiOutlineSearch} from 'react-icons/ai'

export default function InputNomeFiltro() {
  return (
    <div className='contaonerDataFiltro'>
        <input type="text" placeholder='Pesquise por nome' />
        <AiOutlineSearch />
    </div>
  )
}
