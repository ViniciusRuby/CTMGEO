import React from "react";
import Image from "next/image";
import { CLIENTES_CONFIG } from "@/data/clientes";
import styles from "./styles.module.css";

export default function ClientesSection() {
  const { seloAutoridade, descricao, lista } = CLIENTES_CONFIG;

  return (
    <section id="clientes" className={styles.section} aria-labelledby="clientes-heading">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <svg
              className={styles.badgeIcon}
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>{seloAutoridade}</span>
          </div>

          <h2 id="clientes-heading" className={styles.title}>
            Nossos <span className={styles.titleHighlight}>Clientes</span>
          </h2>

          <p className={styles.description}>{descricao}</p>
        </div>

        <div className={styles.logosGrid}>
          {lista.map((cliente) => (
            <div key={cliente.id} className={styles.clientCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={cliente.logoSrc}
                  alt={cliente.alt}
                  width={200}
                  height={60}
                  className={styles.clientLogo}
                />
              </div>
              <span className={styles.clientName}>{cliente.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
