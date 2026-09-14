import React from "react";
import { DADOS_EMPRESA } from "@/data/empresa";
import styles from "./styles.module.css";

export default function Hero() {
  const { videoHero } = DADOS_EMPRESA;

  return (
    <section id="hero" className={styles.heroSection} aria-label="Apresentação institucional">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroHeader}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>Gestão Pública Inteligente &amp; Sustentabilidade Fiscal</span>
          </div>

          <h1 className={styles.heroTitle}>{videoHero.titulo}</h1>
          <p className={styles.heroSubtitle}>{videoHero.subtitulo}</p>
        </div>

        <div className={styles.videoWrapper}>
          <div className={styles.videoFrame}>
            <iframe
              className={styles.videoIframe}
              src={`https://www.youtube-nocookie.com/embed/${videoHero.youtubeId}?rel=0&modestbranding=1`}
              title={`${videoHero.titulo} - Vídeo Institucional CTMGEO`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className={styles.videoGlow} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
