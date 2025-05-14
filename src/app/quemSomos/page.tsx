import React from "react";
import Image from "next/image";
import styles from "./quemSomos.module.scss"; 
import Photo from '../../../public/detalhe2.jpeg';

export default function QuemSomos() {
  return (
    <section className={styles.quemSomosContainer}>
      <div className={styles.conteudo}>
        <div className={styles.colunaTexto}>
          <h1 className={styles.titulo}>Quem Somos</h1>
          <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className={styles.paragrafo}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className={styles.colunaImagem}>
          <div className={styles.imageWrapper}>
            <Image
              src={Photo} 
              alt="Descrição da imagem sobre quem somos"
              width={500} 
              height={350} 
              layout="responsive" // 'intrinsic', 'fill', 'fixed'
              quality={90} // 1 até 100 
              priority={true} //define a prioridade no carregamento
              placeholder="blur"              
            />
          </div>
        </div>
      </div>
    </section>
  );
}