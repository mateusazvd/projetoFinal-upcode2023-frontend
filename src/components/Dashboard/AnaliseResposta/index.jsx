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
        <p>FOR01-Fortaleza-CE#</p>
        <RiArrowDropDownLine className='container--icon' />
      </div>
      {
        maisInformacoes?<div className='maisInformacoes'>


          <div className='resposta-item'>
            <div className='preco'>
              <p>Preço Regular</p>
              <p className='price-value'>20,00</p>
            </div>
            <div className='preco'>
              <p>Preço Promocional</p>
              <p className='price-value'>19,00</p>
            </div>
            <div className='preco'>
              <p >Concorrente</p>
            </div>
            <div className='preco'>
              <img src="https://saude.rs.gov.br/upload/recortes/202302/27133005_247249_GDO.jpg" alt="" />
            </div>
          </div>   

          <div className='resposta-item'>
            <div className='preco'>
              <p>Preço Regular</p>
              <p className='price-value'>20,00</p>
            </div>
            <div className='preco'>
              <p>Preço Promocional</p>
              <p className='price-value'>19,00</p>
            </div>
            <div className='preco'>
              <p >Concorrente</p>
            </div>
            <div className='preco'>
              <img src="https://saude.rs.gov.br/upload/recortes/202302/27133005_247249_GDO.jpg" alt="" />
            </div>
          </div>


        </div>:""
      }
      
    </div>
   </div>

  )
}
