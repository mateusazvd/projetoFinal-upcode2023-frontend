import React from 'react'
import './ResuCardLojas.css'
import { CiCircleRemove } from 'react-icons/ci'

export default function ResuCardLojas() {
    return (
        <div className='containerCardLojas'>
            <p className='itemCardLojas'>Loja</p>
            <CiCircleRemove className='iconRemove' />
        </div>
    )
}
