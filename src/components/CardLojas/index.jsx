import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext'
import './style.css'
import LojasList from '../../moks/lojas.json'
  
export default function  CardLojas({nome, id}) {
  const {lojas,setLojas} = useContext(FormContext)

  const [checked, setChecked] =useState(false)

  useEffect(()=>{
    VerificarSeExiste()
  },[])

  
  //precisa retornar se a loja do card existe ou não no form
  function VerificarSeExiste(){
    if(lojas.includes(id)){
      setChecked(true)
    }
  }
  /// remove item de um array função generica
  function removerItem(array, item) {
    const index = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  function AdicionaLojaNoForm(){
    setChecked(!checked)
    if(!checked){
      LojasList = [id,...lojas]
      setLojas(LojasList)
    }
    else{
      removerItem(lojas,id)
      LojasList = [...lojas]
      setLojas(LojasList)
    }
  }
  return (
    <div className='containerLoja' id={id}>
        <div className='loja' >
            <p className='nomeLoja'>{nome}</p>
            <input className='check' type="checkbox" name="" id=""  onClick={()=> AdicionaLojaNoForm()} checked = {checked}/>
            
        </div>
    </div>
  )
}
