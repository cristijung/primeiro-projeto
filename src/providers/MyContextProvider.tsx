
"use client"; 
import { ReactNode, useState, useCallback } from 'react';
import { MyContext, MyContextType } from '../context/MyContext'; 

interface MyContextProviderProps {
  children: ReactNode;
}

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [someValue, setSomeValue] = useState<string>("Valor Inicial");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = useCallback(() => {
    setIsAuthenticated(true);
    // aqui vai a lógica adicional de login, como salvar um token, por exemplo
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    // mais lógica de logout, por exemplo
  }, []);

  const contextValue: MyContextType = {
    someValue,
    setSomeValue,
    isAuthenticated,
    login,
    logout,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}