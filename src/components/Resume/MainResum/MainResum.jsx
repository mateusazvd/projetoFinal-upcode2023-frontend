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
    const { Form, SetForm } = useContext(FormContext);
    return (
        <>
            <div className="ResumMain">
                <TitleCatResum />
                <ResumRedLojas />
                <div className="resuCardLojas">
                    {Form.lojas.map((loja, index) => (
                        <ResuCardLojas key={index} nomeLoja={loja.nomeFilial} />
                    ))}
                    {Form.lojas}
                </div>
                <ResumRedProd />
                <div className="resuCardProdutos">
                    <ResuCardProdutos />
                    <ResuCardProdutos />
                    <ResuCardProdutos />
                    <ResuCardProdutos />

                </div>

            </div>
        </>
    )
}