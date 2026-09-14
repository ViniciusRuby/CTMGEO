import React from "react";
import Image from "next/image";
import { DADOS_EMPRESA } from "@/data/empresa";
import styles from "./styles.module.css";

export default function CtaBanner() {
  const { ctaBanner } = DADOS_EMPRESA;

  return (
    <section id="empresa" className={styles.ctaBanner} aria-label="Chamada principal e metodologia">
      <div className={`container ${styles.ctaContainer}`}>
        <div className={styles.ctaHeader}>
          <h2 className={styles.ctaTitle}>{ctaBanner.titulo}</h2>
          <a href={ctaBanner.botaoHref} className={styles.ctaButton}>
            <span>{ctaBanner.botaoTexto}</span>
            <svg
              className={styles.ctaButtonIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className={styles.pillarsGrid}>
          <div className={styles.pillarsList}>
            {ctaBanner.pilares.map((pilar) => (
              <div key={pilar.titulo} className={styles.pillarCard}>
                <div className={styles.pillarIconContainer}>
                  <Image
                    src={pilar.iconeSrc}
                    alt=""
                    aria-hidden="true"
                    width={72}
                    height={72}
                    className={styles.pillarIcon}
                  />
                </div>
                <h3 className={styles.pillarTitle}>{pilar.titulo}</h3>
                <p className={styles.pillarDesc}>{pilar.descricao}</p>
              </div>
            ))}
          </div>

          <div className={styles.workCardWrapper}>
            <a
              href={ctaBanner.nossoTrabalho.href}
              className={styles.workCard}
              aria-label="Conheça nosso trabalho e projetos realizados"
            >
              <div className={styles.workImageContainer}>
                <Image
                  src={ctaBanner.nossoTrabalho.imagemSrc}
                  alt="Amostra ilustrativa de projetos de geotecnologia e mapeamento da CTMGEO"
                  width={340}
                  height={340}
                  className={styles.workImage}
                />
                <div className={styles.workOverlay}>
                  <span className={styles.workTitle}>
                    {ctaBanner.nossoTrabalho.titulo}
                  </span>
                  <span className={styles.workAction}>
                    Ver projetos &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
