# AGENTS.md — CTMGEO Landing Page

Regras técnicas e de processo para qualquer pessoa ou agente de IA que for desenvolver,
revisar ou dar manutenção neste projeto. Em caso de conflito entre este arquivo e uma instrução
pontual de prompt, **este arquivo prevalece**, salvo indicação explícita em contrário.

---

## 1. Visão geral do projeto

Landing page institucional (página única) da CTMGEO — empresa de geotecnologias que vende
software de gestão municipal (SigWEB) e serviços de geoprocessamento para prefeituras.
Fase atual: **apresentação/protótipo**, sem integração de back-end ou banco de dados.

## 2. Stack técnica

| Camada | Tecnologia | Observação |
|---|---|---|
| Framework | Next.js (App Router) | Versão estável mais recente na criação do projeto |
| Linguagem | JavaScript ou TypeScript | Preferir TypeScript se o time já domina; manter consistência em 100% do repo |
| Estilo | CSS puro (CSS Modules) | Proibido Tailwind, styled-components ou UI kits nesta fase |
| Dados | Constantes locais (`/data/*.js` ou `.json`) | Sem banco de dados, sem CMS, sem API externa |
| Imagens | `next/image` | Otimização automática, `alt` obrigatório |
| Lint/format | ESLint + Prettier (config padrão Next.js) | Rodar antes de todo commit |
| Deploy alvo | Vercel (ou host estático equivalente) | Build 100% estático (`output: 'export'` avaliar caso a caso) |

## 3. Estrutura de pastas

```
/app
  layout.tsx
  page.tsx
  globals.css
/components
  Header/
  Hero/
  CtaBanner/
  DiferenciaisSection/
  ClientesSection/
  NoticiasSection/
  DepoimentosSection/
  NewsletterForm/
  Footer/
/data
  diferenciais.ts
  clientes.ts
  noticias.ts
  depoimentos.ts
/public
  /img
/docs
  design_system.md
  regras_de_negocio.md
```

- Cada componente vive em sua própria pasta com `index.tsx` + `styles.module.css`.
- Nenhum componente deve ultrapassar ~150 linhas; extrair subcomponentes quando necessário.
- Conteúdo textual/dados **nunca** hardcoded dentro do JSX de componente — sempre importado de
  `/data`.

## 4. Convenções de código

- **Nomenclatura:** componentes em `PascalCase`, funções/variáveis em `camelCase`, arquivos de
  dados em `camelCase.ts`, classes CSS em `kebab-case` (dentro de CSS Modules).
- **HTML semântico obrigatório**: usar `header`, `nav`, `main`, `section`, `article`, `footer`,
  `figure`. Nunca `div` genérica onde existir tag semântica equivalente.
- **Sem estilo inline** (`style={{}}`) exceto para valores 100% dinâmicos calculados em runtime.
- **Sem `!important`** em CSS.
- **Sem `any`** em TypeScript (se aplicável) sem justificativa em comentário.
- Todo texto visível vem de `/data` — string literal solta no JSX é code smell.
- Imagens de conteúdo (logos de clientes, ícones) ficam em `/public/img/<secao>/`.

## 5. Padrão de commits

Seguir **Conventional Commits**:

```
<tipo>(<escopo opcional>): <descrição curta no imperativo>
```

Tipos permitidos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`.

Exemplos:
- `feat(hero): adiciona vídeo institucional com overlay`
- `fix(newsletter): corrige validação de e-mail no form`
- `docs(readme): atualiza instruções de instalação`
- `style(footer): ajusta espaçamento conforme design_system`
- `chore(deps): atualiza next para versão mais recente`

Regras:
- Descrição em português, minúscula, sem ponto final, até ~72 caracteres.
- Um commit = uma mudança logicamente coesa (evitar commits "gigantes" misturando seções
  diferentes).
- Corpo do commit (opcional) explica o *porquê*, não o *o quê* (o diff já mostra o quê).

## 6. Branches e fluxo

- `main`: sempre estável/deployável.
- `feature/<nome-curto>`: uma branch por seção ou funcionalidade (ex.: `feature/header`,
  `feature/noticias-carrossel`).
- Pull Request obrigatório para mesclar em `main`, mesmo em projeto solo — serve como checkpoint
  de revisão.
- PR deve incluir: descrição do que mudou, screenshot (mobile + desktop) quando alterar UI.

## 7. Scripts npm esperados

```
npm run dev      # ambiente local
npm run build    # build de produção
npm run start    # servir build de produção
npm run lint     # ESLint
```

## 8. Definição de "Pronto" (Definition of Done)

Uma seção/componente só é considerado pronto quando:
- [ ] Corresponde ao layout descrito em `design_system.md` (cores, tipografia, espaçamento).
- [ ] Responsivo nos breakpoints definidos (mobile, tablet, desktop).
- [ ] Sem erros/warnings no console do navegador.
- [ ] Sem erros/warnings no build e no lint.
- [ ] Imagens com `alt`; inputs com `label`; foco visível em elementos interativos.
- [ ] Conteúdo confere com o real (sem textos "lorem ipsum" ou inventados) em produção.

## 9. Regras específicas para agentes de IA

- **Não** adicionar dependências novas (libs de UI, animação, ícones) sem que isso esteja
  explicitamente pedido — preferir SVG inline e CSS puro.
- **Não** criar banco de dados, API route ou autenticação — fora de escopo desta fase.
- **Não** inventar conteúdo (textos institucionais, depoimentos, notícias, clientes) — usar
  apenas o que está em `/data`, alimentado a partir do conteúdo real do site
  (ver `regras_de_negocio.md` para contexto de negócio).
- **Sempre** consultar `design_system.md` antes de definir qualquer valor visual novo.
- Em caso de ambiguidade entre uma tela enviada e o texto real extraído do site, priorizar o
  **texto/dado real** (mais confiável que a leitura visual do screenshot) e sinalizar a
  divergência em vez de decidir silenciosamente.
- Ao final de qualquer tarefa, rodar o checklist da seção 8 antes de reportar como concluído.

## 10. Fora de escopo (por ora)

- Banco de dados / persistência.
- Autenticação ("Fazer Login" é apenas visual nesta fase).
- Páginas internas (Empresa, Notícias individuais, Software, Serviços, Clientes, Contato) —
  apenas a Home é construída neste momento.
- Envio real de e-mail no formulário de newsletter.
- Testes automatizados (avaliar introdução em fase futura, quando houver back-end).
