import React from 'react'
import './style.css'
import {AiOutlineSearch} from 'react-icons/ai'

export default function Input(props) {
  return (
    // tamanho da div está passando no componente Main
    <div className='containerInput' style={{width:`${props.tamanho}px`}}>
        <input className='inputCampoPesq' type="search" placeholder={props.placeholder }onChange={e => props.pesquisar(e.target.value)}
        
        />
        <AiOutlineSearch className='iconePesquisa'/>
    </div>
  )
}
