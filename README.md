# BRAVO BARBER CLUB — Nexora Signature Build

Projeto demonstrativo de uma barbearia premium construído em **Next.js 16.3.3 + React 19.2.8 + TypeScript**, usando a Nexora Website Platform v3 como motor técnico e uma camada visual exclusiva criada em `src/client/`.

O objetivo não é funcionar como um template genérico de barbearia. O projeto usa composição editorial, fotografia em escala, contraste tipográfico, navegação direta e conversão orientada a agendamento, preservando performance, acessibilidade, SEO e os quality gates da plataforma.

## Executar no Windows

Dê dois cliques em:

```text
INICIAR-SITE.bat
```

Na primeira execução o arquivo instala as dependências e inicia `http://localhost:3000`.

Ou pelo terminal:

```bash
npm install
npm run dev
```

## Principais rotas

- `/` — experiência editorial completa;
- `/servicos` — menu de serviços;
- `/servicos/[slug]` — detalhe individual;
- `/galeria` — galeria com 30 referências visuais;
- `/sobre` — manifesto e posicionamento;
- `/faq` — dúvidas frequentes + schema;
- `/contato` — contato e agendamento.

## Arquitetura especial do projeto

A infraestrutura Nexora foi preservada. A personalização exclusiva está concentrada em:

```text
src/client/barber-home.tsx
src/client/blocks.tsx
src/components/barber/
src/styles/barber.css
src/data/barber-images.ts
src/data/services.ts
src/data/gallery.ts
src/config/client.config.ts
```

A home continua sendo montada pelo `PageComposer`, portanto o Core não recebeu condicionais específicas para este cliente.

## Performance e UX

- Server Components por padrão;
- apenas o configurador de agendamento exige `use client`;
- `next/image` com `sizes` por contexto e formatos AVIF/WebP;
- hero preparado para preload;
- sem biblioteca de animação;
- progressive enhancement em CSS;
- `prefers-reduced-motion` respeitado;
- barra de conversão mobile;
- rotas internas `/dev/*` retornam 404 em produção;
- CSP e demais cabeçalhos de segurança da Nexora preservados.

## Modo demonstração

O projeto vem com:

```env
NEXT_PUBLIC_DEMO_MODE=true
```

Nesse modo, `robots` e metadata impedem indexação. Antes de publicar para um cliente real, substitua nome, domínio, telefone, WhatsApp, endereço, horários, textos jurídicos e fotografias quando aplicável; depois altere explicitamente o modo de demonstração.

## Fotos

As 30 referências de barbearia estão centralizadas em `src/data/barber-images.ts`. A procedência está documentada em:

```text
docs/FONTES-DAS-FOTOS.csv
```

Para uso comercial final, confira a licença atual de cada fonte e priorize fotografias próprias/autorizadas da empresa.

## Validação

Quality gates que não dependem da instalação completa foram executados neste pacote:

- arquitetura Nexora: OK;
- composição: OK;
- core genérico: OK;
- presets: 21 negócios / 16 visuais / 11 templates: OK;
- matriz de presets: 21/21: OK;
- imagens locais referenciadas: OK;
- auditoria do cliente: 0 erros / 0 avisos;
- imports locais: 0 ausentes;
- parser TypeScript: 209 arquivos / 0 erros de sintaxe.

Depois de instalar as dependências no seu computador, rode a validação completa:

```bash
npm run quality:fast
npm run build
```

Para QA de navegador:

```bash
npm run setup:qa
npx playwright install chromium firefox webkit
npm run test:e2e
npm run test:a11y
npm run lighthouse
```

## Pesquisa aplicada

As decisões técnicas e as referências oficiais/fóruns consultados estão documentadas em:

```text
docs/RESEARCH-DECISIONS.md
```

## Antes de publicar

Leia `docs/ANTES-DE-PUBLICAR.md` e troque todos os dados demonstrativos por dados oficiais do cliente.
