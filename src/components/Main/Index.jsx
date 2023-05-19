import React from 'react'
import './style.css'
import Title from '../Title'
import InputPesq from '../InputPesq'
import InputDate from '../InputDate'
import CardLojas from '../CardLojas'
import Produtos from '../Produtos'
import DropDown from '../DropDown'
import ProdutosList from '../../moks/produtos.json'
import LojasList from '../../moks/lojas.json'
import { useState } from 'react'

export default function Main() {
  const [pesquisa, setPesquisa] = useState('');
  const [lista, setLista] = useState(LojasList)



  function Pesquisar(text) {
    const lojasFiltradas = LojasList.filter(item => item.nomeFilial.includes(text))
    setLista(lojasFiltradas)
    setPesquisa(text)
    alert(lojasFiltradas[0]);
  }

  return (
    <div className='containerMain'>
      <div className='containerLojas'>
        <div className='lojasPesquisa' >
          <Title
            className="titleInput"
            titulo="Lojas"
            descricao="Selecione as lojas que realizarão a pesquisa"
          />
          <InputPesq
            className="inputPesq"
            placeholder='Pesquisar lojas'
            value={pesquisa}
            onChange={e => Pesquisar(e.target.value)}
          />
        </div>

        <div className='resultLojas'>
          {/* {LojasList.map(item => <CardLojas Key={item.id} nome={item.nomeFilial} />)} */}
          {lista.map(item => <CardLojas key={item.id} nome={item.nomeFilial} />)}
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
              <div>
                <p className='descricaoInputDate'>inicio</p>
                <InputDate />
              </div>
              <div>
                <p className='descricaoInputDate'>fim</p>
                <InputDate />
              </div>
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
          <span htmlFor="bucarTodos" className='input-selecionar-todos'>Selecionar todos os produtos</span>
        </div>

        <div className='containerSelecProdutos'>
          <div className='listaProdutos'>
            {ProdutosList.map(item => <Produtos key={item.id} descricao={item.descricao} nome={item.nome} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
