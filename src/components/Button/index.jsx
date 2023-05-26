import React, { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext';
import './style.css'
import ListaProdutos from "../../moks/produtos.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Button({ setmain }) {

  const { setLojas, setProdutos, setCategoria, setDataInicio, setDataFinal} = useContext(FormContext)

  const {

    lojas,
    produtos,
    categoria,
    dataInicio,
    dataFinal,

  } = useContext(FormContext);



  function getProdutosPorID() {
    let newLista = produtos.map(item => ListaProdutos.filter(x => x.id === item)[0])

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

  function NotificacaoErro() {
    toast.error('Erro ao cadastrar a pesquisa', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  };

  function NotificacaoSucesso() {
    toast.success('Pesquisa enviada com sucesso', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  };

  function VoltarInicio() {
    NotificacaoSucesso()
    setTimeout(()=>{
      setmain(true)
      setLojas([])
      setProdutos([])
      setCategoria("")
      setDataInicio("")
      setDataFinal("")
    },2500)
  }


  function PostForm() {
    let newListaProduto = getProdutosPorID()
    let newLojas = lojas?.map(item => item.toString())
    let form = {
      "lojas": newLojas,
      "produtos": newListaProduto,
      "categoria": categoria,
      "dataInicio": formataDataIso(dataInicio),
      "dataFinal": formataDataIso(dataFinal)

    };


    fetch('https://api-aspnet-final-production.up.railway.app/api/pesquisa/cadastro', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(form)

    }).then(() => VoltarInicio()).catch(e => NotificacaoErro())
  
  }






  return (

    <div className='containerButton'>
      <button className='button' onClick={() => PostForm()}>Enviar</button>
      <ToastContainer />
    </div>
  )
}



