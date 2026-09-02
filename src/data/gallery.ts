import type { GalleryItem } from "@/types/content";
import { barberImages } from "./barber-images";

const labels = [
  "Precisão", "Fade", "Textura", "Detalhe", "Ritual", "Tesoura", "Contorno", "Barba",
  "Atmosfera", "Craft", "Finalização", "Estilo", "Movimento", "Máquina", "Clássico",
  "Grooming", "Studio", "Linha", "Forma", "Identidade", "Cuidado", "Processo", "Técnica",
  "Acabamento", "Experiência", "Detalhe", "Club", "Rotina", "Barber", "Signature",
];

export const gallery: GalleryItem[] = barberImages.map((src, index) => ({
  image: {
    src,
    alt: `Referência visual de barbearia — ${labels[index]}`,
    width: index % 3 === 0 ? 1200 : 1000,
    height: index % 3 === 0 ? 1500 : 1200,
  },
  caption: labels[index],
  category: index % 4 === 0 ? "Ambiente" : index % 3 === 0 ? "Barba" : "Corte",
}));

export const galleryCategories = ["Todos", ...Array.from(new Set(gallery.map((item) => item.category)))];
