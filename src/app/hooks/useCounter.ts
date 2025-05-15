import { useState, useCallback } from 'react';

interface UseCounterType {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useCounter = (initialValue: number = 0): UseCounterType => {
    const [count, setCount] = useState<number>(initialValue);

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    }, []);

    const reset = useCallback(() => {
        setCount(initialValue);
    }, [initialValue]); //com dependencia pq depende do valor inicial

    return{ count, increment, decrement, reset };
};

export default useCounter;