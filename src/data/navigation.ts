import type { NavItem } from "@/types/content";

export const primaryNav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos", requires: "services" },
  { label: "Galeria", href: "/galeria", requires: "gallery" },
  { label: "Sobre", href: "/sobre", requires: "about" },
  { label: "Dúvidas", href: "/faq", requires: "faq" },
  { label: "Contato", href: "/contato", requires: "contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacidade", href: "/politica-de-privacidade" },
  { label: "Cookies", href: "/politica-de-cookies" },
  { label: "Termos", href: "/termos-de-uso" },
];
