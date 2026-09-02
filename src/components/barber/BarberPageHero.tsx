import Image from "next/image";
import Link from "next/link";

interface BarberPageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  image?: string;
}

export function BarberPageHero({ eyebrow, title, lead, image }: BarberPageHeroProps) {
  return (
    <section className={`bb-page-hero${image ? " bb-page-hero-with-image" : ""}`}>
      {image && <div className="bb-page-hero-media"><Image src={image} alt="" fill sizes="100vw" /></div>}
      <div className="bb-shell bb-page-hero-inner">
        <div className="bb-page-breadcrumb"><Link href="/">BRAVO</Link><span>/</span><span>{eyebrow}</span></div>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}
