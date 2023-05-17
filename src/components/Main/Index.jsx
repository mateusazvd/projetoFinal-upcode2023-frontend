import React from 'react'
import Title from '../Title'
import Input from '../Input'
import './style.css'
import CardLojas from '../CardLojas'


export default function Main() {
  return (
    <div className='containerMain'>
      <div className='lojasPesquisa'>
        <Title 
          titulo="Lojas"
          descricao="Selecione as lojas que realizarão a pesquisa"
        />
        <Input placeholder='Pesquisar lojas'/>  
        <div className='ResultLojas'>
          <CardLojas /> 
          <CardLojas /> 
          <CardLojas /> 
          <CardLojas /> 
        </div>
      </div>

      <div className='formProduto'>
        <Title />
      </div>
    </div>
  )
}
