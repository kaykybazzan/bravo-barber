import Link from "next/link";
import { clientConfig } from "@/config/client.config";
import { legalNav } from "@/data/navigation";
import { whatsappHref } from "@/integrations/whatsapp";

export function BarberFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bb-footer">
      <div className="bb-shell bb-footer-grid">
        <div className="bb-footer-brand">
          <p className="bb-kicker">BARBER CLUB · {clientConfig.address.city.toUpperCase()}</p>
          <div className="bb-footer-word">BRAVO</div>
        </div>
        <div className="bb-footer-links">
          <div>
            <span>Navegação</span>
            <Link href="/servicos">Serviços</Link>
            <Link href="/galeria">Galeria</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </div>
          <div>
            <span>Contato</span>
            <a href={whatsappHref({ kind: "schedule" })} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
            <a href={`tel:${clientConfig.contact.phone.replace(/\D/g, "")}`}>{clientConfig.contact.phone}</a>
            <a href={`mailto:${clientConfig.contact.email}`}>{clientConfig.contact.email}</a>
          </div>
        </div>
      </div>
      <div className="bb-shell bb-footer-bottom">
        <p>© {year} {clientConfig.company.name}. Projeto demonstrativo Nexora.</p>
        <nav aria-label="Links legais">{legalNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      </div>
    </footer>
  );
}
