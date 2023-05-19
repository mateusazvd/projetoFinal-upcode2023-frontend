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

  const [pesquisaProduto, setPesquisaProduto] = useState('');
  const [listaProdutos, setListaProduto] = useState(ProdutosList)


  function PesquisarProdutos(text) {
    const produtosFilter = ProdutosList.filter(produto =>produto.nome.toLowerCase().includes(pesquisaProduto.toLowerCase())) ;
    setListaProduto(produtosFilter)
    setPesquisaProduto(text)

    if (text.length == 0) {
      setListaProduto(ProdutosList)
    }

  }
  function PesquisarLoja(text) {
    const lojasFiltradas = LojasList.filter(item => item.nomeFilial.toLowerCase().includes(pesquisa.toLowerCase()));
    setLista(lojasFiltradas)
    setPesquisa(text)

    if (text.length == 0) {
      setLista(LojasList)
    }
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
            pesquisar={PesquisarLoja}

          />

        </div>
        <>
          <div className='resultLojas'>
            {lista.map(item => <CardLojas key={item.id} nome={item.nomeFilial} />)}
          </div>
        </>
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
            value={pesquisaProduto}
            pesquisar = {PesquisarProdutos}

          />
        </div>
        <div className='va'>
          {/* Input único de marcação */}
          <input type="radio" id='bucarTodos' value='check' />
          <span htmlFor="bucarTodos" className='input-selecionar-todos'>Selecionar todos os produtos</span>
        </div>

        <div className='containerSelecProdutos'>
          <div className='listaProdutos'>
            {listaProdutos.map(item => <Produtos key={item.id} descricao={item.descricao} nome={item.nome} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
