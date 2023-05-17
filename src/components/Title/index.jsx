import React from 'react'
import './style.css'

export default function Title({titulo, descricao}) {
  return (
    <div className='containerTitle'>
      <h1 className='titulo'>{titulo}</h1>
      <p className='descricao'>{descricao}</p>
    </div>
  )
}
