import React from 'react'
import './style.css'

export default function PesquisaDashboard({nome,SetPesquisaSelecionada,item}) {
  return (
    <div className='containerPesquisaDash' onClick={()=> SetPesquisaSelecionada(item)}>
     <p className='itemPesquisa'>{nome}</p>
    </div>
  )
}
