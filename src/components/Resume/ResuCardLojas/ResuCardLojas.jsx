import React, { useContext, useEffect, useState } from 'react'
import './ResuCardLojas.css'
import { CiCircleRemove } from 'react-icons/ci'
import todasLojas from "../../../moks/lojas.json"
import { FormContext } from '../../../Context/formPesquisaContext'

export default function ResuCardLojas({ idLoja }) {
    //const {lojas,setLojas} = useContext(FormContext)
    const [lojaSelecionada, setLojaSelecionada] = useState()

    useEffect(() => {
        // receber um id e retornar uma loja com o id passado 
        let result = todasLojas.filter(x => x.codigo == idLoja)
        setLojaSelecionada(result[0].nomeFilial)
    }, [])

    return (
        <div className='containerCardLojas'>
            <p className='itemCardLojas'>{lojaSelecionada}</p>
            <CiCircleRemove className='iconRemove' />
        </div>
    )
}
