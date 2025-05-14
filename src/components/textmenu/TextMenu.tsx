import React from "react";
import Link, { LinkProps } from "next/link";
import styles from './textMenu.module.scss';

interface TextLinksProps extends LinkProps {
    texto: string;
    href: string;
    icon?: React.ReactNode;
    textname?: string;
}

export default function TextMenu({ texto, href, icon, ...rest }: TextLinksProps) {
    return(
        <>
        <Link href={href} {...rest} className={styles.textLink}>
        <div className={styles.linkContent}>
            {icon && <span className={styles.iconWrapper}>{icon}</span>}
        <span>{texto}</span>
        </div>
        </Link>
        
        </>
    );
}
