# Design System — CTMGEO

Documento de referência visual para o redesign/clonagem da landing page da CTMGEO em Next.js.
Os valores de cor e tipografia foram **extraídos por inspeção visual das capturas de tela**
enviadas, não do código-fonte real do site. Estão marcados como *(aprox.)* onde recomendamos
validar com a equipe de marketing/arquivos de marca originais antes de um lançamento oficial.

---

## 1. Marca

- **Logo:** losango (diamante) formado por pequenos quadrados coloridos (vermelho-alaranjado,
  verde, azul) + wordmark "CTMGEO" em preto/cinza-escuro + tagline "SOLUÇÕES EM GEOTECNOLOGIAS"
  em cinza claro, abaixo, letras espaçadas.
- **Tom de voz:** institucional, técnico, direto — foco em benefício para a gestão pública
  (arrecadação, eficiência, transparência).
- **Público:** gestores públicos (prefeitos, secretários), servidores municipais, munícipes
  (usuários finais do app cidadão).

---

## 2. Paleta de cores *(aprox.)*

| Token | Hex | Uso |
|---|---|---|
| `--color-primary` | `#0E7AC4` | Links do menu (hover/ativo), banner de CTA, botões primários, títulos em destaque |
| `--color-primary-dark` | `#095A94` | Hover/estado ativo de botões e links primários |
| `--color-dark` | `#16181D` | Fundo do rodapé, textos de alto contraste |
| `--color-text` | `#333333` | Texto de parágrafo padrão |
| `--color-text-muted` | `#6C757D` | Texto secundário, descrições de cards, datas |
| `--color-bg` | `#FFFFFF` | Fundo padrão das seções |
| `--color-bg-alt` | `#F7F9FB` | Fundo de seções alternadas (ex.: Diferenciais) |
| `--color-border` | `#E5E7EB` | Divisórias, bordas de card |
| `--color-accent-red` | `#E8543C` | Uso pontual — apenas no logotipo |
| `--color-accent-green` | `#4CAF50` | Uso pontual — apenas no logotipo |
| `--color-success` | `#2E7D32` | Mensagem de sucesso (ex.: confirmação da newsletter) |

> Ícones da seção "Diferenciais" são monocromáticos, estilo *line icon*, na cor
> `--color-primary`.

---

## 3. Tipografia *(aprox.)*

- **Família de títulos:** sans-serif geométrica/moderna (referência visual: *Poppins* ou
  *Montserrat*). Peso 600–700 para H1–H3.
- **Família de texto:** sans-serif neutra (referência visual: *Inter* ou *Open Sans*). Peso
  400 para parágrafos, 500 para labels/botões.
- **Fallback:** `-apple-system, "Segoe UI", Roboto, Arial, sans-serif`.

| Estilo | Tamanho (desktop) | Tamanho (mobile) | Peso | Line-height |
|---|---|---|---|---|
| H1 (hero) | 40px | 28px | 700 | 1.2 |
| H2 (título de seção) | 32px | 24px | 700 | 1.25 |
| H3 (card/título) | 20px | 18px | 600 | 1.3 |
| Body | 16px | 15px | 400 | 1.6 |
| Small/legenda | 13px | 13px | 400 | 1.4 |
| Botão | 15px | 15px | 500 | 1 |

Destaques de título usam duas cores na mesma linha (ex.: "Nossos **Diferenciais**", onde a
segunda palavra recebe `--color-primary` ou peso maior) — padrão visto em todos os H2 do site.

---

## 4. Espaçamento (escala 4px)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96` (px) — usar sempre múltiplos desta escala; nunca
valores arbitrários.

- Espaçamento vertical entre seções: `64px` (mobile `48px`).
- Padding interno de card: `24px`.
- Gap entre itens de grid: `24px` (mobile `16px`).

---

## 5. Grid e breakpoints

| Breakpoint | Largura | Container máx. | Colunas grid |
|---|---|---|---|
| Mobile | < 576px | 100% (padding 16px) | 1 |
| Tablet | 576–991px | 720px | 2 |
| Desktop | 992–1199px | 960px | 3 |
| Desktop grande | ≥ 1200px | 1200px | 3 (Diferenciais) / 4 (Clientes) |

---

## 6. Componentes

### Header
- **Topbar** (fina, texto pequeno, alinhada à direita): links "Sobre a CTMGEO" / "Entre em
  contato!", telefone, WhatsApp, "Fazer Login" (ícone de usuário).
- **Nav principal**: logo à esquerda, itens de menu centralizados/à esquerda em maiúsculas,
  cor `--color-primary`, peso 600; ícones sociais circulares (borda fina) à direita.
- Sticky opcional no scroll; sombra sutil quando fixo.

### Botão primário
- Fundo preto ou `--color-primary`, texto branco, padding `12px 28px`, sem borda arredondada
  pronunciada (cantos levemente arredondados, ~2px), hover com leve escurecimento.

### Card "Diferencial"
- Ícone de linha (32–40px) + título (H3) + texto (body, `--color-text-muted`), sem borda,
  alinhado à esquerda, alto espaçamento entre ícone e texto.

### Card lateral de destaque ("e mais...")
- Fundo `--color-bg-alt`, borda esquerda de 3–4px em `--color-primary`, ícone pequeno, título
  em negrito, texto curto, link "leia mais" com seta.

### Badge de data (Notícias)
- Caixa retangular azul (`--color-primary`), dia em fonte grande/negrito, mês abaixo em
  maiúsculas menor — empilhados, alinhados à esquerda do card de notícia.

### Card de notícia
- Badge de data + título (link, H3) + resumo (2 linhas, truncado) + "Leia mais" em
  `--color-primary`.

### Depoimento
- Aspas grandes decorativas, fundo `--color-primary` com texto branco (card de destaque) ou
  fundo neutro; nome em negrito + cargo/prefeitura em texto pequeno abaixo.

### Rodapé
- Fundo `--color-dark`, texto cinza-claro; 3 colunas (newsletter / dados da empresa / redes
  sociais); barra inferior com copyright e links legais separada por linha divisória sutil.

### Formulário (newsletter)
- Input full-width com borda arredondada leve + botão "Enviar" colado à direita (ou abaixo no
  mobile); mensagem de sucesso em `--color-success` substituindo o form ou aparecendo acima
  dele.

---

## 7. Imagens e ícones

- **Hero:** ilustração vetorial estilo *flat design* de cidade inteligente (prédios, sensores,
  drone) com overlay escuro degradê para legibilidade do texto/play button.
- **Logos de clientes:** grayscale ou cor original, altura fixa (~40–48px), espaçados
  uniformemente, opcionalmente em carrossel infinito.
- **Ícones:** SVG inline, estilo *outline* (traço fino), cor `--color-primary`, tamanho
  consistente (24–40px conforme contexto).

---

## 8. Acessibilidade

- Contraste mínimo **AA** (4.5:1 para texto normal, 3:1 para texto grande/ícones).
- Todo elemento interativo com estado de foco visível (`outline` customizado, não removido).
- Todo `<img>` com `alt` descritivo; ícones puramente decorativos com `aria-hidden="true"`.
- Formulário de newsletter com `<label>` associado ao input (pode ser visualmente oculto, mas
  presente no DOM).
- Hierarquia de headings sequencial (H1 único por página, H2 por seção, H3 por item).

---

## 9. Interação/estado

- Links e botões: transição `150–200ms ease` em cor/background no hover.
- Carrossel de notícias/depoimentos: dots de navegação, sem autoplay agressivo (>5s por slide
  se autoplay for usado).
- Formulário: estado de erro (borda vermelha + mensagem) e estado de sucesso (mensagem verde)
  bem diferenciados.
