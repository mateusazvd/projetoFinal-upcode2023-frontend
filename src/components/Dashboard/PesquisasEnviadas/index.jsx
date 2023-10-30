import React from 'react'
import './style.css'
import Title from '../../Title'
import PesquisaDashboard from '../PesquisaDashboard'
import { useEffect } from 'react'
import { useState } from 'react'

export default function PesqEnviadas({SetPesquisaSelecionada}) {
    const [pesquisasEnviadas, setPesquisasEnviadas] = useState([])

    useEffect(() => {

        fetch('https://localhost:7254/api/pesquisa/todos', {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then((data) => data.json()).then((response) => setPesquisasEnviadas(response))
    }, [])


    return (
        <>
            <div>
                <div className='container--title'>
                    <Title titulo="Pesquisas enviadas" />
                </div>

                <div className='container--pesqEnviadas'>
                    {pesquisasEnviadas?.map(item => <PesquisaDashboard
                     SetPesquisaSelecionada={SetPesquisaSelecionada}
                    nome={item.nome}
                    item = {item}/>)}
                </div>
            </div>
        </>

    )
}