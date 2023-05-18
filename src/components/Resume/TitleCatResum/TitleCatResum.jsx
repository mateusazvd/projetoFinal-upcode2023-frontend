import React from "react"
import '../../../App.css'
import './TitleCatResum.css'

export default function TitleCatResum(){
    
    return (
        <>
            <div className='TitleResumo'>
                <h3 className='H3Resume'>
                    Resumo
                </h3>
                <fieldset className='Cat'>
                    <h3 className='Cath3'>
                        Categoria: 
                    </h3>
                    <label>
                        <input type="search" placeholder="Categoria" name="Categoria" id="CatagoriaId"/>
                    </label>
                </fieldset>
                <fieldset className='PerDate'>
                    <h3>
                        Perído
                    </h3>
                    <div className='DatePerid'>
                        <label htmlFor="dataInicio">
                            <input className='InputDate' type="date" name="dataInicio" id="dataInicio" placeholder='Inicio'/>
                        </label>
                        <label htmlFor="dataFinal">
                            <input className='InputDate' type="date" name="dataFinal" id="dataFinal"/>
                        </label>
                    </div>
                </fieldset>
            </div>
        </>
    )
}