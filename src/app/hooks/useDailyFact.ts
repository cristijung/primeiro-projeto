import { useState, useEffect } from 'react';

// Interface para a estrutura esperada do fato da API (pode ser movida para um arquivo de tipos se usada em mais lugares)
export interface FactData {
  id: string;
  text: string;
  source_url: string;
  language: string;
  permalink: string;
}


interface UseDailyFactReturnType {
  fact: FactData | null;
  isLoading: boolean;
  error: Error | null;
  
}

const USELESS_FACTS_API_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';


const useDailyFact = (): UseDailyFactReturnType => {
  const [fact, setFact] = useState<FactData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFact = async () => {
      setIsLoading(true);
      setError(null);
     
      

      try {
        const response = await fetch(USELESS_FACTS_API_URL);
        if (!response.ok) {
          throw new Error(`Erro ao buscar o fato: ${response.status} ${response.statusText}`);
        }
        const data: FactData = await response.json();
        setFact(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Ocorreu um erro desconhecido ao buscar o fato.'));
        }
        console.error("Erro ao buscar fato:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFact();
  }, []); // array de dependências vazio para executar apenas na montagem

  return { fact, isLoading, error };
};

export default useDailyFact;
