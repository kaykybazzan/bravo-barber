"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BookingConfigurator } from "@/components/barber/BookingConfigurator";
import { clientConfig } from "@/config/client.config";
import { barberImages } from "@/data/barber-images";
import { companyContent } from "@/data/company";
import { faq } from "@/data/faq";
import { services } from "@/data/services";
import { whatsappHref } from "@/integrations/whatsapp";
import { WaveText } from "@/components/animations/wave-text";
import { HighlightsMarquee } from "@/components/animations/highlights-marquee";
import { StaggerReveal, StaggerItem } from "@/components/animations/stagger-reveal";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { WaveGroup, WaveItem } from "@/components/animations/wave-group";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { div } from "motion/react-client";

function blockId(props: Record<string, unknown>, fallback: string) {
  return typeof props.id === "string" ? props.id : fallback;
}

const transitionEase = [0.16, 1, 0.3, 1] as const;

export const BarberHeroBlock: ComponentType<Record<string, unknown>> = (props) => (
  <>
    <section className="bb-hero" id={blockId(props, "hero")} aria-labelledby="hero-title">
      <motion.div 
        className="bb-hero-media"
        initial={{ y: 50, opacity: 0, scale: 1.12 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.1,
          ease: transitionEase,
          delay: 0.1,
        }}
      >
        <Image src={barberImages[0]} alt="Barbeiro realizando atendimento em um corte masculino" fill sizes="(max-width: 780px) 100vw, 59vw" preload />
      </motion.div>
      <div className="bb-hero-grain" aria-hidden="true" />
      <div className="bb-hero-ghost" aria-hidden="true">BRAVO</div>
      <div className="bb-shell bb-hero-inner">
        <motion.div 
          className="bb-hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: transitionEase,
            delay: 0.35,
          }}
        >
          <WaveGroup>
            <WaveItem>
              <p className="bb-kicker bb-hero-kicker">BARBER CLUB · TIMBÓ</p>
            </WaveItem>
            <WaveItem>
              <motion.h1
                id="hero-title"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  ease: transitionEase,
                  delay: 0.45,
                }}
              >
                Precisão é um ritual
              </motion.h1>
            </WaveItem>
            <WaveItem>
              <motion.p
                className="bb-hero-lead"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: transitionEase,
                  delay: 0.6,
                }}
              >
                {companyContent.subheadline}
              </motion.p>
            </WaveItem>
          </WaveGroup>
          <motion.div 
            className="bb-hero-actions"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: transitionEase,
              delay: 0.7,
            }}
          >
            <ShimmerButton 
              className="bb-primary-link btn-primary" 
              background="#b8874d"
              shimmerColor="#ffffff"
              onClick={() => window.open(whatsappHref({ kind: "schedule" }), '_blank')}
            >
              Agendar horário <span aria-hidden="true">↗</span>
            </ShimmerButton>
            <Link className="bb-secondary-link" href="/servicos">Explorar serviços <span aria-hidden="true">→</span></Link>
          </motion.div>
        </motion.div>
        <motion.aside 
          className="bb-hero-side-note"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: transitionEase,
            delay: 0.75,
          }}
        >
          Uma experiência masculina contemporânea construída em torno de técnica, detalhe e identidade.
        </motion.aside>
        <motion.div 
          className="bb-hero-bottom"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: transitionEase,
            delay: 0.8,
          }}
        >
          <motion.div
            className="bb-scroll-indicator"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <div style={{ width: '2px', height: '24px', background: 'currentColor' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }} />
          </motion.div>
          <span>Corte · Barba · Grooming</span>
          <span>BRV / 26</span>
        </motion.div>
      </div>
    </section>
    <div className="bb-ticker" aria-hidden="true">
      <HighlightsMarquee />
    </div>
  </>
);

// ✅ Restaurado: BarberManifestoBlock para resolver o erro no blocks.tsx
export const BarberManifestoBlock: ComponentType<Record<string, unknown>> = (props) => (
  <section className="bb-section" id={blockId(props, "manifesto")}>
    <div className="bb-shell bb-manifesto-grid">
      <div className="bb-manifesto-media">
        <Image src={barberImages[3]} alt="Detalhe de atendimento em barbearia" fill sizes="(max-width: 780px) 100vw, 52vw" />
        <span className="bb-photo-index">01 / MANIFESTO</span>
      </div>
      
      <WaveGroup className="bb-manifesto-copy">
        <WaveItem>
          <p className="bb-kicker">NÃO É SÓ UM CORTE</p>
        </WaveItem>

        <WaveItem>
          <h2><WaveText text="Forma, rotina e identidade." /></h2>
        </WaveItem>

        <WaveItem>
          <p>O melhor resultado não começa escolhendo uma foto bonita. Começa entendendo como o cabelo cresce, quanto tempo você quer gastar arrumando e o que combina com a sua presença.</p>
        </WaveItem>

        <WaveItem>
          <StaggerReveal className="bb-manifesto-list">
            <StaggerItem><div><span>01</span><strong>Consulta antes da execução</strong></div></StaggerItem>
            <StaggerItem><div><span>02</span><strong>Técnica adaptada ao cabelo</strong></div></StaggerItem>
            <StaggerItem><div><span>03</span><strong>Acabamento sem excesso</strong></div></StaggerItem>
            <StaggerItem><div><span>04</span><strong>Orientação para manutenção</strong></div></StaggerItem>
          </StaggerReveal>
        </WaveItem>
      </WaveGroup>
    </div>
  </section>
);

export const BarberServicesBlock: ComponentType<Record<string, unknown>> = (props) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="bb-section bb-section-paper2" id={blockId(props, "servicos")}>
      <div className="bb-shell">
        <div className="bb-services-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px" }}>
          <div>
            <p className="bb-kicker" style={{ fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>02 / SERVIÇOS</p>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              <WaveText text="Escolha o seu ritual." />
            </h2>
          </div>
          <p style={{ maxWidth: "420px", color: "#555", fontSize: "1rem", lineHeight: 1.6 }}>
            Uma arquitetura de serviços simples de entender. Sem cards genéricos: cada opção deixa claro o objetivo antes de levar você ao agendamento.
          </p>
        </div>

        <div className="bb-service-list" onMouseLeave={() => setHoveredId(null)}>
          {services.slice(0, 6).map((service, index) => {
            const isHovered = hoveredId === service.slug;

            return (
              <Link
                key={service.slug}
                className="bb-service-row"
                href={`/servicos/${service.slug}`}
                onMouseEnter={() => setHoveredId(service.slug)}
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "40px 1.8fr 2.5fr 120px 30px",
                  alignItems: "center",
                  gap: "20px",
                  padding: "28px 20px",
                  borderBottom: "1px solid rgba(0,0,0,0.12)",
                  textDecoration: "none",
                  color: isHovered ? "#ffffff" : "#1a1a1a",
                  transition: "color 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                  overflow: "hidden"
                }}
              >
                {/* Fundo animado de forma lenta e suave */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      layoutId="service-highlight"
                      initial={{ opacity: 0, scaleY: 0.96 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0.96 }}
                      transition={{ 
                        duration: 0.45, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#111111",
                        zIndex: 0,
                        transformOrigin: "center"
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Textos com transição sincronizada */}
                <span className="bb-number" style={{ position: "relative", zIndex: 1, fontWeight: 600, opacity: isHovered ? 0.7 : 0.5, transition: "color 0.45s, opacity 0.45s" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="bb-service-name" style={{ position: "relative", zIndex: 1, fontSize: "1.4rem", fontWeight: 700, transition: "color 0.45s" }}>
                  {service.title}
                </span>

                <span className="bb-service-desc" style={{ position: "relative", zIndex: 1, fontSize: "0.95rem", color: isHovered ? "#cccccc" : "#666666", transition: "color 0.45s" }}>
                  {service.excerpt}
                </span>

                <span className="bb-service-meta" style={{ position: "relative", zIndex: 1, fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: isHovered ? "#b8874d" : "#888888", transition: "color 0.45s" }}>
                  Ver serviço
                </span>

                <motion.span 
                  className="bb-service-arrow" 
                  aria-hidden="true"
                  animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: "relative", zIndex: 1, fontSize: "1.2rem", color: isHovered ? "#b8874d" : "#1a1a1a" }}
                >
                  ↗
                </motion.span>
              </Link>
            );
          })}
        </div>

        <Link className="bb-services-all" href="/servicos" style={{ display: "inline-block", marginTop: "32px", textDecoration: "none", color: "#1a1a1a", fontWeight: 700, fontSize: "0.95rem" }}>
          Ver todos os serviços →
        </Link>
      </div>
    </section>
  );
};

export const BarberEditorialBlock: ComponentType<Record<string, unknown>> = (props) => (
  <section className="bb-section bb-section-dark bb-editorial" id={blockId(props, "editorial")}>
    <div className="bb-shell">
      <div className="bb-editorial-grid">
        <div className="bb-editorial-card bb-editorial-card-a"><Image src={barberImages[7]} alt="Detalhe de corte masculino" fill sizes="(max-width: 780px) 50vw, 28vw" /></div>
        <div className="bb-editorial-card bb-editorial-card-b"><Image src={barberImages[8]} alt="Barbeiro trabalhando acabamento de cabelo" fill sizes="(max-width: 780px) 50vw, 40vw" /></div>
        <div className="bb-editorial-card bb-editorial-card-c"><Image src={barberImages[6]} alt="Ferramentas e técnica em barbearia" fill sizes="25vw" /></div>
        <div className="bb-editorial-copy">
          <h2><WaveText text="Detalhe é onde o comum termina." /></h2>
          <p>O site segue a mesma lógica do serviço: grande impacto visual, mas sem ruído. Movimento aparece quando ajuda, fotografia ocupa espaço quando conta alguma coisa e o caminho até o agendamento continua evidente.</p>
        </div>
      </div>
    </div>
  </section>
);

const previewGallery = [9, 10, 11, 12, 13, 14, 15, 16];
export const BarberGalleryBlock: ComponentType<Record<string, unknown>> = (props) => (
  <section className="bb-section" id={blockId(props, "galeria")}>
    <div className="bb-shell">
      <div className="bb-section-head">
        <div><p className="bb-kicker">03 / GALERIA</p><h2><WaveText text="Referências de estilo." /></h2></div>
        <p>Uma curadoria visual de cortes, barba e a atmosfera exclusiva do nosso espaço.</p>
      </div>
      <div className="bb-gallery-preview">
        {previewGallery.map((imageIndex, index) => (
          <Link href="/galeria" className="bb-gallery-tile gallery-item" key={imageIndex}>
            <Image src={barberImages[imageIndex]} alt={`Referência visual de barbearia ${index + 1}`} fill sizes="(max-width: 780px) 50vw, 34vw" />
          </Link>
        ))}
      </div>
      <div className="bb-gallery-linkline"><p>30 referências · corte · barba · ambiente · detalhe</p><Link href="/galeria">Abrir galeria completa ↗</Link></div>
    </div>
  </section>
);

const ritual = [
  { title: "Leitura", text: "Referências, rotina e formato entram na conversa antes da primeira linha do corte." },
  { title: "Construção", text: "Máquina e tesoura entram com intenção: proporção primeiro, detalhe depois." },
  { title: "Refino", text: "Sombras, contornos e transições recebem a atenção que separa correto de preciso." },
  { title: "Finalização", text: "Styling e orientação para o corte continuar funcionando fora da cadeira." },
];
export const BarberRitualBlock: ComponentType<Record<string, unknown>> = (props) => (
  <section className="bb-section bb-section-dark" id={blockId(props, "ritual")}>
    <div className="bb-shell">
      <div className="bb-section-head">
        <div><p className="bb-kicker bb-on-bronze">04 / O RITUAL</p><h2><WaveText text="Do primeiro olhar ao último detalhe." /></h2></div>
        <p>Uma experiência premium precisa ser fácil de entender. Quatro momentos, sem promessas vazias e sem complicar o que deveria ser simples.</p>
      </div>
      <StaggerReveal className="bb-ritual-grid">
        {ritual.map((step, index) => <StaggerItem key={step.title}><article className="bb-ritual-step"><span className="bb-number">0{index + 1}</span><strong>{step.title}</strong><p>{step.text}</p></article></StaggerItem>)}
      </StaggerReveal>
    </div>
  </section>
);

export const BarberBookingBlock: ComponentType<Record<string, unknown>> = (props) => (
  <section className="bb-section bb-booking-section" id={blockId(props, "agendar")}>
    <div className="bb-shell bb-booking-grid">
      <div className="bb-booking-copy"><p className="bb-kicker">05 / AGENDAMENTO</p><h2><WaveText text="Seu próximo corte começa aqui." /></h2><p>Selecione o serviço e o horário ideal para dar o primeiro passo no seu atendimento.</p></div>
      <BookingConfigurator company={clientConfig.company.name} whatsapp={clientConfig.contact.whatsapp} services={services.map((service) => service.title)} />
    </div>
  </section>
);

export const BarberFaqBlock: ComponentType<Record<string, unknown>> = (props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="bb-section" id={blockId(props, "faq")}>
      <div className="bb-shell bb-faq-grid">
        <div className="bb-faq-intro"><p className="bb-kicker">06 / DÚVIDAS</p><h2><WaveText text="Antes da cadeira." /></h2><p>Respostas curtas para as perguntas que normalmente aparecem antes de marcar.</p></div>
        <div className="bb-faq-list">
          {faq.slice(0, 5).map((item, index) => (
            <div key={item.question} className="faq-item" data-open={openIndex === index ? "true" : "false"}>
              <button
                className="bb-faq-summary"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                onMouseEnter={() => setHoveredId(item.question)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <span className="bb-number">0{index + 1}</span>
                <span>{item.question}</span>
                <motion.span className="faq-icon" animate={{ rotate: openIndex === index ? 45 : 0 }} transition={{ duration: 0.3 }}>+</motion.span>
              </button>
          <AnimatePresence>
          {hoveredId === item.question && (
            <motion.div
              layoutId="service-highlight"
              initial={{ opacity: 0, scaleY: 0.92 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0.92 }}
              transition={{ 
                duration: 0.75, 
                ease: [0.25, 1, 0.5, 1] 
              }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "#111111",
                zIndex: 0,
                transformOrigin: "center"
              }}
            />
          )}
        </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BarberContactBlock: ComponentType<Record<string, unknown>> = (props) => (
  <section className="bb-section bb-section-paper2" id={blockId(props, "contato")}>
    <div className="bb-shell bb-contact-grid">
      <div className="bb-contact-main">
        <p className="bb-kicker bb-on-bronze">07 / CONTATO</p>
        <h2><WaveText text="Vamos alinhar seu próximo visual." /></h2>
        <p>Atendimento exclusivo com hora marcada. Venha vivenciar a experiência Bravo.</p>
        <div className="bb-contact-lines">
          <a href={whatsappHref({ kind: "schedule" })} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>Agendar ↗</strong></a>
          <a href={`tel:${clientConfig.contact.phone.replace(/\D/g, "")}`}><span>Telefone</span><strong>{clientConfig.contact.phone}</strong></a>
          <a href={`mailto:${clientConfig.contact.email}`}><span>E-mail</span><strong>{clientConfig.contact.email}</strong></a>
        </div>
      </div>
      <div className="bb-contact-hours">
        <p className="bb-kicker">HORÁRIOS</p><h3>Agenda da semana</h3>
        <div className="bb-hours-list"><div><span>Segunda — Quinta</span><strong>09:00 — 19:00</strong></div><div><span>Sexta</span><strong>09:00 — 20:00</strong></div><div><span>Sábado</span><strong>08:00 — 18:00</strong></div><div><span>Domingo</span><strong>Fechado</strong></div></div>
        <p className="bb-hours-note">Horários sujeitos a alteração. Confirme pelo WhatsApp.</p>
      </div>
    </div>
    <div className="bb-shell">
      <MapEmbed className="mt-8" />
    </div>
  </section>
);
