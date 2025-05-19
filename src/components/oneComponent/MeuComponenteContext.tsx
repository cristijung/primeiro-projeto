"use client";

import React from "react";
import { useMyContext } from "@/app/hooks/useMyContext";

export default function MeuCoomponenteContex() {
  const { someValue, setSomeValue, isAuthenticated, login, logout } =
    useMyContext();

  return (
    <>
      <section>
        <main>
          <p>Valor do contexto: {someValue}</p>
          <hr />
          <button onClick={() => setSomeValue("Aqui está o novo valor!!!!")}>            
            Mudar o valor
          </button>
          <hr />
          {isAuthenticated ? (
            <>
              <p>Usuário autenticado</p>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <p>Usuário não autenticado</p>
              <button onClick={login}>Login</button>
            </>
          )}
        </main>
      </section>
    </>
  );
}
