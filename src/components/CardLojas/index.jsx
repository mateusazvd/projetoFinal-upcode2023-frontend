import React, { useState } from 'react'
import { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext'
import './style.css'
  
export default function CardLojas({nome, id, }) {
  const {Form,SetForm} = useContext(FormContext)

  


  return (
    <div className='containerLoja' id={id}>
        <div className='loja' >
            <p className='nomeLoja'>{nome}</p>
            <input className='check' type="checkbox" name="" id=""  checked={true}/>
        </div>
    </div>
  )
}
