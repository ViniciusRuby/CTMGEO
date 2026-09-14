export interface ClienteItem {
  id: string;
  nome: string;
  logoSrc: string;
  alt: string;
  estado?: string;
}

export const CLIENTES_CONFIG = {
  tituloSecao: "Nossos Clientes",
  seloAutoridade: "Mais de 40 municípios atendidos",
  descricao:
    "Prefeituras e autarquias municipais que confiam na tecnologia e na engenharia da CTMGEO para transformar a gestão pública.",
  lista: [
    {
      id: "foz-habita",
      nome: "Foz Habita",
      logoSrc: "/img/clientes/fozhabita.png",
      alt: "Logotipo da Foz Habita - Instituto de Habitação de Foz do Iguaçu",
      estado: "PR",
    },
    {
      id: "cascavel",
      nome: "Cascavel",
      logoSrc: "/img/clientes/cascavel.png",
      alt: "Brasão da Prefeitura Municipal de Cascavel",
      estado: "PR",
    },
    {
      id: "marmeleiro",
      nome: "Marmeleiro",
      logoSrc: "/img/clientes/marmeleiro.png",
      alt: "Brasão da Prefeitura Municipal de Marmeleiro",
      estado: "PR",
    },
    {
      id: "campina-grande",
      nome: "Campina Grande",
      logoSrc: "/img/clientes/campina-grande.png",
      alt: "Brasão da Prefeitura Municipal de Campina Grande",
      estado: "PB",
    },
    {
      id: "guaira",
      nome: "Guaíra",
      logoSrc: "/img/clientes/guaira.png",
      alt: "Brasão da Prefeitura Municipal de Guaíra",
      estado: "PR",
    },
    {
      id: "bonito",
      nome: "Bonito",
      logoSrc: "/img/clientes/bonito.png",
      alt: "Brasão da Prefeitura Municipal de Bonito",
      estado: "MS",
    },
    {
      id: "nioaque",
      nome: "Nioaque",
      logoSrc: "/img/clientes/nioaque.png",
      alt: "Brasão da Prefeitura Municipal de Nioaque",
      estado: "MS",
    },
    {
      id: "sao-lourenco",
      nome: "São Lourenço",
      logoSrc: "/img/clientes/saolourenco.png",
      alt: "Brasão da Prefeitura Municipal de São Lourenço",
      estado: "MG",
    },
  ] as ClienteItem[],
};
