"use client";

import React from "react";
import useCatApi from "@/app/hooks/useCatApi";
import styles from "./catApi.module.scss";
//import { CatImage } from "./../../app/hooks/useCatApi";

export default function CatFetch() {
  const { data: CatImage, isLoading, error, fetchCatImage } = useCatApi();

  const clickButton = () => {
    fetchCatImage();
  };

  return (
    <>
      <section className={styles.catFetcherContainer}>
        <h2 className={styles.title}>Gerador de Gatitos!</h2>

        <button
          onClick={clickButton}
          disabled={isLoading}
          className={styles.fetchButton}
        >
          {isLoading ? (
            <span className={styles.loandingText}>Buscando Gatinho ...</span>
          ) : (
            "Buscar novo gatito!"
          )}
        </button>
        {error && (
          <div className={styles.errorBox}>
            <p>
              <strong>Ops! Algo deu errado:</strong>
            </p>
            <p>{error.message}</p>
          </div>
        )}

        {CatImage && !isLoading && !error && (
          <div className={`${styles.imageCard} ${styles.imageAppear}`}>
            <h3 className={styles.imageTitle}>Olhe que fofuraaa:</h3>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CatImage.url}
                alt="Um gato fofo"
                className={styles.catImage}
              />
            </div>
            <p className={styles.imageId}>ID da imagem: {CatImage.id}</p>
          </div>
        )}

        {!CatImage && !isLoading && !error && (
            <p className={styles.placeholderText}>Clique no botão para ver um gato</p>
        )}
      </section>
    </>
  );
}
