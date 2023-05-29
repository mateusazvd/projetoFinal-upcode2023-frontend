import React from 'react'
import './style.css'

export default function Title({ titulo, descricao, concorrentes}) {
  return (
    <div className='containerTitle'>
      <div>
        <h1 className='titulo'>{titulo}</h1>
        <p className='descricao'>{descricao}</p>
      </div>
      <p className='concorrente'>{concorrentes}</p>
    </div>
  )
}
