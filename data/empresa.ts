export interface RedeSocial {
  nome: string;
  url: string;
  ariaLabel: string;
}

export interface NavItem {
  rotulo: string;
  href: string;
}

export const DADOS_EMPRESA = {
  nome: "CTMGEO - Soluções em Geotecnologias",
  razaoSocial: "CTMGEO",
  slogan: "CTMGEO: sua cidade inteligente!",
  subtitulo: "CTMGEO - Soluções em Geotecnologias",
  fundacao: "desde 2013",
  endereco: {
    rua: "Rua Uruguai, 969",
    bairro: "Centro",
    cidade: "Cascavel",
    uf: "PR",
    cep: "85805-010",
    completo: "Rua Uruguai, 969 - Centro - Cascavel - PR, CEP 85805-010",
  },
  contato: {
    telefone: "(45) 99129-7516",
    telefoneHref: "tel:+5545991297516",
    whatsapp: "(45) 99129-7516",
    whatsappHref: "https://wa.me/5545991297516",
    email: "comercial@ctmgeo.com.br",
    emailHref: "mailto:comercial@ctmgeo.com.br",
  },
  chamadaPrincipal:
    "A maneira mais eficaz de aumentar a arrecadação do município! Confira nossos softwares e serviços",
  videoHero: {
    youtubeId: "kuDDvCY31hY",
    titulo: "CTMGEO: sua cidade inteligente!",
    subtitulo: "CTMGEO - Soluções em Geotecnologias",
  },
  topbar: {
    sobreLink: { rotulo: "Sobre a CTMGEO", href: "#empresa" },
    contatoLink: { rotulo: "Entre em contato!", href: "#contato" },
    loginLink: { rotulo: "Fazer Login", href: "#login" },
  },
  navegacao: [
    { rotulo: "Home", href: "#hero" },
    { rotulo: "Empresa", href: "#empresa" },
    { rotulo: "Notícias", href: "#noticias" },
    { rotulo: "Software", href: "#software" },
    { rotulo: "Serviços", href: "#servicos" },
    { rotulo: "Clientes", href: "#clientes" },
    { rotulo: "Contato", href: "#contato" },
  ] as NavItem[],
  redesSociais: [
    {
      nome: "Facebook",
      url: "https://facebook.com/ctmgeo",
      ariaLabel: "Acesse nosso perfil no Facebook",
    },
    {
      nome: "Instagram",
      url: "https://instagram.com/ctmgeo",
      ariaLabel: "Acesse nosso perfil no Instagram",
    },
    {
      nome: "LinkedIn",
      url: "https://linkedin.com/company/ctmgeo",
      ariaLabel: "Acesse nossa página no LinkedIn",
    },
  ] as RedeSocial[],
  ctaBanner: {
    titulo:
      "A maneira mais eficaz de aumentar a arrecadação do município! Confira nossos softwares e serviços",
    botaoTexto: "Entre em Contato",
    botaoHref: "#contato",
    pilares: [
      {
        titulo: "Estratégia",
        iconeSrc: "/img/cta/icon_estrategia.png",
        descricao: "Direcionamento analítico focado em metas e sustentabilidade fiscal.",
      },
      {
        titulo: "Planejamento",
        iconeSrc: "/img/cta/icon_planejamento.png",
        descricao: "Estruturação metódica de processos cadastrais e territoriais.",
      },
      {
        titulo: "Execução",
        iconeSrc: "/img/cta/icon_execution.png",
        descricao: "Tecnologia de ponta e equipe especializada em campo e em nuvem.",
      },
    ],
    nossoTrabalho: {
      titulo: "Nosso Trabalho",
      imagemSrc: "/img/cta/nosso-trabalho.png",
      href: "#servicos",
    },
  },
  newsletter: {
    titulo: "CADASTRE-SE PARA RECEBER NOVIDADES!",
    texto:
      "Mantenha-se atualizado sobre as novidades de nossos sistemas e notícias do mundo Geo!",
    placeholder: "Endereço de e-mail",
    botaoTexto: "Enviar",
    mensagemSucesso: "Sucesso! Você foi adicionado a nossa lista de e-mails.",
  },
  linksLegais: [
    { rotulo: "LGPD", href: "#lgpd" },
    { rotulo: "Termos de Uso", href: "#termos" },
    { rotulo: "Fale conosco", href: "#contato" },
  ],
  copyright: `© ${new Date().getFullYear()} CTMGEO - Soluções em Geotecnologias. Todos os direitos reservados.`,
};
