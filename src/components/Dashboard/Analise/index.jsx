import React from 'react'
import AnaliseResposta from '../AnaliseResposta'
import './style.css'

export default function Analise() {
  return (
    <div className='containerAnalise'>
        <div>
            <p className='areaResposta'>Respostas</p>
            <AnaliseResposta />

        </div>

        <hr />  
    </div>
  )
}
