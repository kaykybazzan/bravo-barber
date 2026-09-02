import type { Metadata } from "next";
import { BarberPageHero } from "@/components/barber/BarberPageHero";
import { barberImages } from "@/data/barber-images";
import { faq } from "@/data/faq";
import { JsonLd } from "@/seo/JsonLd";
import { faqSchema } from "@/seo/schema";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({ title: "Perguntas frequentes", description: "Dúvidas sobre agendamento, referências, serviços e manutenção do corte.", path: "/faq" });

export default function FaqPage() {
  return (
    <>
      <BarberPageHero eyebrow="Dúvidas" title="Sem rodeio." lead="O essencial para chegar ao agendamento sabendo o que esperar." image={barberImages[28]} />
      <section className="bb-section"><div className="bb-shell bb-faq-grid"><div className="bb-faq-intro"><p className="bb-kicker">FAQ</p><h2>Perguntas frequentes.</h2><p>Se algo não estiver aqui, a conversa continua no WhatsApp.</p></div><div className="bb-faq-list">{faq.map((item,index)=><details key={item.question}><summary><span className="bb-number">{String(index+1).padStart(2,"0")}</span><span>{item.question}</span></summary><p>{item.answer}</p></details>)}</div></div></section>
      <JsonLd data={faqSchema(faq)} id="nx-faq" />
    </>
  );
}
