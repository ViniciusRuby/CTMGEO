import React from "react";
import { NOTICIAS_LISTA } from "@/data/noticias";
import NoticiaCard from "./NoticiaCard";
import styles from "./styles.module.css";

export default function NoticiasSection() {
  return (
    <section id="noticias" className={styles.section} aria-labelledby="noticias-heading">
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 id="noticias-heading" className={styles.sectionTitle}>
              Últimas <span className={styles.titleHighlight}>Notícias</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Conteúdos, inovações e novidades sobre geotecnologia e gestão pública municipal.
            </p>
          </div>

          <a href="#noticias" className={styles.headerMoreLink}>
            <span>Ver outras notícias</span>
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <div className={styles.noticiasGrid}>
          {NOTICIAS_LISTA.map((noticia) => (
            <NoticiaCard key={noticia.id} noticia={noticia} />
          ))}
        </div>

        <div className={styles.bottomLinkWrapper}>
          <a href="#noticias" className={styles.bottomMoreLink}>
            Ver outras notícias &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
