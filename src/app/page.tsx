import type { Metadata } from "next";
import { clientConfig } from "@/config/client.config";
import { PageComposer } from "@/platform/composition/PageComposer";
import { JsonLd } from "@/seo/JsonLd";
import { homeGraph } from "@/seo/schema";
import { buildMetadata } from "@/seo/metadata";
import PreloaderWrapper from "@/components/PreloaderWrapper";

export const metadata: Metadata = buildMetadata({
  title: clientConfig.seo.defaultTitle,
  description: clientConfig.seo.description,
  path: "/",
  keywords: clientConfig.seo.keywords,
});

export default function HomePage() {
  return (
    <>
      <PreloaderWrapper />
      <PageComposer />
      <JsonLd data={homeGraph()} id="nx-home-graph" />
    </>
  );
}
