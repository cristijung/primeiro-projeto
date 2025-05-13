import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <h3>Footer</h3>
          <p>Texto do footer</p>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Seu Nome ou Empresa. Todos os direitos
            reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
