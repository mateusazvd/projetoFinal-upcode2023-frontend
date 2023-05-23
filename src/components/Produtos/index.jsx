import React, { useContext, useState } from 'react'
import { FormContext } from '../../Context/formPesquisaContext'
import './style.css'
import ProdutosList from '../../moks/produtos.json'

export default function Produtos({nome, id, descricao}) {
    const {Form,SetForm,produtos,setProdutos } = useContext(FormContext)
    const [texto,setTexto] = useState(false)
    const [checked,setChecked] = useState(false)

    function verMais(){
        return descricao
    }
    //função que limita texto 
    function limitarTexto(string, maxCaracteres) {
        if (string.length <= maxCaracteres) {
          return string;
        } else {
          return string.substring(0, maxCaracteres) + "...";
        }
    }

    function RemoverItem(array,item){
        const index =  array?.indexOf(item)
        if(index > -1){
            array.splice(index, 1)
        }
    }
    
    function AdicionarProdForm() {
        setChecked(!checked)
        if(!checked){
            ProdutosList = [id,...produtos]
            setProdutos(ProdutosList)
        }else {
            RemoverItem(produtos,id)
           setProdutos([...produtos])
        }
    }

    return (
        <div className='containerProdutosCom' id={id}>
            <div className='produto'>
                <p className='nomeProduto'>{nome}</p>
                <p title={descricao} className='descricaoProduto' onClick={()=> setTexto(!texto)}>{texto?verMais():limitarTexto(descricao,80)}</p>
            </div>
            <input className='check' type="checkbox" onClick={() => AdicionarProdForm()} />
        </div>
    )
}
