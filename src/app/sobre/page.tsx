import type { Metadata } from "next";
import Image from "next/image";
import { BarberPageHero } from "@/components/barber/BarberPageHero";
import { barberImages } from "@/data/barber-images";
import { companyContent } from "@/data/company";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sobre",
  description: companyContent.aboutLead,
  path: "/sobre",
});

const values = [
  ["01", "Leitura", "Entender o objetivo antes de executar."],
  ["02", "Precisão", "Construir forma antes de perseguir detalhe."],
  ["03", "Clareza", "Serviço e comunicação sem complicação."],
  ["04", "Identidade", "Adaptar referência em vez de copiar referência."],
];

export default function AboutPage() {
  return (
    <>
      <BarberPageHero eyebrow="Sobre" title="Menos excesso. Mais intenção." lead="A direção da Bravo nasce do encontro entre barbearia clássica, linguagem editorial e uma experiência digital extremamente direta." image={barberImages[22]} />
      <section className="bb-section">
        <div className="bb-shell bb-about-intro">
          <div><p className="bb-kicker">MANIFESTO</p><h2>{companyContent.aboutTitle}</h2></div>
          <div className="bb-about-copy">{companyContent.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
        <div className="bb-shell bb-about-image-wide"><Image src={barberImages[24]} alt="Ambiente e experiência visual de barbearia" fill sizes="92vw" /></div>
      </section>
      <section className="bb-section bb-section-paper2">
        <div className="bb-shell">
          <div className="bb-section-head"><div><p className="bb-kicker">PRINCÍPIOS</p><h2>O que guia o trabalho.</h2></div><p>Princípios simples que funcionam tanto na cadeira quanto na experiência digital.</p></div>
          <div className="bb-values">
            {values.map(([number, title, text]) => <article className="bb-value" key={number}><span className="bb-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
