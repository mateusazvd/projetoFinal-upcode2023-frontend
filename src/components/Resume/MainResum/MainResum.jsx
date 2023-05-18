import React from "react";
import '../../../App.css'
import './MainResum.css'
import TitleCatResum from '../TitleCatResum/TitleCatResum'
import ResumRedLojas from '../ResumRedLojas/ResumRedLojas'
import ResumRedProd from '../ResumRedProd/ResumRedProd'
import ResumSub from '../ResumSub/ResumSub'

export default function MainResume() {
    return(
        <>
        <div className="ResumMain">
            <TitleCatResum />
            <ResumRedLojas />
            <ResumRedProd />
            <ResumSub />
        </div>
        </>
    )
}