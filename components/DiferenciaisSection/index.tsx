import React from "react";
import { DIFERENCIAIS_LISTA, CARD_DESTAQUE_LATERAL } from "@/data/diferenciais";
import DiferencialCard from "./DiferencialCard";
import styles from "./styles.module.css";

export default function DiferenciaisSection() {
  return (
    <section id="servicos" className={styles.section} aria-labelledby="diferenciais-heading">
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader}>
          <h2 id="diferenciais-heading" className={styles.sectionTitle}>
            Nossos <span className={styles.titleHighlight}>Diferenciais</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Soluções completas com tecnologia própria, precisão técnica e suporte dedicado
            às necessidades da administração municipal.
          </p>
        </div>

        <div className={styles.contentLayout}>
          <div className={styles.cardsGrid}>
            {DIFERENCIAIS_LISTA.map((item) => (
              <DiferencialCard key={item.id} item={item} />
            ))}
          </div>

          <aside className={styles.destaqueWrapper} aria-label="Destaque tecnológico adicional">
            <div className={styles.destaqueCard}>
              <div className={styles.destaqueBadge}>
                {CARD_DESTAQUE_LATERAL.badge}
              </div>

              <div className={styles.destaqueIcon}>
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>

              <h3 className={styles.destaqueTitle}>
                {CARD_DESTAQUE_LATERAL.titulo}
              </h3>

              <p className={styles.destaqueText}>
                {CARD_DESTAQUE_LATERAL.texto}
              </p>

              <a href={CARD_DESTAQUE_LATERAL.ctaHref} className={styles.destaqueLink}>
                <span>{CARD_DESTAQUE_LATERAL.ctaTexto}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
