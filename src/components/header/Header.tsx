import React from "react";
import styles from "./header.module.scss";
import NavBar from "../navbar/NavBar";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>Aqui vai o logo</div> 
          Aqui vai o header
        </div>
        <NavBar/>
      </header>
    </>
  );
}
