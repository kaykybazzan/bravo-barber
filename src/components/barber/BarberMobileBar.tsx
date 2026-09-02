import { whatsappHref } from "@/integrations/whatsapp";

export function BarberMobileBar() {
  return (
    <nav className="bb-mobile-bar" aria-label="Ações rápidas">
      <a href="/servicos">Serviços</a>
      <a className="bb-mobile-bar-primary" href={whatsappHref({ kind: "schedule" })} target="_blank" rel="noopener noreferrer">Agendar ↗</a>
    </nav>
  );
}
