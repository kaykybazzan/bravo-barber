import type { Metadata, Viewport } from "next";
import { ViewTransitions } from "next-view-transitions";
import "@/styles/globals.css";
import "@/styles/barber.css";

import { BarberHeader } from "@/components/barber/BarberHeader";
import { BarberFooter } from "@/components/barber/BarberFooter";
import { BarberMobileBar } from "@/components/barber/BarberMobileBar";
import { Analytics } from "@/analytics/Analytics";
import { clientConfig } from "@/config/client.config";
import { buildThemeCss } from "@/config/theme";
import { rootMetadata } from "@/seo/metadata";
import "@/config/assert-config";

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: clientConfig.design.secondaryColor,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { design, seo } = clientConfig;
  return (
    <ViewTransitions>
      <html lang={seo.locale.replace("_", "-")}>
        <head>
          <style dangerouslySetInnerHTML={{ __html: buildThemeCss(design) }} />
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        </head>
        <body data-nx-archetype="luxury" data-nx-imagery="editorial" data-nx-background="editorial">
          <a href="#conteudo" className="nx-skip-link">Pular para o conteúdo</a>
          <BarberHeader />
          <main id="conteudo" className="pb-28 sm:pb-12">{children}</main>
          <BarberFooter />
          <BarberMobileBar />
          <Analytics requireConsent={false} />
        </body>
      </html>
    </ViewTransitions>
  );
}
