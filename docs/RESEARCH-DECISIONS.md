# Pesquisa aplicada — BRAVO BARBER CLUB

Data da pesquisa: 01/09/2026.

## O que foi aplicado

1. **Server Components por padrão.** A homepage e páginas editoriais são renderizadas no servidor; apenas o configurador de agendamento usa `use client`. Isso reduz a fronteira de hidratação e o JavaScript inicial.
2. **Sem dependência de biblioteca de animação.** O projeto usa CSS e progressive enhancement. `prefers-reduced-motion` desativa movimento não essencial.
3. **Imagem como conteúdo, não decoração pesada.** `next/image`, `sizes` específicos por composição, AVIF/WebP habilitados e hero marcado para preload.
4. **Sem carrossel obrigatório.** A galeria usa CSS columns/masonry e o preview usa grid editorial, reduzindo dependências e problemas de interação.
5. **Conversão acima de espetáculo.** CTA de agendamento aparece no hero, seção dedicada e barra mobile; o conteúdo continua legível sem animações.
6. **Dados fictícios protegidos.** `NEXT_PUBLIC_DEMO_MODE=true` mantém o projeto fora de indexação até a troca por dados reais.
7. **SEO e sharing.** Metadata API, Open Graph dinâmico, sitemap, robots e JSON-LD `HealthAndBeautyBusiness` preservados da plataforma Nexora.
8. **Segurança.** CSP, HSTS, Permissions Policy, X-Frame-Options e outras proteções da base foram preservadas e ajustadas apenas para imagens do Pexels.

## Fontes técnicas consultadas

- Next.js Production Checklist: https://nextjs.org/docs/app/guides/production-checklist
- Next.js Image Optimization: https://nextjs.org/docs/app/getting-started/images
- Next.js Metadata: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- Next.js Accessibility: https://nextjs.org/docs/architecture/accessibility
- web.dev Core Web Vitals: https://web.dev/articles/vitals
- Reddit /r/nextjs — common performance issues (2026): https://www.reddit.com/r/nextjs/comments/1tn4r8h/
- Reddit /r/reactjs — Next performance discussion (2026): https://www.reddit.com/r/reactjs/comments/1tn4scq/
- Reddit /r/webdev — over-designed websites: https://www.reddit.com/r/webdev/comments/1bdr1nj/
- Reddit /r/webdev — cool sites that do not convert: https://www.reddit.com/r/webdev/comments/1jeqbfn/
- Reddit /r/webdev — website designs getting out of hand: https://www.reddit.com/r/webdev/comments/1p73wqr/
