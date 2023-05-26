import React from 'react'
import './style.css'
import {AiOutlineSearch} from 'react-icons/ai'

export default function InputProdFiltro() {
  return (
    <div className='containerProdFiltro'>
        <input type="text" placeholder='Pesquisa por produto'/>
        <AiOutlineSearch />
    </div>
  )
}
