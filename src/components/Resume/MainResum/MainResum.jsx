import React from "react";
import '../../../App.css'
import './MainResum.css'
import TitleCatResum from '../TitleCatResum/TitleCatResum'
import ResumRedLojas from '../ResumRedLojas/ResumRedLojas'
import ResumRedProd from '../ResumRedProd/ResumRedProd'
import ResuCardLojas from "../ResuCardLojas/ResuCardLojas";
import ResuCardProdutos from "../ResuCardProdutos/ResuCardProdutos";


export default function MainResume() {
    return (
        <>
            <div className="ResumMain">
                <TitleCatResum />
                <ResumRedLojas />
                <div className="resuCardLojas">
                    <ResuCardLojas />
                    <ResuCardLojas />
                    <ResuCardLojas />
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