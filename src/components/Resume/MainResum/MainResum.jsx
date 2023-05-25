import React from "react";
import '../../../App.css'
import './MainResum.css'
import TitleCatResum from '../TitleCatResum/TitleCatResum'
import ResumRedLojas from '../ResumRedLojas/ResumRedLojas'
import ResumRedProd from '../ResumRedProd/ResumRedProd'
import ResuCardLojas from "../ResuCardLojas/ResuCardLojas";
import ResuCardProdutos from "../ResuCardProdutos/ResuCardProdutos";
import { useContext } from "react";
import { FormContext } from "../../../Context/formPesquisaContext";
import Button from '../../Button'
import ButtonBack from '../../buttonVoltar'


export default function MainResume({setMain}) {
    const { lojas, produtos, setLojas } = useContext(FormContext)

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
                        <ResuCardProdutos key={index} idProdutos={id} />
                    ))}
                </div>
                <div className="divButton">
                    <ButtonBack setmain= {setMain}/>
                    <Button setmain = {setMain}/>


                </div>
            </div>

        </>
    )
}