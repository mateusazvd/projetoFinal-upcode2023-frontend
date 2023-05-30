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
import ResumRedConcorrente from "../ResumRedConcorrente";
import ResuCardConcorrente from "../ResuCardConcorrente";


export default function MainResume({setMain}) {
    const { lojas, produtos, setLojas,concorrentes } = useContext(FormContext)

    return (
        <>
            <div className="ResumMain">
                <TitleCatResum />
                <p className="subtitulo">Confirme os dados antes de enviar sua pesquisa</p>
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
                <ResumRedConcorrente />
               <div className="grid-concorrentes">
               {
                    concorrentes.map(concorrente => <ResuCardConcorrente nome={concorrente} />)
                }
               </div>

                <div className="divButton">
                    <ButtonBack setmain= {setMain}/>
                    <Button setmain = {setMain}/>
                        

                </div>
            </div>

        </>
    )
}