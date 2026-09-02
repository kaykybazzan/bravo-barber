# Antes de publicar — Bravo Barber Club

Este pacote é uma demonstração visual e técnica. Para transformá-lo em site comercial, faça a substituição por dados oficiais antes de retirar o `noindex`.

## Conteúdo obrigatório

- substituir `Bravo Barber Club` pelo nome oficial;
- configurar domínio final em `src/config/client.config.ts`;
- validar telefone e WhatsApp;
- validar endereço, cidade, CEP e horários;
- confirmar serviços reais, descrições e duração;
- não publicar preço, avaliação, número de clientes ou depoimento sem fonte verificável;
- substituir fotografias principais por material próprio/autorizado quando possível;
- revisar política de privacidade, cookies e termos com profissional habilitado para a operação real.

## Produção

1. Instale dependências com `npm install`.
2. Rode `npm run quality:fast`.
3. Rode `npm run build`.
4. Configure variáveis de ambiente no provedor.
5. Só então defina `NEXT_PUBLIC_DEMO_MODE=false`.
6. Rode `npm run audit:client -- --strict` antes do deploy definitivo.
7. Verifique manualmente desktop, tablet e celular reais.
8. Execute acessibilidade/Playwright/Lighthouse quando o perfil de QA estiver instalado.

## Mídia

A lista das 30 imagens e suas fontes está em `FONTES-DAS-FOTOS.csv`. Licenças e termos de terceiros podem mudar; reconfirme no momento da publicação.
