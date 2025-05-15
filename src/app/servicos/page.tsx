
import React from "react";
import styles from './servicos.module.scss';
import Counter from "@/components/srvs/Counter";
import CatFetch from "@/components/catApi/CatFetch";

export default function Servicos() {
    return(
        <>
        <section className={styles.servicosPageContainer}>
            <h1 className={styles.pageTitle}>Hooks & Hooks Personalizados</h1>
            <main className={styles.componentWrapper}>
                <Counter />
                <CatFetch />

              
            </main>
        </section>
        
        </>
    );
}
