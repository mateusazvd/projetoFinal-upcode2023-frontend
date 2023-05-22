import React, { useState } from "react";
import '../../../App.css'
import './MainResum.css'
import TitleCatResum from '../TitleCatResum/TitleCatResum'
import ResumRedLojas from '../ResumRedLojas/ResumRedLojas'
import ResumRedProd from '../ResumRedProd/ResumRedProd'
import ResuCardLojas from "../ResuCardLojas/ResuCardLojas";
import ResuCardProdutos from "../ResuCardProdutos/ResuCardProdutos";
import { useContext } from "react";
import { FormContext } from "../../../Context/formPesquisaContext";



export default function MainResume() {
    const {lojas, produtos} = useContext(FormContext)
    return (
        <>
            <div className="ResumMain">
                <TitleCatResum />
                <ResumRedLojas />
                <div className="resuCardLojas">
                    {lojas.map((id, index) => (
                        <ResuCardLojas key={index} idLoja={id} />
                    ))}
                    
                </div>
                <ResumRedProd />
                <div className="resuCardProdutos">
                        {produtos.map((id, index) => (
                            <ResuCardProdutos key={index} idProduto={id} />
                        ))}
                </div>

            </div>
        </>
    )
}