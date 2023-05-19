import { useContext } from 'react'
import { FormContext } from '../../Context/formPesquisaContext'
import './style.css'

export default function Header() {
    const nome = useContext(FormContext)

    return (
        <div className='corDeFundo'>
            
        </div> 
    )
}