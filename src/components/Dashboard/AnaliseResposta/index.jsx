import React from 'react'
import { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import './style.css'
<RiArrowDropDownLine className='container--icon' />

export default function AnaliseResposta({precoRegular,precoAlternativo,resposta}) {

  const [maisInformacoes,setMaisInformacoes] = useState(false)

  return (

   <div className='teste'>
     <div className='container-maior'  onClick={()=> setMaisInformacoes(!maisInformacoes)}>
      <div>
        <p>FOR01-Fortaleza-CE#</p>
        <RiArrowDropDownLine className='container--icon' />
      </div>
      {
        maisInformacoes?<div className='maisInformacoes'>


          <div className='resposta-item'>
            <div className='preco'>
              <p>Preço Regular</p>
              <p className='price-value'>{resposta.preco_Regular}</p>
            </div>
            <div className='preco'>
              <p>Preço Promocional ou pague leve</p>
              <p className='price-value'>{parseInt(resposta.pague_leve)>0?resposta.pague_leve:resposta.preco_promo}</p>
            </div>
            <div className='preco'>
              <p>{resposta.loja_concorrente}</p>
            </div>
            <div className='preco'>
              <img src={resposta.url_Imagem} alt="" />
            </div>
          </div> 

        </div>:""
      }
      
    </div>
   </div>

  )
}
