import React from 'react'
import './style.css'

export default function CardLojas({nome, id, }) {
  return (
    <div className='containerLoja' id={id}>
        <div className='loja' >
            <p className='nomeLoja'>{nome}</p>
            <input className='check' type="checkbox" name="" id="" />
        </div>
    </div>
  )
}
