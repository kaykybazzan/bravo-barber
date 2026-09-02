import type { ComponentType } from "react";
import {
  BarberHeroBlock,
  BarberManifestoBlock,
  BarberServicesBlock,
  BarberEditorialBlock,
  BarberGalleryBlock,
  BarberRitualBlock,
  BarberBookingBlock,
  BarberFaqBlock,
  BarberContactBlock,
} from "./barber-home";

/** Client-specific extension registry preserved by the Nexora platform updater. */
export const clientBlockRegistry: Record<string, ComponentType<Record<string, unknown>>> = {
  "barber-hero": BarberHeroBlock,
  "barber-manifesto": BarberManifestoBlock,
  "barber-services": BarberServicesBlock,
  "barber-editorial": BarberEditorialBlock,
  "barber-gallery": BarberGalleryBlock,
  "barber-ritual": BarberRitualBlock,
  "barber-booking": BarberBookingBlock,
  "barber-faq": BarberFaqBlock,
  "barber-contact": BarberContactBlock,
};
