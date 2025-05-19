import { createContext, Dispatch, SetStateAction } from "react";

export interface MyContextType {
    someValue: string;
    setSomeValue: Dispatch<SetStateAction<string>>;
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const MyContext = createContext<MyContextType | null>(null);
//é comum inicializar com null p verficar se o provider foi devidamente configurado