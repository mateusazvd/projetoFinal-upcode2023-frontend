import React, { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext';
import './style.css'

export default function DropDown() {
  const { setCategoria } = useContext(FormContext);


  const handleDropDownChange = (event) => {
    const newValue = event.target.value;
    setCategoria(newValue)
  };

  return (
    <div className='containerDropDown'>
      <select className='dropDown' onChange={handleDropDownChange}>
        <option className='itemDropDown' value=""></option>
        <option className='itemDropDown' value="RX Marca">RX Marca</option>
        <option className='itemDropDown' value="RX Genérico">RX Generico</option>
        <option className='itemDropDown' value="OTC">OTC</option>
        <option className='itemDropDown' value="Marca Própria">Marca Propria</option>
      </select>
    </div>
  )
}
// promocional : rx marca rx generico
// pague leve : otc e marca propria 