export interface DiferencialItem {
  id: string;
  titulo: string;
  texto: string;
  tipoIcone: "integracao" | "tempo-real" | "equipe" | "ortofoto" | "nuvem" | "plano-diretor";
}

export interface CardDestaque {
  badge: string;
  titulo: string;
  texto: string;
  ctaTexto: string;
  ctaHref: string;
}

export const DIFERENCIAIS_LISTA: DiferencialItem[] = [
  {
    id: "integracao",
    titulo: "Integração de Sistemas",
    texto: "Fazemos a integração entre SigWEB e o sistema utilizado pela Prefeitura Municipal",
    tipoIcone: "integracao",
  },
  {
    id: "tempo-real",
    titulo: "Acompanhamento em Tempo Real",
    texto: "A Prefeitura Municipal tem, em tempo real, o acompanhamento do andamento dos trabalhos",
    tipoIcone: "tempo-real",
  },
  {
    id: "equipe",
    titulo: "Equipe Especializada",
    texto: "Profissionais formados com anos no mercado de Geoprocessamento",
    tipoIcone: "equipe",
  },
  {
    id: "ortofotos",
    titulo: "Ortofotos Atualizadas",
    texto: "A ortofoto da sua cidade atualizada - ano a ano!",
    tipoIcone: "ortofoto",
  },
  {
    id: "nuvem",
    titulo: "Armazenamento na nuvem",
    texto: "Não se preocupe com espaço ou servidores - nós nos preocupamos por você!",
    tipoIcone: "nuvem",
  },
  {
    id: "plano-diretor",
    titulo: "Plano Diretor",
    texto: "Formulação e implementação de Plano Diretor para municípios",
    tipoIcone: "plano-diretor",
  },
];

export const CARD_DESTAQUE_LATERAL: CardDestaque = {
  badge: "e mais...",
  titulo: "Aplicativo para o Cidadão",
  texto:
    "Permita que os munícipes enviem as solicitações através de seu celular, evitando ligações e enviando informações mais precisas, com fotos georreferenciadas, enviando a equipe de campo para o local exato!",
  ctaTexto: "leia mais",
  ctaHref: "#software",
};
