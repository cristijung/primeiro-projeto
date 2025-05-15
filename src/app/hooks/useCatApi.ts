import { useState, useCallback } from 'react';

export interface CatImage {
    id: string;
    url: string;
    width: number;
    height: number;
}

interface UseCatApiState {
    data: CatImage | null;
    isLoading: boolean;
    error: Error | null;
}

interface UseCatApiReturnType extends UseCatApiState {
    fetchCatImage: () => Promise<void>;
}

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search?limit=1';
// const CAT_API_KEY = '';

const useCatApi = (): UseCatApiReturnType => {
    const [data, setData] = useState<CatImage | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchCatImage = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setData(null);

       try {
      const response = await fetch(CAT_API_URL, {
        // headers: {
        //   'x-api-key': CAT_API_KEY // Descomente se estiver usando uma API Key
        // }
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
      }

      const result: CatImage[] = await response.json();

      if (result && result.length > 0) {
        setData(result[0]); // A API retorna um array, pegamos o primeiro item
      } else {
        throw new Error('Nenhuma imagem de gato encontrada.');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error('Ocorreu um erro desconhecido.'));
      }
      console.error("Falha ao buscar imagem de gato:", err);
    } finally {
      setIsLoading(false);
    }
  }, []); // useCallback com dependências vazias, pois CAT_API_URL é constante e fetch é estável.

  return { data, isLoading, error, fetchCatImage };
};

export default useCatApi;