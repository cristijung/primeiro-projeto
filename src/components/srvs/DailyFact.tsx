"use client";

import React from 'react';
import useDailyFact from '../../app/hooks/useDailyFact';
import styles from './styles/dailyFact.module.scss'; 

export default function DailyFact() {
  // Utiliza o hook personalizado para obter o estado e a lógica de busca
  const { fact, isLoading, error } = useDailyFact();

  // Lógica de renderização condicional
  if (isLoading) {
    return (
      <div className={styles.loadingState}>
        <div className={styles.spinner}></div>
        <p>A carregar o facto do dia...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorState}>
        <p className={styles.errorTitle}>Ops! Algo correu mal:</p>
        <p className={styles.errorMessage}>{error.message || "Não foi possível carregar o facto."}</p>
      </div>
    );
  }

  // Se não estiver a carregar e não houver erro, mas o facto ainda for null
  if (!fact) {
    return (
      <div className={styles.noFactState}>
        <p>Nenhum facto encontrado para hoje.</p>
      </div>
    );
  }

  // Renderiza o facto se tudo correu bem
  return (
    <div className={styles.dailyFactContainer}>
      {/* Wrapper para garantir que o conteúdo fique acima de pseudo-elementos do container */}
      <div className={styles.factContentWrapper}>
        <h3 className={styles.factTitle}>Fato Curioso do Dia:</h3>
        <p className={styles.factText}>{fact.text}</p>
        <a
          href={fact.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sourceLink}
        >
          Fonte
        </a>
      </div>
    </div>
  );
};