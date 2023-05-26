import React from 'react'
import './style.css'
import Title from '../Title'

export default function TitlePesq() {
  return (
        <div className='tituloDaPesquisa' >
          <Title
            className="titleInput"
            titulo="Titulo da pesquisa"
            descricao="Digite o título de sua pesquisa"
          />

          <input type="text" className='inputDaPesquisa' placeholder='Digite o nome de sua pesquisa' />
        </div>
  )
}
