import React, { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext';
import './style.css'

export default function DropDown() {
  const { Form, SetForm } = useContext(FormContext);
 

  const handleDropDownChange = (event) => {
    const newValue = event.target.value;
    Form.categoria = newValue
    SetForm(Form)
    console.log(Form.categoria);
  };

  return (
    <div className='containerDropDown'>
      <select className='dropDown'  onChange={handleDropDownChange}>
        <option className='itemDropDown' value="rx">RX</option>
        <option className='itemDropDown' value="infantil">INFANTIL</option>
        <option className='itemDropDown' value="genericos">GENERICOS</option>
        <option className='itemDropDown' value="hb">HB</option>
        <option className='itemDropDown' value="marcapropria">MARCA PROPRIA</option>
      </select>
    </div>
  )

}
