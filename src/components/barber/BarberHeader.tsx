import Link from "next/link";
import { TransitionLink } from "@/components/transition-link";
import { clientConfig } from "@/config/client.config";
import { visibleNav } from "@/config/features";
import { whatsappHref } from "@/integrations/whatsapp";

export function BarberHeader() {
  return (
    <header className="bb-header">
      <div className="bb-header-inner">
        <Link className="bb-wordmark" href="/" aria-label={`${clientConfig.company.name} — início`}>
          <span className="bb-wordmark-main">BRAVO</span>
          <span className="bb-wordmark-sub">BARBER CLUB</span>
        </Link>

        <nav className="bb-nav" aria-label="Navegação principal">
          {visibleNav.map((item) => (
            <TransitionLink key={item.href} href={item.href}>{item.label}</TransitionLink>
          ))}
        </nav>

        <a className="bb-header-cta" href={whatsappHref({ kind: "schedule" })} target="_blank" rel="noopener noreferrer">
          Agendar <span aria-hidden="true">↗</span>
        </a>

        <details className="bb-mobile-nav">
          <summary aria-label="Abrir menu"><span>Menu</span><span aria-hidden="true">＋</span></summary>
          <div className="bb-mobile-sheet">
            <div className="bb-mobile-sheet-top"><strong>BRAVO</strong><span>BARBER CLUB</span></div>
            <nav aria-label="Navegação móvel">
              {visibleNav.map((item, index) => (
                <TransitionLink key={item.href} href={item.href}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</TransitionLink>
              ))}
            </nav>
            <a className="bb-mobile-book" href={whatsappHref({ kind: "schedule" })} target="_blank" rel="noopener noreferrer">Agendar horário ↗</a>
          </div>
        </details>
      </div>
    </header>
  );
}
