import Link from "next/link";
import React from "react";
import styles from './navbar.module.scss';

export default function NavBar() {
    return(
        <>
        <nav className={styles.navLink}>
            <Link href='/home'>Home</Link>
            <a href="/home">Home</a>
            <Link href='/quemSomos'>Quem Somos</Link>
            <Link href='/portfolio'>Portfólio</Link>
            <Link href='/contato'>Contato</Link>            
        </nav>
        </>
    );
}
