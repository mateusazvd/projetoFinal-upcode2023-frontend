import React from 'react'
import { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import './style.css'
<RiArrowDropDownLine className='container--icon' />

export default function AnaliseResposta() {

  const [maisInformacoes,setMaisInformacoes] = useState(false)

  return (

   <div className='teste'>
     <div className='container-maior'  onClick={()=> setMaisInformacoes(!maisInformacoes)}>
      <div>
        <p>nomeee</p>
        <RiArrowDropDownLine className='container--icon' />
      </div>
      {
        maisInformacoes?<div className='maisInformacoes'>
        </div>:""
      }
      
    </div>
   </div>

  )
}
