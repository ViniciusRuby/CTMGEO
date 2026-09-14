import React from "react";
import { DEPOIMENTOS_CONFIG } from "@/data/depoimentos";
import styles from "./styles.module.css";

export default function DepoimentosSection() {
  const { tituloSecao, subtitulo, lista } = DEPOIMENTOS_CONFIG;

  return (
    <section className={styles.section} aria-labelledby="depoimentos-heading">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 id="depoimentos-heading" className={styles.title}>
            {tituloSecao}
          </h2>
          <p className={styles.subtitle}>{subtitulo}</p>
        </div>

        <div className={styles.depoimentosGrid}>
          {lista.map((item, index) => (
            <figure
              key={item.id}
              className={`${styles.card} ${index === 0 ? styles.cardHighlight : styles.cardStandard}`}
            >
              <div className={styles.quoteIconWrapper} aria-hidden="true">
                <svg
                  className={styles.quoteIcon}
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className={styles.blockquote}>
                <p className={styles.citacaoText}>&ldquo;{item.citacao}&rdquo;</p>
              </blockquote>

              <figcaption className={styles.authorWrapper}>
                <div className={styles.avatar}>
                  <span>{item.iniciais}</span>
                </div>
                <div className={styles.authorInfo}>
                  <strong className={styles.authorName}>{item.autor}</strong>
                  <span className={styles.authorRole}>{item.cargo}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
