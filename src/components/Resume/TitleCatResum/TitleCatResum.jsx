import React, { useContext, useEffect } from "react"
import '../../../App.css'
import './TitleCatResum.css'
import Title from '../../Title'
import { FormContext } from "../../../Context/formPesquisaContext";

export default function TitleCatResum() {
    const {dataInicio,dataFinal,categoria} = useContext(FormContext);


    // formata a data para o formato dia//mes//ano
    function FormatarData(data){
       if(data?.length > 0){
            data = data?.split('-')
            data = data[2] + "/" + data[1] + "/" + data[0]
            return data
        }
        return ""
    }

    return (
        <>
            <div className='TitleResumo'>
                <Title
                    titulo='Resumo'
                />
                <div className="resContainerCadeado">
                    <div className='Cat'>
                        <h3 className='Cath3'>
                            Categoria:
                        </h3>
                        <p className="resultCategoria">{categoria?.toUpperCase()}</p>
                    </div>
                    <div className='ResumPerDate'>
                        <h3>
                            Perído:
                        </h3>
                        <div className="resultPeriodo">
                            <p className="resultPeriodoInput">{FormatarData(dataInicio)}</p>
                        </div>

                        <p className="separadorDate">até</p>

                        <div className="resultPeriodo">
                            <p className="resultPeriodoInput">{FormatarData(dataFinal)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}