'use client';

import { useContext } from "react";
import { MyContext, MyContextType } from "@/context/MyContext";

//criando um hook personalizado para definir a configuração padrão do Context
export const useMyContext = (): MyContextType => {
    const context = useContext(MyContext);

    if (context === null) {
        throw new Error(
            'useMyConext deve ser usado dentro de um MyContextProvider'
        );
    }
    return context;
}