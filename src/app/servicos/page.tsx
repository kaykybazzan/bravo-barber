import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BarberPageHero } from "@/components/barber/BarberPageHero";
import { BookingConfigurator } from "@/components/barber/BookingConfigurator";
import { barberImages } from "@/data/barber-images";
import { services } from "@/data/services";
import { clientConfig } from "@/config/client.config";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Serviços",
  description: "Conheça os serviços de corte, barba, fade, tesoura, acabamento e consultoria de estilo da Bravo Barber Club.",
  path: "/servicos",
  keywords: services.map((service) => service.title),
});

export default function ServicesPage() {
  return (
    <>
      <BarberPageHero eyebrow="Serviços" title="Escolha o seu ritual." lead="Cada serviço nasce de um objetivo diferente. Veja o escopo, entenda a proposta e leve a escolha pronta para o agendamento." image={barberImages[17]} />
      <section className="bb-section">
        <div className="bb-shell bb-services-page-list">
          {services.map((service, index) => (
            <article className="bb-service-card-full" key={service.slug}>
              <div className="bb-service-card-media">
                <Image src={service.image!.src} alt={service.image!.alt} fill sizes="(max-width: 780px) 100vw, 45vw" />
              </div>
              <div className="bb-service-card-body">
                <span className="bb-number">{String(index + 1).padStart(2, "0")} / 08</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className="bb-service-deliverables">
                  {service.deliverables?.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link className="bb-service-card-link" href={`/servicos/${service.slug}`}>Abrir serviço ↗</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bb-section bb-booking-section">
        <div className="bb-shell bb-booking-grid">
          <div className="bb-booking-copy"><p className="bb-kicker">AGENDAR</p><h2>Já sabe o que quer?</h2><p>Selecione o serviço e abra a conversa com o contexto certo.</p></div>
          <BookingConfigurator company={clientConfig.company.name} whatsapp={clientConfig.contact.whatsapp} services={services.map((service) => service.title)} />
        </div>
      </section>
    </>
  );
}
