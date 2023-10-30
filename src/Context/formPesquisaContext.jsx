import { createContext, useState } from "react";

export const FormContext = createContext()

export const FormProvider = ({children}) => {
  
    const [Form, SetForm] = useState({
        produtos:[],
        lojas:[],
        categoria:"",
        dataInicio: "",
        dataFinal:""
    });

    const [concorrentes,setConcorrentes] = useState([])
    const [lojas,setLojas] = useState([])
    const [produtos,setProdutos] = useState([])
    const [categoria,setCategoria] = useState("")
    const [dataInicio,setDataInicio] = useState("")
    const [dataFinal,setDataFinal] = useState("")
    const [nomePesquisa,setNomePesquisa] = useState("")
    // const [checked, setChecked] = useState(false)


    return(
        <FormContext.Provider value={{
            Form,
            SetForm,
            lojas,
            setLojas,
            produtos,
            categoria,
            dataInicio,
            dataFinal,
            setProdutos,
            setCategoria,
            setDataFinal,
            setDataInicio,
            concorrentes,
            setConcorrentes,
            nomePesquisa,
            setNomePesquisa
            }}>
                
            {children}
        </FormContext.Provider>
    )
}
