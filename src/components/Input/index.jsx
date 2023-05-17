import React from 'react'
import './style.css'
import {AiOutlineSearch} from 'react-icons/ai'

export default function Input(props) {
  return (
    <div className='containerInput'>
        <input className='inputCampo' type="search" placeholder={props.placeholder}/>
        <AiOutlineSearch className='iconePesquisa'/>
    </div>
  )
}
