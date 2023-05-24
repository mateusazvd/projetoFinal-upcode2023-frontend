import React, { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext';
import './style.css'
import ListaProdutos from "../../moks/produtos.json"

export default function Button() {
  const {
    Form,
    lojas,
    produtos,
    categoria,
    dataInicio,
    dataFinal,

  } = useContext(FormContext);

  

  function getProdutosPorID() {
    let newLista = produtos.map(item => ListaProdutos.filter(x => x.id == item)[0])

    // transforma o objeto nos padrõe da requisição
    let listaFinal = newLista.map(item => {
      let novo = {
        "id": item.id,
        "nome": item.nome,
        "categoria": item.categoria,
        "generico": item.descricao
      }
      return novo
    })

    return listaFinal
  }

  function formataDataIso(data) {
    if (data?.length > 0) {
      const partes = data.split('-');
      const dia = partes[2];
      const mes = partes[1];
      const ano = partes[0];
      const dataFormatada = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}T00:00:00.000Z`;
      return dataFormatada;
    }
    return ""
  }

  function PostForm() {
    let newListaProduto = getProdutosPorID()
    let newLojas = lojas?.map(item=> item.toString())
    let form = {
      "lojas": newLojas,
      "produtos": newListaProduto,
      "categoria": categoria,
      "dataInicio": formataDataIso(dataInicio),
      "dataFinal": formataDataIso(dataFinal)
    }

    fetch('https://api-aspnet-final-production.up.railway.app/api/pesquisa/cadastro',{
      method:'POST',
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(form)

    }).then(()=> console.log(form,'Cadastrado com sucesso')).catch(e=> console.log(e,"erro amigao") )

  }

  return (
    <div className='containerButton'>
      <button className='button' onClick={() => PostForm()}>Enviar</button>
    </div>
  )
}
