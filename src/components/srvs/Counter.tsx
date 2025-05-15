"use client";

import React from "react";
import styles from "./styles/counter.module.scss";
import useCounter from "@/app/hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <section className={styles.counterContainer}>
        <h2 className={styles.countDisplay}>{count}</h2>
        <main className={styles.buttonGroup}>
          <button onClick={decrement} className={styles.controlButton}>
            -1
          </button>
          <button onClick={increment} className={styles.controlButton}>
            +1
          </button>
          <button onClick={reset} className={styles.controlButton}>
            Resetar
          </button>
        </main>
      </section>
    </>
  );
}
