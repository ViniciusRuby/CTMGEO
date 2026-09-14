import React from "react";
import Image from "next/image";
import { DADOS_EMPRESA } from "@/data/empresa";
import styles from "./styles.module.css";

export default function Footer() {
  const {
    slogan,
    endereco,
    contato,
    redesSociais,
    linksLegais,
    fundacao,
    copyright,
  } = DADOS_EMPRESA;

  return (
    <footer className={styles.footer} aria-label="Rodapé institucional">
      <div className={`container ${styles.container}`}>
        <div className={styles.footerGrid}>
          {/* Coluna 1: Marca & Missão */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <div className={styles.ribbon}>
                <span className={styles.ribbonText}>Fique ligado!</span>
              </div>
              <a href="#hero" aria-label="CTMGEO Home" className={styles.logoBadge}>
                <Image
                  src="/img/logo.png"
                  alt="Logotipo CTMGEO - Soluções em Geotecnologias"
                  width={210}
                  height={70}
                  className={styles.footerLogo}
                />
              </a>
            </div>

            <p className={styles.brandSlogan}>{slogan}</p>
            <p className={styles.brandBadge}>Atuação comprovada {fundacao}</p>

            <div className={styles.socialList}>
              {redesSociais.map((rede) => (
                <a
                  key={rede.nome}
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rede.ariaLabel}
                  className={styles.socialButton}
                >
                  {rede.nome === "Facebook" && (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                    </svg>
                  )}
                  {rede.nome === "Instagram" && (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {rede.nome === "LinkedIn" && (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.54a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Dados de Endereço e Sede */}
          <div className={styles.infoCol}>
            <h3 className={styles.colTitle}>Sede e Localização</h3>
            <address className={styles.address}>
              <p className={styles.addressLine}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{endereco.completo}</span>
              </p>
            </address>
          </div>

          {/* Coluna 3: Atendimento e Contato */}
          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Canais de Atendimento</h3>
            <ul className={styles.contactList}>
              <li>
                <a href={contato.telefoneHref} className={styles.contactLink}>
                  <svg className={styles.infoIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Telefone: {contato.telefone}</span>
                </a>
              </li>
              <li>
                <a href={contato.whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  <svg className={styles.infoIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>WhatsApp: {contato.whatsapp}</span>
                </a>
              </li>
              <li>
                <a href={contato.emailHref} className={styles.contactLink}>
                  <svg className={styles.infoIcon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{contato.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Aviso de Redesign e Isenção de Responsabilidade */}
        <div className={styles.disclaimerBox}>
          <p className={styles.disclaimerText}>
            <strong>Redesign Institucional:</strong> Projeto conceitual desenvolvido por{" "}
            <a
              href="https://github.com/ViniciusRuby"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.authorLink}
            >
              Vinícius Rubira
            </a>
            , inspirado na excelência técnica da{" "}
            <a
              href="https://www.ctmgeo.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.officialLink}
            >
              CTMGEO — Soluções em Geotecnologias (site oficial: www.ctmgeo.com.br)
            </a>
            . Todos os direitos sobre marcas, softwares e conteúdos originais pertencem integralmente à CTMGEO.
          </p>
        </div>

        {/* Linha Inferior com Links Legais e Copyright */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>{copyright}</p>

          <nav className={styles.legalNav} aria-label="Links legais e termos">
            <ul className={styles.legalList}>
              {linksLegais.map((link) => (
                <li key={link.rotulo}>
                  <a href={link.href} className={styles.legalLink}>
                    {link.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
