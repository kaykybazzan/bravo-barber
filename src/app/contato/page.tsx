import type { Metadata } from "next";
import { BarberPageHero } from "@/components/barber/BarberPageHero";
import { BookingConfigurator } from "@/components/barber/BookingConfigurator";
import { barberImages } from "@/data/barber-images";
import { services } from "@/data/services";
import { clientConfig } from "@/config/client.config";
import { whatsappHref } from "@/integrations/whatsapp";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contato e agendamento",
  description: "Escolha um serviço e inicie o agendamento da Bravo Barber Club pelo WhatsApp.",
  path: "/contato",
});

export default function ContactPage() {
  return (
    <>
      <BarberPageHero eyebrow="Contato" title="O próximo horário começa com uma mensagem." lead="Sem cadastro e sem formulário longo: escolha o serviço, diga o melhor período e continue no WhatsApp." image={barberImages[26]} />
      <section className="bb-section bb-booking-section">
        <div className="bb-shell bb-booking-grid">
          <div className="bb-booking-copy"><p className="bb-kicker">AGENDAMENTO</p><h2>Escolha. Envie. Confirme.</h2><p>A disponibilidade real continua sendo confirmada pela equipe; o site reduz o caminho até a conversa certa.</p></div>
          <BookingConfigurator company={clientConfig.company.name} whatsapp={clientConfig.contact.whatsapp} services={services.map((service) => service.title)} />
        </div>
      </section>
      <section className="bb-section">
        <div className="bb-shell bb-contact-grid">
          <div className="bb-contact-main">
            <p className="bb-kicker bb-on-bronze">CANAIS</p><h2>Contato direto.</h2>
            <div className="bb-contact-lines">
              <a href={whatsappHref({ kind: "schedule" })} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>Agendar ↗</strong></a>
              <a href={`tel:${clientConfig.contact.phone.replace(/\D/g, "")}`}><span>Telefone</span><strong>{clientConfig.contact.phone}</strong></a>
              <a href={`mailto:${clientConfig.contact.email}`}><span>E-mail</span><strong>{clientConfig.contact.email}</strong></a>
              <div><span>Região</span><strong>{clientConfig.address.city} · {clientConfig.address.state}</strong></div>
            </div>
          </div>
          <div className="bb-contact-hours">
            <p className="bb-kicker">AGENDA</p><h3>Horários demonstrativos</h3>
            <div className="bb-hours-list"><div><span>Segunda — Quinta</span><strong>09:00 — 19:00</strong></div><div><span>Sexta</span><strong>09:00 — 20:00</strong></div><div><span>Sábado</span><strong>08:00 — 18:00</strong></div><div><span>Domingo</span><strong>Fechado</strong></div></div>
            <p className="bb-hours-note">Substitua contatos e horários no `src/config/client.config.ts` antes da publicação.</p>
          </div>
        </div>
      </section>
    </>
  );
}
