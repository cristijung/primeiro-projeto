"use client"; // hooks que usam useContext são para Client Components

import { useContext } from "react";
import { MyContext, MyContextType } from "../../context/MyContext";

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (context === null) {
    throw new Error(
      "useMyContext deve ser usado dentro de um MyContextProvider"
    );
  }
  return context;
};




