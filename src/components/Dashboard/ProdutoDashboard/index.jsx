import React from 'react'
import './style.css'

export default function ProdutoDashboard({nome,pesquisa,setRespostasExibidas,id}) {

  function ajustarString(texto) {
    if (texto.length <= 30) {
      return texto;
    } else {
      return texto.slice(0, 27) + "...";
    }
  }


  //requisição de respostas
  async function pegar_respostas_por_produto() {
    fetch(`https://localhost:7254/api/resposta/dashboard/resposta/${pesquisa.id}/${id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => {
        if (response.ok && response.status !== 204) {
          return response.json();
        } else {
          throw new Error('Empty response or error occurred');
        }
      })
      .then((data) => {
        console.log(data);
        setRespostasExibidas([...data])
      })
      .catch((error) => {
        console.error(error);
        setRespostasExibidas([]); // Define a resposta como um array vazio em caso de erro
      });
  
    console.log(pesquisa);
  }
  
  return (
    <div className='containerProdutoDash' title={nome} onClick = {()=> pegar_respostas_por_produto()}>
     <p className='itemProduto'>{ajustarString(nome)}</p>
    </div>
  )
}
