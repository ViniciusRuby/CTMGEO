import React from "react";
import { NoticiaItem } from "@/data/noticias";
import styles from "./styles.module.css";

interface Props {
  noticia: NoticiaItem;
}

export default function NoticiaCard({ noticia }: Props) {
  return (
    <article className={styles.noticiaCard}>
      <div className={styles.cardHeader}>
        <div className={styles.dateBadge} aria-label={`Publicado em ${noticia.dataCompleta}`}>
          <span className={styles.dateDay}>{noticia.dia}</span>
          <span className={styles.dateMonth}>{noticia.mes}</span>
        </div>

        <div className={styles.contentWrapper}>
          <h3 className={styles.noticiaTitle}>
            <a href={noticia.slug} className={styles.noticiaLink}>
              {noticia.titulo}
            </a>
          </h3>

          <p className={styles.noticiaResumo}>{noticia.resumo}</p>

          <a href={noticia.slug} className={styles.readMore}>
            <span>Leia mais</span>
            <svg
              className={styles.arrowIcon}
              viewBox="0 0 24 24"
              width="16"
              height="16"
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
      </div>
    </article>
  );
}
