import React from "react"
import '../../../App.css'
import './TitleCatResum.css'
import Title from '../../Title'

export default function TitleCatResum() {

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
                        <p className="resultCategoria">Genericos</p>
                    </div>
                    <div className='ResumPerDate'>
                        <h3>
                            Perído:
                        </h3>
                        <div className="resultPeriodo">
                            <p className="resultPeriodoInput"></p>
                        </div>

                        <p className="separadorDate">até</p>

                        <div className="resultPeriodo">
                            <p className="resultPeriodoInput"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}