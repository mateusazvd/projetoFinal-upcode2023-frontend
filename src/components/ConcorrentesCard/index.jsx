import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext'
import './style.css'
import LojasList from '../../moks/lojas.json'
  
export default function  ConcorrentesCard({nome, id}) {

    /// CONCORRENTES CARD
  const {concorrentes,setConcorrentes} = useContext(FormContext)

  const [checked, setChecked] = useState(false)

  useEffect(()=>{
    VerificarSeExiste()
  },[])

  
  //precisa retornar se a loja do card existe ou não no form
  function VerificarSeExiste(){
    if(concorrentes?.includes(nome)){
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
      let lista = [nome,...concorrentes]
      setConcorrentes(lista)
    }
    else{
      removerItem(concorrentes,id)
      LojasList = [...concorrentes]
      setConcorrentes(LojasList)
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
