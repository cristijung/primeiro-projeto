'use client';
import { ReactNode, useState, useCallback } from 'react';
import { MyContext, MyContextType } from '@/context/MyContext';


interface MyContextProviderProps {
    children: ReactNode;
}

function MyContextProvider({ children }: MyContextProviderProps) {
    const [someValue, setSomeValue] = useState<string>('Aqui vai o valor inicial!');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = useCallback(() => {
        setIsAuthenticated(true);
        //mais lógica aqui
    }, []);

     const logout = useCallback(() => {
        setIsAuthenticated(false);
        //mais lógica aqui
    }, []);

    const contextValue: MyContextType = {
        someValue,
        setSomeValue,
        isAuthenticated,
        login,
        logout,
    };

    return(
        <>
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>        
        </>
    );
}

export default MyContextProvider;
