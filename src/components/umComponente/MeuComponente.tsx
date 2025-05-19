"use client";

import { useMyContext } from "../../../src/app/hooks/useContext";

export function MeuComponente() {
  const { someValue, setSomeValue, isAuthenticated, login, logout } =
    useMyContext();

  return (
    <div>
      <p>Valor do Contexto: {someValue}</p>
      <button onClick={() => setSomeValue("Novo Valor!")}>Mudar Valor</button>
      <hr />
      {isAuthenticated ? (
        <>
          <p>Usuário Autenticado</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Usuário Não Autenticado</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}
