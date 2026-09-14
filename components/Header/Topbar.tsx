import React from "react";
import { DADOS_EMPRESA } from "@/data/empresa";
import styles from "./styles.module.css";

export default function Topbar() {
  const { contato, topbar } = DADOS_EMPRESA;

  return (
    <aside className={styles.topbar} aria-label="Informações de contato e acesso rápido">
      <div className={`container ${styles.topbarContainer}`}>
        <div className={styles.topbarLeft}>
          <a href={topbar.sobreLink.href} className={styles.topbarLink}>
            {topbar.sobreLink.rotulo}
          </a>
          <span className={styles.topbarDivider} aria-hidden="true">|</span>
          <a href={topbar.contatoLink.href} className={styles.topbarLink}>
            {topbar.contatoLink.rotulo}
          </a>
        </div>

        <div className={styles.topbarRight}>
          <a
            href={contato.telefoneHref}
            className={styles.topbarContact}
            aria-label={`Ligar para ${contato.telefone}`}
          >
            <svg
              className={styles.topbarIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>{contato.telefone}</span>
          </a>

          <span className={styles.topbarDivider} aria-hidden="true">|</span>

          <a
            href={contato.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.topbarContact}
            aria-label="Contato via WhatsApp"
          >
            <svg
              className={styles.topbarIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>WhatsApp</span>
          </a>

          <span className={styles.topbarDivider} aria-hidden="true">|</span>

          <a href={topbar.loginLink.href} className={styles.topbarLogin}>
            <svg
              className={styles.topbarIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{topbar.loginLink.rotulo}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
