import { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext'
import './style.css'
import LojasList from '../../moks/lojas.json'
import { useState } from 'react'
  
export default function CardLojas({nome, id }) {
  const {Form,SetForm} = useContext(FormContext)

  
  const [checked, setChecked] =useState(false)


  //precisa retornar se a loja do card existe ou não no form
  function VerificarSeExiste(){
    setChecked(Form.lojas.contains(id))
    setChecked(true)
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
      Form.lojas = [id,...Form.lojas]
      SetForm(Form)
    }
    else{
      removerItem(Form.lojas,id)
      setChecked(Form)
    }
    console.log(Form.lojas)
  }


  return (
    <div className='containerLoja' id={id}>
        <div className='loja' >
            <p className='nomeLoja'>{nome}</p>
            <input className='check' type="checkbox" name="" id="" onClick={()=> AdicionaLojaNoForm(!checked)} />
        </div>
    </div>
  )
}
