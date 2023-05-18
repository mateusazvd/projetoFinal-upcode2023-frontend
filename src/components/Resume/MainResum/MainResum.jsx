import React from "react";
import '../../../App.css'
import TitleCatResum from '../TitleCatResum/TitleCatResum'
import ResumRedLojas from '../ResumRedLojas/ResumRedLojas'
import ResumRedProd from '../ResumRedProd/ResumRedProd'

export default function MainResume() {
    return(
        <>
        <TitleCatResum />
        <ResumRedLojas />
        <ResumRedProd />
        </>
    )
}