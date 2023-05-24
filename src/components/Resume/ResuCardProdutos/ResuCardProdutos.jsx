import React, { useContext } from 'react'
import './ResuCardProdutos.css'
import {CiCircleRemove} from 'react-icons/ci'
import { FormContext } from '../../../Context/formPesquisaContext'
import listProdutos from "../../../moks/produtos.json"
export default function ResuCardProdutos({idProdutos}) {

  const { produtos, setProdutos } = useContext(FormContext)

  function pegarProdutoPorCodigo(){
    let result = listProdutos.filter(item => item.id == idProdutos  )
    return result[0]
  }

  function removerItem(p, item) {
    const index = p.indexOf(item)
    if(index > -1){
      p.splice(index, 1)
    }
    setProdutos([...p])
  }

  return (
    <div className='containerCardProdutos'>
        <p className='itemCardProdutos'>{pegarProdutoPorCodigo().nome}</p>
        <CiCircleRemove  className='iconRemovePro' onClick={() => removerItem(produtos,idProdutos)} />
    </div>
  )
}
