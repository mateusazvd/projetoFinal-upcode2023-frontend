import React, { useContext, FormContext } from 'react'
import './style.css'
import { CiCircleRemove } from 'react-icons/ci'


export default function ResuCardConcorrente({nome}) {


  return (
    <div className='containerCardConcorrente'>
      <p className='itemCardConcorrente'>{nome}</p>
      <CiCircleRemove className='iconRemove' />
    </div>
  )
}
