"use client";

import React, { useState } from "react";
import { DADOS_EMPRESA } from "@/data/empresa";
import styles from "./styles.module.css";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  const { newsletter } = DADOS_EMPRESA;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação básica de e-mail
    if (!email || !email.includes("@") || !email.includes(".")) {
      setErro("Por favor, informe um endereço de e-mail válido.");
      return;
    }

    setErro("");
    setEnviado(true);
  };

  const handleReset = () => {
    setEnviado(false);
    setEmail("");
    setErro("");
  };

  return (
    <section className={styles.section} aria-labelledby="newsletter-heading">
      <div className={`container ${styles.container}`}>
        <div className={styles.newsletterCard}>
          <div className={styles.header}>
            <div className={styles.iconCircle} aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h2 id="newsletter-heading" className={styles.title}>
              {newsletter.titulo}
            </h2>
            <p className={styles.subtitle}>{newsletter.texto}</p>
          </div>

          {enviado ? (
            <div className={styles.successBox} role="alert" aria-live="polite">
              <div className={styles.successIcon} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className={styles.successMessage}>{newsletter.mensagemSucesso}</p>
              <button
                type="button"
                className={styles.resetButton}
                onClick={handleReset}
              >
                Cadastrar outro e-mail
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.inputGroup}>
                <label htmlFor="newsletter-email" className="sr-only">
                  {newsletter.placeholder}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  className={`${styles.input} ${erro ? styles.inputError : ""}`}
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (erro) setErro("");
                  }}
                  required
                  aria-invalid={!!erro}
                  aria-describedby={erro ? "newsletter-error" : undefined}
                />
                <button type="submit" className={styles.submitButton}>
                  <span>{newsletter.botaoTexto}</span>
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
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>

              {erro && (
                <p id="newsletter-error" className={styles.errorMessage} role="alert">
                  {erro}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
