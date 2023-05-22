import React from 'react'
import './ResuCardLojas.css'
import { CiCircleRemove } from 'react-icons/ci'


export default function ResuCardLojas({nomeLoja}) {
    return (
        <div className='containerCardLojas'>
            <p className='itemCardLojas'>{nomeLoja}</p>
            <CiCircleRemove className='iconRemove' />
        </div>
    )
}
