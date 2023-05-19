import { createContext, useState } from "react";

export const FormContext = createContext()

export const FormProvider = ({children}) => {
    const formGlobal = {
        produtos:[],
        lojas:[],
        categoria:"",
        dataInicio:"",
        dataFinal:""
    }

    const [Form, SetForm] = useState(formGlobal)

    return(
        <FormContext.Provider value={{Form,SetForm}}>
            {children}
        </FormContext.Provider>
    )
}