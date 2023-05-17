import React from 'react'
import Title from '../Title'
import InputPesq from '../InputPesq'
import InputDate from '../InputDate'
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
        <InputPesq placeholder='Pesquisar lojas' />
        <div className='ResultLojas'>
          <CardLojas />
          <CardLojas />
          <CardLojas />
          <CardLojas />
        </div>
      </div>

      <div className='containerCadeado'>
        <div className='containerMainPart'>
          <div className='formProduto'>
            <Title
              titulo='Categorias'
              descricao='Selecione sua categoria'
            />
          </div>

          <hr></hr>

          <div className='formData'>
            <Title
              titulo='Período'
              descricao='Determine o período da pesquisa'
            />
            <div className='inputs'>
              <InputDate />
              <InputDate />
            </div>
          </div>
        </div>
        <div>
          <Title 
            titulo='Produtos'
            descricao='Selecione o seu produto, abaixo:' 
            />
            <InputPesq />
        </div>
      </div>
    </div>
  )
}
