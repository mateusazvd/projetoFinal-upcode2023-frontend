import React from 'react'
import { useState } from 'react'
import BarChart from '../../Grafico'
import AnaliseResposta from '../AnaliseResposta'
import './style.css'

export default function Analise({respostasExibidas}) {
  const [respostas,setRespostas] = useState(true)

  function dados_filtrados(){
    
  }


  return (
    <div className='containerAnalise'>
        <div className='menu-dashboard'>
            <p className='areaResposta' onClick={()=> setRespostas(!respostas)}>Respostas</p>
            <p className='areaResposta' onClick={()=> setRespostas(!respostas)}>Análise</p>
        </div>

        <hr />  
        {respostas?respostasExibidas.map(item => <AnaliseResposta resposta = {item}/>):
        <div className='grafico-area'>
          <BarChart data={respostasExibidas}/>
        </div>
        }    
    </div>
  )
}
