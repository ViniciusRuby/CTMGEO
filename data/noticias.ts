export interface NoticiaItem {
  id: string;
  dia: string;
  mes: string;
  dataCompleta: string;
  titulo: string;
  resumo: string;
  slug: string;
}

export const NOTICIAS_LISTA: NoticiaItem[] = [
  {
    id: "iluminacao-publica",
    dia: "18",
    mes: "SET",
    dataCompleta: "18 de Setembro",
    titulo: "Aprimore a iluminação pública do seu município",
    resumo:
      "Qualquer problema relacionado à iluminação pública pode ser resolvido com mais praticidade a partir do georreferenciamento.",
    slug: "#noticias",
  },
  {
    id: "reurb-mangueirinha",
    dia: "02",
    mes: "ABR",
    dataCompleta: "02 de Abril",
    titulo: "CTMGEO aplica REURB em Mangueirinha (PR)",
    resumo: "Esse processo é benéfico aos cidadãos e à gestão municipal",
    slug: "#noticias",
  },
  {
    id: "tecnologia-inovar-municipio",
    dia: "15",
    mes: "SET",
    dataCompleta: "15 de Setembro",
    titulo: "Como a tecnologia da informação pode inovar o seu município",
    resumo: "A tecnologia da informação (T.I.) faz toda diferença na gestão municipal.",
    slug: "#noticias",
  },
  {
    id: "codigo-tributario-municipal",
    dia: "15",
    mes: "AGO",
    dataCompleta: "15 de Agosto",
    titulo: "Experiência jurídica que inova o Código Tributário Municipal",
    resumo:
      "O Código Tributário Municipal estabelece os tributos que o município recolhe e explica sua destinação.",
    slug: "#noticias",
  },
  {
    id: "cascavel-empresa-5-minutos",
    dia: "15",
    mes: "JUL",
    dataCompleta: "15 de Julho",
    titulo: "Em Cascavel, uma empresa pode ser formalizada em apenas 5 minutos",
    resumo:
      "A nossa amada Cascavel conquistou um marco importante no cenário empresarial brasileiro.",
    slug: "#noticias",
  },
  {
    id: "diferenciais-sigweb",
    dia: "10",
    mes: "JUN",
    dataCompleta: "10 de Junho",
    titulo: "3 diferenciais do SigWEB desenvolvido pela CTMGEO",
    resumo:
      "O SigWEB (Sistema de Informação Geográfica) é um software elaborado especialmente para aprimorar a gestão municipal.",
    slug: "#noticias",
  },
];
