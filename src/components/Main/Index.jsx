import React, { useEffect } from 'react'
import './style.css'
import Title from '../Title'
import InputPesq from '../InputPesq'
import InputDate from '../InputDate'
import CardLojas from '../CardLojas'
import Produtos from '../Produtos'
import DropDown from '../DropDown'
import ProdutosList from '../../moks/produtos.json'
import LojasList from '../../moks/lojas.json'
import { useState, useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext'
import TitlePesq from '../TitlePesq'
import ButtonNext from '../ButtonNext'
import concorrentesList from "../../moks/concorrentes.json"
import ConcorrentesCard from '../ConcorrentesCard'


export default function Main({ setMain }) {

  const { setDataFinal, setDataInicio, categoria, produtos, setProdutos,setNomePesquisa } = useContext(FormContext);
  const [pesquisa, setPesquisa] = useState('');
  const [lista, setLista] = useState(LojasList)
  const [pesquisaProduto, setPesquisaProduto] = useState('');
  const [listaProdutos, setListaProduto] = useState(ProdutosList)
  const [selectAlChecked, setSelectAllChecked] = useState(false)

  //estado de filiais e concorrentes
  const [filiais,setFiliais] = useState(true)

  function DeleteAll() {
    setProdutos([])
  }

  useEffect(() => {
    if (selectAlChecked) {
      let tempListaProdutosiD = listaProdutos.map(item => item.id)
      setProdutos([...tempListaProdutosiD]);
    }
    FiltrarProdutoPorCategoria(categoria)
  }, [categoria, selectAlChecked])

  function FiltrarProdutoPorCategoria(valor) {
    if (categoria?.length > 0) {
      let listaFiltrada = ProdutosList.filter(item => item.categoria == valor)
      setListaProduto([...listaFiltrada])
    }
    else {
      setListaProduto(ProdutosList)
    }
  }
  function PesquisarProdutos(text) {
    const produtosFilter = listaProdutos.filter(produto => produto.nome.toLowerCase().includes(pesquisaProduto.toLowerCase()));
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

    if (text.length === 0) {
      setLista(LojasList);
    }

  }
  function dataInicial(data) {
    setDataInicio(data)
  }
  function dataFinal(data) {
    setDataFinal(data)

  }

  return (
    <>
      <div className='containerMain'>
        <div className='containerCadeadoPri'>
          <div>
            <TitlePesq />
          </div>
          <div className='containerLojas'>
            <div className='lojasPesquisa' >
              <div className='selectLojasContainer'>
                <div className='title-lojas'>
                  <h1 className='title-lojas'
                   onClick={()=>setFiliais(true)}>Filiais</h1>
                </div>
                <div className='title-lojas'>
                <h1 className='title-lojas'
                onClick={()=>setFiliais(false)}>Concorrentes</h1>
                </div>
              </div>
              <p className='description'>
                {filiais?"Selecione as filiais que farão a pesquisa":"Selecione as concorrentes em que a pesquisa será feita"}
              </p>
              <InputPesq
                className="inputPesq"
                placeholder='Pesquisar lojas'
                value={pesquisa}
                pesquisar={PesquisarLoja}
              />
            </div>
          </div>
          <>
            {filiais?<div className='resultLojas'>
              {lista.length > 0 ? lista.map(item => <CardLojas key={item.codigo} nome={item.nomeFilial} id={item.codigo} />) : "Loja não encontrada."}
            </div>:<div className='resultLojas'>
              {concorrentesList.length > 0 ? concorrentesList.map(item => <ConcorrentesCard key={item.codigo} nome={item.nome} id={item.codigo} />) : "Loja não encontrada."}
            </div>}
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
                <div>
                  <p className='periodo'>início</p>
                  <InputDate mudarData={dataInicial} />
                </div>
                <div>
                  <p className='periodo'>fim</p>
                  <InputDate mudarData={dataFinal} />
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
              value={pesquisaProduto}
              pesquisar={PesquisarProdutos}
            />
          </div>
          <div className='containerCheckRemoveList'>
            <div>
              {/* Input único de marcação */}
              <input type="checkbox"
                id='bucarTodos'
                value='check'
                onClick={() => setSelectAllChecked(!selectAlChecked)} />
              <span htmlFor="bucarTodos" className='input-selecionar-todos'>Selecionar todos os produtos</span>

            </div>

            <div className='containerRemove'>
              <button className='textoRemove' onClick={() => DeleteAll()}>Remover todos</button>

            </div>

          </div>
          <div className='containerSelecProdutos'>
            <div className='listaProdutos'>
              {listaProdutos.length > 0 ? listaProdutos.map(item => <Produtos key={item.id} descricao={item.descricao} nome={item.nome} id={item.id} />) : "Produto não encontrado."}
            </div>

            <div className='div-btn'>
              <ButtonNext setMain={setMain} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}