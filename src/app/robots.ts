import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/utils/url";

export default function robots(): MetadataRoute.Robots {
  const preview = Boolean(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production");
  const demoMode = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";
  if (preview || demoMode) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/dev/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
