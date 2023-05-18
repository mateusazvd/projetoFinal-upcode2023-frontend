import { createContext, useState } from "react";

export const FormContext = createContext()

export const FormProvider = ({children}) => {
    const teste = "breno" 

    const {Form, SetForm} = useState(teste)

    return(
        <FormContext.Provider value={teste}>
            {children}
        </FormContext.Provider>
    )
}