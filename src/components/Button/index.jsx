import React, { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext';
import './style.css'

export default function Button() {
  const {
    Form,
    SetForm,
    lojas,
    setLojas,
    produtos,
    categoria,
    dataInicio,
    dataFinal,
    setProdutos,
    setCategoria,
    setDataFinal,
    setDataInicio
  } = useContext(FormContext);

  function PostForm() {
    alert("mandou o formulario")
  }


  return (
    <div className='containerButton'>
      <button className='button' onClick={() => PostForm()}>Enviar</button>
    </div>
  )
}
