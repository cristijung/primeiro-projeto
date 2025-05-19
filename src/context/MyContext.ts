
import { createContext, Dispatch, SetStateAction } from 'react';

// 1. Defina a interface para o valor do contexto
export interface MyContextType {
  someValue: string;
  setSomeValue: Dispatch<SetStateAction<string>>;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// 2. Crie o contexto com um valor inicial (pode ser null ou um objeto padrão)
// É comum inicializar com null e verificar no Provider se o contexto foi devidamente configurado.
export const MyContext = createContext<MyContextType | null>(null);



