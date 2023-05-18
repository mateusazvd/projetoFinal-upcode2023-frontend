import React from 'react'
import './style.css'

export default function DropDown() {
  return (
    <div className='containerDropDown'>
        <select className='dropDown'>
            <option className='itemDropDown' value="rx">RX</option>
            <option className='itemDropDown' value="ifantil">INFANTIL</option>
            <option className='itemDropDown' value="genericos">GENERICOS</option>
            <option className='itemDropDown' value="hb">HB</option>
            <option className='itemDropDown' value="rx">MARCA PROPRIA</option>
        </select>
    </div>
  )
}
