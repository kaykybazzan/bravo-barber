import { clientConfig } from "@/config/client.config";

export const companyContent = {
  eyebrow: "Barber club · Timbó",
  headline: "Precisão é um ritual.",
  subheadline:
    "Corte, barba e grooming com leitura de estilo, técnica limpa e uma experiência que respeita o seu tempo.",
  aboutTitle: "Não é só sobre cortar cabelo.",
  aboutLead:
    "É sobre entender proporção, rotina e identidade antes de encostar a máquina.",
  aboutParagraphs: [
    "A Bravo nasce como um conceito de barbearia contemporânea: menos excesso, mais intenção. Cada serviço começa entendendo o que funciona para o rosto, o cabelo e a rotina de quem senta na cadeira.",
    "O espaço, a comunicação e o atendimento seguem a mesma lógica: materiais honestos, fotografia forte, processo claro e nenhum ruído entre escolher um serviço e marcar um horário.",
    "Este projeto demonstrativo foi construído sobre a plataforma Nexora para mostrar como uma barbearia local pode ter presença digital com linguagem de marca, velocidade e conversão sem parecer um template genérico.",
  ],
  mission: "Fazer cada detalhe trabalhar a favor da sua identidade.",
  differentiators: ["Consulta antes do corte", "Processo claro", "Acabamento preciso", "Agendamento direto"],
  ctaTitle: "Seu próximo corte começa antes da cadeira.",
  ctaText: "Escolha o serviço, indique o melhor período e abra uma mensagem pronta no WhatsApp.",
  cityLine: `${clientConfig.address.city} · ${clientConfig.address.state}`,
} as const;
