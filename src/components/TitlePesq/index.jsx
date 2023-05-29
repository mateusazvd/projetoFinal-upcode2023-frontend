import React, { useContext } from 'react'
import './style.css'
import Title from '../Title'
import { FormContext } from '../../Context/formPesquisaContext';

export default function TitlePesq() {
  const { setDataFinal, setDataInicio, categoria, produtos, setProdutos,setNomePesquisa,nomePesquisa } = useContext(FormContext);

  return (
        <div className='tituloDaPesquisa' >
          <Title
            className="titleInput"
            titulo="Titulo da pesquisa"
            descricao="Digite o título de sua pesquisa"
          />

          <input type="text" 
          className='inputDaPesquisa' 
          placeholder='Digite o nome de sua pesquisa'
          value={nomePesquisa}
          onChange={(e)=> setNomePesquisa(e.target.value)} />
        </div>
  )
}
