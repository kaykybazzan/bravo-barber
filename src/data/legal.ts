import { clientConfig } from "@/config/client.config";

/**
 * MODELOS-BASE — NÃO SÃO ACONSELHAMENTO JURÍDICO.
 * Os textos abaixo são uma base técnica para a demonstração. Antes de um deploy
 * comercial, devem ser revisados por profissional habilitado e ajustados às
 * operações, fornecedores, retenção e comarca efetivamente adotados pelo cliente.
 */

const { company, contact, legal, address } = clientConfig;
const controller = legal.controllerName || company.legalName || company.name;
const dpo = legal.dpoEmail || contact.email;

export interface LegalBlock {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocument {
  title: string;
  description: string;
  updatedAt: string;
  intro: string;
  blocks: LegalBlock[];
}

export const privacyPolicy: LegalDocument = {
  title: "Política de Privacidade",
  description: `Como a ${company.name} trata os dados pessoais coletados neste site.`,
  updatedAt: legal.lastReviewed,
  intro: `Esta política descreve como ${controller} coleta, usa e protege dados pessoais neste site, conforme a Lei nº 13.709/2018 (LGPD).`,
  blocks: [
    {
      heading: "Quem é o controlador",
      paragraphs: [
        `${controller}, com atendimento em ${address.city}/${address.state}, é o controlador dos dados tratados neste site. Contato para assuntos de privacidade: ${dpo}.`,
      ],
    },
    {
      heading: "Quais dados coletamos",
      paragraphs: ["Coletamos apenas o necessário para responder a você e operar o site."],
      bullets: [
        "Dados que você informa no formulário de contato: nome, telefone, e-mail e a mensagem enviada.",
        "Dados de navegação coletados por cookies de medição, quando você autoriza: páginas visitadas, origem do acesso e tipo de dispositivo.",
        "Registros técnicos de segurança, como endereço IP, mantidos pelo tempo necessário para prevenir abuso.",
      ],
    },
    {
      heading: "Para que usamos",
      paragraphs: [
        "Usamos os dados para responder solicitações, elaborar orçamentos, prestar o serviço contratado e melhorar o conteúdo do site. Não vendemos dados pessoais.",
      ],
    },
    {
      heading: "Base legal",
      paragraphs: [
        "O tratamento se apoia no consentimento (formulário e cookies de medição), na execução de contrato ou procedimentos preliminares (orçamentos e serviços) e no legítimo interesse para segurança do site.",
      ],
    },
    {
      heading: "Compartilhamento",
      paragraphs: [
        "Podemos compartilhar dados somente com fornecedores necessários à hospedagem, segurança, atendimento e operação dos recursos efetivamente habilitados no site, além das hipóteses exigidas por autoridade competente.",
      ],
    },
    {
      heading: "Por quanto tempo guardamos",
      paragraphs: [
        "Mensagens de contato são mantidas somente pelo período necessário ao atendimento e ao cumprimento das obrigações legais aplicáveis; depois disso são eliminadas ou anonimizadas conforme a política de retenção adotada pelo controlador.",
      ],
    },
    {
      heading: "Seus direitos",
      paragraphs: [
        `Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação e revogação do consentimento. Basta escrever para ${dpo}. Respondemos no prazo previsto em lei.`,
      ],
    },
    {
      heading: "Segurança",
      paragraphs: [
        "Adotamos medidas técnicas e administrativas para proteger os dados contra acesso não autorizado, perda ou alteração. Nenhum sistema é infalível; em caso de incidente relevante, comunicaremos os titulares e a ANPD conforme a lei.",
      ],
    },
  ],
};

export const cookiePolicy: LegalDocument = {
  title: "Política de Cookies",
  description: "Quais cookies este site usa e como controlar suas preferências.",
  updatedAt: legal.lastReviewed,
  intro:
    "Cookies são pequenos arquivos gravados no seu navegador. Este site usa o mínimo necessário e pede sua autorização para os que não são essenciais.",
  blocks: [
    {
      heading: "Cookies essenciais",
      paragraphs: [
        "Necessários para o funcionamento básico do site, como lembrar sua escolha no aviso de cookies. Não podem ser desativados sem prejudicar a navegação.",
      ],
    },
    {
      heading: "Cookies de medição",
      paragraphs: [
        "Quando ferramentas de medição estiverem efetivamente habilitadas e forem autorizadas, esses cookies ajudam a entender quais páginas são mais úteis. As ferramentas ativas devem ser refletidas nesta política antes da publicação comercial.",
      ],
    },
    {
      heading: "Como controlar",
      paragraphs: [
        "Você escolhe no aviso exibido na primeira visita e pode alterar a decisão a qualquer momento limpando os dados do site no seu navegador. Também é possível bloquear cookies diretamente nas configurações do navegador.",
      ],
    },
    {
      heading: "Cookies de terceiros",
      paragraphs: [
        "Conteúdos incorporados, como o mapa de localização, podem gravar cookies próprios sob a política do respectivo fornecedor.",
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  title: "Termos de Uso",
  description: `Condições para uso do site da ${company.name}.`,
  updatedAt: legal.lastReviewed,
  intro: `Ao navegar neste site você concorda com as condições abaixo, mantidas por ${controller}.`,
  blocks: [
    {
      heading: "Conteúdo do site",
      paragraphs: [
        "As informações têm caráter informativo e podem ser atualizadas sem aviso. Valores, prazos e disponibilidade são confirmados no orçamento formal.",
      ],
    },
    {
      heading: "Propriedade intelectual",
      paragraphs: [
        "Marca, textos, imagens e código são protegidos e não podem ser reproduzidos sem autorização por escrito.",
      ],
    },
    {
      heading: "Uso adequado",
      paragraphs: [
        "É vedado usar o site para fins ilícitos, tentar obter acesso não autorizado, enviar conteúdo abusivo ou automatizar requisições que prejudiquem a disponibilidade.",
      ],
    },
    {
      heading: "Limitação de responsabilidade",
      paragraphs: [
        "Nos limites permitidos pela legislação aplicável, não respondemos por indisponibilidades temporárias, conteúdos de terceiros acessados por links ou decisões tomadas exclusivamente com base em conteúdo meramente informativo do site.",
      ],
    },
    {
      heading: "Foro",
      paragraphs: [
        `A definição de foro deve observar a legislação aplicável e as regras de proteção do consumidor. Quando juridicamente cabível, utiliza-se a comarca de ${address.city}/${address.state}.`,
      ],
    },
  ],
};
