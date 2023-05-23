import React, { useContext, useEffect, useState } from 'react'
import './ResuCardLojas.css'
import { CiCircleRemove } from 'react-icons/ci'
import todasLojas from "../../../moks/lojas.json"
import { FormContext } from '../../../Context/formPesquisaContext'

export default function ResuCardLojas({idLoja}) {
    const { lojas, setLojas } = useContext(FormContext)
    const [lojaSelecionada, setLojaSelecionada] = useState()


    function Filtrar(){
        let result = todasLojas.filter(x => x.codigo == idLoja)
        return result[0].nomeFilial
    }
    function removerItem(t, item) {
        const index = t.indexOf(item);
        if (index > -1) {
            t.splice(index, 1);
        }
        
        setLojas([...t])
    }


    return (
        <div className='containerCardLojas'>
            <p className='itemCardLojas'>{Filtrar()}</p>
            <CiCircleRemove className='iconRemove' onClick={()=> removerItem(lojas,idLoja)}/>
        </div>
    )
}
