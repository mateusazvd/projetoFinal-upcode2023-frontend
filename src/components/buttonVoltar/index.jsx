import './style.css'

export default function ButtonBack({setmain}){
    return(
        <div>
            <button className='backButton' onClick={()=>setmain(true)}>Voltar</button>
        </div>
    )
}