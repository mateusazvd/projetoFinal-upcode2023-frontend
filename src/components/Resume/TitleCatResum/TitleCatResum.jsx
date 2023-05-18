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
                    <h3>RedCategoria</h3>
                    <label htmlFor="">
                        <input className="RedCatInp" type="button" name="" id="" />
                    </label>
                </fieldset>
                <fieldset className='ResumPerDate'>
                    <h3>
                        Perído:
                    </h3>
                    <h3 className="ResumRedPerDate">RedPerído</h3>
                    <label htmlFor="">
                        <input className="RedPerInp" type="button" name="" id="" />
                    </label>
                </fieldset>
            </div>
        </>
    )
}