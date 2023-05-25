import './style.css'

export default function Menu({setDashboard}) {
    return (
        <div className='containerMenu'>
            <p className='textoMenu' onClick={()=> setDashboard(true)}>Dashboard</p>
            <p className='textoMenu' onClick={()=> setDashboard(false)}>Cadastrar Pesquisa</p>
        </div>
    )
}