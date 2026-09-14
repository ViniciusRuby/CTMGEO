# Prompt — Geração da Landing Page CTMGEO (Next.js)

> **Como usar:** cole este prompt em um agente de codificação de IA (ex.: Claude Code) com
> acesso, no mesmo repositório, aos arquivos `design_system.md` e `agents.md`. O agente deve
> lê-los antes de gerar qualquer código — eles são a fonte da verdade para estilo e padrões
> técnicos, e não devem ser repetidos aqui (para economizar tokens).

## Papel
Você é um(a) engenheiro(a) front-end sênior. Construa a landing page institucional da CTMGEO
(empresa de geotecnologias para prefeituras) como projeto Next.js.

## Regras não negociáveis
1. **Stack:** Next.js (App Router) + React + CSS puro (CSS Modules). Sem Tailwind, sem UI kit,
   sem banco de dados, sem API routes, sem autenticação, sem CMS.
2. **Escopo:** uma única rota (`/`), 100% estática. Nenhum fetch externo em runtime.
3. **Estilo:** siga `design_system.md` à risca — não crie cor, fonte, espaçamento ou breakpoint
   novo. Se faltar um token, pare e pergunte em vez de inventar.
4. **Padrões de código:** siga `agents.md` (estrutura de pastas, nomenclatura, commits, lint).
5. **HTML semântico:** `header`, `nav`, `main`, `section`, `article`, `footer`. Mobile-first,
   responsivo de 320px a 1440px+.
6. **Conteúdo:** use apenas os dados da seção "Conteúdo real" abaixo. Não invente textos,
   depoimentos, clientes ou notícias.
7. **Imagens:** use `next/image` com `alt` descritivo; ícones como SVG inline (sem ícone-fonte).
8. **Acessibilidade:** contraste mínimo AA, foco visível em elementos interativos, `label`
   associado a todo input.
9. **Sem back-end real:** o formulário de newsletter deve simular o estado de sucesso
   ("Sucesso! Você foi adicionado a nossa lista de e-mails.") via estado local do React,
   sem submissão de fato.

## Estrutura da página (ordem exata das seções)
1. **Header** — topbar (link "Sobre a CTMGEO", "Entre em contato!", telefone, WhatsApp,
   "Fazer Login") + nav principal (Home, Empresa, Notícias, Software, Serviços, Clientes,
   Contato) + ícones sociais (Facebook, Instagram, LinkedIn).
2. **Hero** — vídeo institucional (embed YouTube, `id: kuDDvCY31hY`) com overlay de título
   "CTMGEO: sua cidade inteligente!" e subtítulo "CTMGEO - Soluções em Geotecnologias".
3. **Banner CTA (azul)** — chamada + botão "Entre em Contato" + 3 ícones em linha (Estratégia,
   Planejamento, Execução) + card/link "Nosso Trabalho".
4. **Diferenciais** — grid de 6 cards (ícone + título + texto curto) + card lateral de destaque
   "e mais..." com CTA "leia mais".
5. **Clientes** — título + selo "Mais de 40 municípios atendidos" + grid/carrossel de logos de
   prefeituras.
6. **Notícias** — grid/carrossel de cards (badge de data dia/mês + título + resumo + "Leia
   mais") + link "Ver outras notícias".
7. **Depoimentos** — carrossel/lista de citações de clientes (aspas + nome + prefeitura).
8. **Newsletter** — form de e-mail com botão "Enviar" e estado de sucesso.
9. **Footer** — dados da empresa, endereço, telefone/WhatsApp, e-mail, redes sociais, links
   legais (LGPD, Termos de Uso, Fale conosco), copyright.

## Conteúdo real (não alterar — copiado do site oficial)

**Empresa:** CTMGEO - Soluções em Geotecnologias · Rua Uruguai, 969 - Centro - Cascavel - PR,
CEP 85805-010 · Tel/WhatsApp (45) 99129-7516 · comercial@ctmgeo.com.br · desde 2013.

**Chamada principal:** "A maneira mais eficaz de aumentar a arrecadação do município! Confira
nossos softwares e serviços"

**Diferenciais (6 cards):**
| Título | Texto |
|---|---|
| Integração de Sistemas | Fazemos a integração entre SigWEB e o sistema utilizado pela Prefeitura Municipal |
| Acompanhamento em Tempo Real | A Prefeitura Municipal tem, em tempo real, o acompanhamento do andamento dos trabalhos |
| Equipe Especializada | Profissionais formados com anos no mercado de Geoprocessamento |
| Ortofotos Atualizadas | A ortofoto da sua cidade atualizada - ano a ano! |
| Armazenamento na nuvem | Não se preocupe com espaço ou servidores - nós nos preocupamos por você! |
| Plano Diretor | Formulação e implementação de Plano Diretor para municípios |

**Card lateral "e mais...":** Aplicativo para o Cidadão — "Permita que os munícipes enviem as
solicitações através de seu celular, evitando ligações e enviando informações mais precisas,
com fotos georreferenciadas, enviando a equipe de campo para o local exato!"

**Clientes (logos, texto alternativo):** Foz Habita, Cascavel, Marmeleiro, Campina Grande,
Guaíra, Bonito, Nioaque, São Lourenço. Selo: "Mais de 40 municípios atendidos".

**Notícias (6 mais recentes, data · título · resumo):**
| Data | Título | Resumo |
|---|---|---|
| 18 SET | Aprimore a iluminação pública do seu município | Qualquer problema relacionado à iluminação pública pode ser resolvido com mais praticidade a partir do georreferenciamento. |
| 02 ABR | CTMGEO aplica REURB em Mangueirinha (PR) | Esse processo é benéfico aos cidadãos e à gestão municipal |
| 15 SET | Como a tecnologia da informação pode inovar o seu município | A tecnologia da informação (T.I.) faz toda diferença na gestão municipal. |
| 15 AGO | Experiência jurídica que inova o Código Tributário Municipal | O Código Tributário Municipal estabelece os tributos que o município recolhe e explica sua destinação. |
| 15 JUL | Em Cascavel, uma empresa pode ser formalizada em apenas 5 minutos | A nossa amada Cascavel conquistou um marco importante no cenário empresarial brasileiro. |
| 10 JUN | 3 diferenciais do SigWEB desenvolvido pela CTMGEO | O SigWEB (Sistema de Informação Geográfica) é um software elaborado especialmente para aprimorar a gestão municipal. |

**Depoimentos:**
1. "Com o sistema SigWEB, fizemos o recadastramento imobiliário de forma transparente e fácil.
   Excelente suporte e acompanhamento ao cliente" — **Benjamin Fernandes**, Prefeitura Municipal
   de Guaíra - PR
2. "Reconheço esse recadastramento como mais amplo e abrangente realizado até hoje em Bonito" —
   **Osmar Teixeira**, Prefeitura Municipal de Bonito - MS

**Newsletter:** título "CADASTRE-SE PARA RECEBER NOVIDADES!" · texto "Mantenha-se atualizado
sobre as novidades de nossos sistemas e notícias do mundo Geo!" · placeholder "Endereço de
e-mail" · botão "Enviar" · mensagem de sucesso "Sucesso! Você foi adicionado a nossa lista de
e-mails."

## Entregáveis esperados
- Estrutura de arquivos conforme `agents.md`.
- Componentes isolados e reutilizáveis: `Header`, `Hero`, `CtaBanner`, `DiferenciaisSection`,
  `ClientesSection`, `NoticiasSection`, `DepoimentosSection`, `NewsletterForm`, `Footer`.
- `README.md` com instruções de instalação e execução (`npm install`, `npm run dev`).
- Zero erros/warnings de build e lint.

## Checklist final (o agente deve verificar antes de encerrar)
- [ ] Build (`next build`) passa sem erros nem warnings.
- [ ] Nenhuma cor, fonte ou espaçamento fora dos tokens do `design_system.md`.
- [ ] Nenhum conteúdo além do listado em "Conteúdo real".
- [ ] Layout funcional em 320px, 768px, 1024px e 1440px.
- [ ] Todas as imagens com `alt`; todo input com `label`.
- [ ] Commits seguem o padrão definido em `agents.md`.
