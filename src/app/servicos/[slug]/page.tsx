import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingConfigurator } from "@/components/barber/BookingConfigurator";
import { services, getServiceBySlug } from "@/data/services";
import { clientConfig } from "@/config/client.config";
import { buildMetadata } from "@/seo/metadata";
import { JsonLd } from "@/seo/JsonLd";
import { serviceSchema } from "@/seo/schema";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.excerpt,
    path: `/servicos/${service.slug}`,
    keywords: [service.title, "barbearia Timbó", "corte masculino"],
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bb-section">
        <div className="bb-shell bb-detail-grid">
          <div className="bb-detail-media"><Image src={service.image!.src} alt={service.image!.alt} fill sizes="(max-width: 780px) 100vw, 55vw" preload /></div>
          <div className="bb-detail-copy">
            <div className="bb-page-breadcrumb" style={{ color: "var(--bb-bronze)" }}><Link href="/">BRAVO</Link><span>/</span><Link href="/servicos">SERVIÇOS</Link></div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <div className="bb-detail-list">
              {service.deliverables?.map((item, index) => <div key={item}><span className="bb-number">0{index + 1}</span><strong>{item}</strong></div>)}
            </div>
            <BookingConfigurator compact company={clientConfig.company.name} whatsapp={clientConfig.contact.whatsapp} services={[service.title]} />
          </div>
        </div>
      </section>
      <section className="bb-section bb-section-paper2"><div className="bb-shell"><div className="bb-gallery-linkline"><p>Quer comparar antes de escolher?</p><Link href="/servicos">Voltar para todos os serviços ↗</Link></div></div></section>
      <JsonLd data={serviceSchema(service)} id={`nx-service-${service.slug}`} />
    </>
  );
}
