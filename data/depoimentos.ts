export interface DepoimentoItem {
  id: string;
  citacao: string;
  autor: string;
  cargo: string;
  iniciais: string;
  municipio: string;
}

export const DEPOIMENTOS_CONFIG = {
  tituloSecao: "O que dizem nossos clientes",
  subtitulo:
    "A satisfação de gestores municipais que modernizaram sua gestão e arrecadação com a CTMGEO.",
  lista: [
    {
      id: "guaira",
      citacao:
        "Com o sistema SigWEB, fizemos o recadastramento imobiliário de forma transparente e fácil. Excelente suporte e acompanhamento ao cliente",
      autor: "Benjamin Fernandes",
      cargo: "Prefeitura Municipal de Guaíra - PR",
      iniciais: "BF",
      municipio: "Guaíra - PR",
    },
    {
      id: "bonito",
      citacao:
        "Reconheço esse recadastramento como mais amplo e abrangente realizado até hoje em Bonito",
      autor: "Osmar Teixeira",
      cargo: "Prefeitura Municipal de Bonito - MS",
      iniciais: "OT",
      municipio: "Bonito - MS",
    },
  ] as DepoimentoItem[],
};
