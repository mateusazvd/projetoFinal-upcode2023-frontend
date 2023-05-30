import { useContext, useEffect, useState } from 'react'
import { FormContext } from '../../Context/formPesquisaContext'
import './style.css'

export default function Header() {
    const { Form,teste,lojas,setLojas } = useContext(FormContext)


    return (
        <div className='corDeFundo'>
        </div>
    )
}
