'use client';
import React from "react";
import styles from "./navbar.module.scss";
import TextMenu from "../textmenu/TextMenu";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaEnvelope,
} from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.menuItems}>
          <TextMenu texto="Home" href="/" icon={<FaHome />} />
          <TextMenu
            texto="Quem Somos"
            href="/quemSomos"
            icon={<FaInfoCircle />}
          />
          <TextMenu
            texto="Serviços"
            href="/servicos"
            icon={<FaConciergeBell />}
          />
          <TextMenu texto="Contato" href="/contato" icon={<FaEnvelope />} />
        </div>
      </nav>
    </>
  );
}
