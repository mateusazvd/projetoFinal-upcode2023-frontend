import React, { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext';
import './style.css'
import ListaProdutos from "../../moks/produtos.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Button() {
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

  //Flash alert para caso não preencha lojas
  function erroLojaVazia() {
    toast.warning('Preencha corretamente as lojas', {
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

  //Flash alert para caso não preencha corretamente produtos
  function erroProdutosVazia() {
    toast.warning('Preencha corretamente os produtos', {
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

  //caso não preencha corretamente as categorias
  function erroCategoriasVazia() {
    toast.warning('Preencha corretamente as categorias', {
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
  //caso não preencha corretamente os periodos
  function NotificacaoPeriodo() {
    toast.warning('Preencha corretamente o período', {
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
    toast.success('Preechido com sucesso', {
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



    if (lojas.length === 0) {
      return erroLojaVazia();
    }
    else if (categoria == 0) {
      return erroCategoriasVazia()
    }
    else if (dataInicio == 0 || dataFinal == 0) {
      return NotificacaoPeriodo()
    }
    else if(dataFinal < dataInicio){  
      return NotificacaoPeriodo()
    }
    else if (produtos.length == 0) {
      return erroProdutosVazia()
    }
    else {
      NotificacaoSucesso()
      fetch('https://api-aspnet-final-production.up.railway.app/api/pesquisa/cadastro', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form)

      }).then(() => console.log(form, 'Cadastrado com sucesso')).catch(e => console.log(e, "erro amigao"))
    }


  }

  return (
    <div className='containerButton'>
      <button className='button' onClick={() => PostForm()}>Enviar</button>
      <ToastContainer />
    </div>
  )
}



