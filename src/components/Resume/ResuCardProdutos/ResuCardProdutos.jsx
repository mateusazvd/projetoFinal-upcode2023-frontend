import React, { useContext } from 'react'
import './ResuCardProdutos.css'
import {CiCircleRemove} from 'react-icons/ci'
import { FormContext } from '../../../Context/formPesquisaContext'
import todosProdutos from '../../../moks/produtos.json'

export default function ResuCardProdutos({idProdutos}) {
  const {produtos, setProdutos} = useContext(FormContext)

  function Filtrar() {
    let result = todosProdutos.filter(x => x.id == idProdutos)
    return result[0].nome
  }


  return (
    <div className='containerCardProdutos'>
        <p className='itemCardProdutos'>{idProdutos}</p>
        <CiCircleRemove  className='iconRemovePro'/>
    </div>
  )
}
