import React from 'react'
import './style.css'
import Title from '../Title'
import InputPesq from '../InputPesq'
import InputDate from '../InputDate'
import CardLojas from '../CardLojas'
import Produtos from '../Produtos'
import DropDown from '../DropDown'


export default function Main() {
  return (
    <div className='containerMain'>
      <div className='containerLojas'>
        <div className='lojasPesquisa' >
          <Title
            titulo="Lojas"
            descricao="Selecione as lojas que realizarão a pesquisa"
          />
          <InputPesq placeholder='Pesquisar lojas' />

        </div>
        <div className='resultLojas'>
          <CardLojas />
          <CardLojas />
          <CardLojas />
          <CardLojas />
          <CardLojas />
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
            <DropDown />
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
        <div className='containerProduto'>
          <Title
            titulo='Produtos'
            descricao='Selecione o seu produto, abaixo:'
          />
          {/* "tamanho" definição do tamnaho do componente InputPesq */}
          <InputPesq
            tamanho="500"
            placeholder='Pesquisar produtos'
          />
        </div>
        <div className='va'>
          {/* Input único de marcação */}
          <input type="radio" id='bucarTodos' value='check' />
          <label htmlFor="bucarTodos">Selecionar todos os produtos</label>
        </div>

        <div className='containerSelecProdutos'>
          <div className='listaProdutos'>
            <Produtos />
            <Produtos />
            <Produtos />
            <Produtos />
            <Produtos />
            <Produtos />
            <Produtos />
            <Produtos />
            <Produtos />
            <Produtos />
            <Produtos />
          </div>
        </div>
      </div>
    </div>
  )
}
