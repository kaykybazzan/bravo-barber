import type { Service } from "@/types/content";
import { barberImage } from "./barber-images";

const remote = (index: number, alt: string, width = 1400, height = 1000) => ({
  src: barberImage(index),
  alt,
  width,
  height,
});

export const services: Service[] = [
  {
    slug: "corte-signature",
    title: "Corte Signature",
    excerpt: "Leitura de estilo, corte e acabamento com atenção a proporção, textura e rotina.",
    description: "Uma consulta rápida define direção, manutenção e acabamento. O corte é construído para funcionar no dia da visita e continuar coerente nas semanas seguintes.",
    icon: "spark",
    image: remote(0, "Barbeiro realizando corte masculino com precisão"),
    deliverables: ["Consulta de estilo", "Corte com máquina e/ou tesoura", "Acabamento de contorno", "Finalização e orientação de styling"],
    featured: true,
  },
  {
    slug: "fade-precision",
    title: "Fade Precision",
    excerpt: "Degradê limpo, transições controladas e acabamento de alta definição.",
    description: "Serviço focado em fades e cortes de contraste. A estrutura é construída em etapas para manter simetria, leitura limpa e melhor crescimento.",
    icon: "gauge",
    image: remote(1, "Fade masculino sendo executado em barbearia"),
    deliverables: ["Mapeamento de altura", "Construção do degradê", "Refino de sombras", "Contornos e acabamento"],
    featured: true,
  },
  {
    slug: "barba-ritual",
    title: "Barba Ritual",
    excerpt: "Desenho, contorno e cuidado da barba em um ritual completo.",
    description: "Alinhamento de volume, desenho de linhas e finalização confortável para valorizar o formato do rosto sem deixar o resultado artificial.",
    icon: "shield",
    image: remote(2, "Barbeiro fazendo acabamento de barba"),
    deliverables: ["Consulta de formato", "Ajuste de volume", "Contorno com precisão", "Finalização com produto"],
    featured: true,
  },
  {
    slug: "combo-club",
    title: "Club Combo",
    excerpt: "Corte e barba na mesma sessão, com linguagem visual integrada.",
    description: "A experiência completa para quem quer alinhar cabelo e barba no mesmo atendimento, preservando proporção entre os dois elementos.",
    icon: "checkCircle",
    image: remote(3, "Atendimento completo de cabelo e barba em barbearia"),
    deliverables: ["Consulta completa", "Corte", "Barba", "Styling final"],
    featured: true,
  },
  {
    slug: "tesoura-textura",
    title: "Tesoura & Textura",
    excerpt: "Movimento e forma para cabelos médios, longos ou que pedem menos máquina.",
    description: "Técnicas de tesoura para controlar peso, criar textura e preservar movimento natural. Ideal para projetos de cabelo com mais comprimento.",
    icon: "spark",
    image: remote(4, "Corte masculino com tesoura"),
    deliverables: ["Análise de caimento", "Construção de forma", "Texturização", "Finalização"],
  },
  {
    slug: "acabamento-express",
    title: "Acabamento Express",
    excerpt: "Contorno, nuca, costeleta e limpeza entre cortes.",
    description: "Manutenção rápida para recuperar definição de linhas e manter o corte organizado antes da próxima sessão completa.",
    icon: "bolt",
    image: remote(5, "Acabamento de contorno em corte masculino"),
    deliverables: ["Contorno frontal", "Costeletas", "Nuca", "Limpeza de linhas"],
  },
  {
    slug: "camuflagem",
    title: "Camuflagem",
    excerpt: "Ajuste visual discreto para fios brancos em cabelo ou barba.",
    description: "Aplicação pensada para reduzir contraste sem criar efeito de coloração pesada. O objetivo é naturalidade e baixa manutenção.",
    icon: "checkCircle",
    image: remote(6, "Barbeiro avaliando acabamento de cabelo masculino"),
    deliverables: ["Avaliação de tom", "Aplicação localizada", "Lavagem", "Finalização"],
  },
  {
    slug: "consultoria-de-estilo",
    title: "Consultoria de Estilo",
    excerpt: "Direção de corte, barba e manutenção para uma mudança mais consciente.",
    description: "Para quem quer mudar, deixar crescer ou corrigir um corte anterior. A sessão organiza referências, limitações e um plano de evolução.",
    icon: "fileText",
    image: remote(7, "Consulta de estilo masculino em barbearia"),
    deliverables: ["Leitura de referências", "Análise de formato", "Plano de corte", "Rotina de manutenção"],
  },
];

export const featuredServices = services.filter((service) => service.featured);
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
