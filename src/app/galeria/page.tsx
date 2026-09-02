import type { Metadata } from "next";
import Image from "next/image";
import { BarberPageHero } from "@/components/barber/BarberPageHero";
import { barberImages } from "@/data/barber-images";
import { gallery } from "@/data/gallery";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Galeria",
  description: "Galeria com 30 referências visuais de cortes, barba, grooming e atmosfera de barbearia.",
  path: "/galeria",
});

export default function GalleryPage() {
  return (
    <>
      <BarberPageHero eyebrow="Galeria" title="30 olhares sobre o detalhe." lead="Corte, barba, processo, textura e atmosfera reunidos em uma galeria editorial sem carrossel pesado e sem JavaScript de lightbox no carregamento inicial." image={barberImages[20]} />
      <section className="bb-section">
        <div className="bb-shell">
          <div className="bb-masonry">
            {gallery.map((item, index) => (
              <figure className="bb-masonry-item" key={`${item.caption}-${index}`}>
                <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 430px) 100vw, (max-width: 780px) 50vw, 25vw" />
                <figcaption className="bb-masonry-caption">{String(index + 1).padStart(2, "0")} · {item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
