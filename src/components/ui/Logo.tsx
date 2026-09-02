import Link from "next/link";
import { clientConfig } from "@/config/client.config";
import { cn } from "@/utils/cn";

export interface LogoProps {
  /** Inverts colors for dark backgrounds. */
  onDark?: boolean;
  className?: string;
  /** Renders plain text instead of a link — for the footer or the mobile sheet. */
  asText?: boolean;
}

/**
 * Wordmark built from the client's own typography. Replace the inner markup
 * with an <Image> once the client provides an SVG logo — keep the component
 * name and props so nothing else changes.
 */
export function Logo({ onDark = false, className, asText = false }: LogoProps) {
  const { name } = clientConfig.company;
  const [first, ...rest] = name.split(" ");

  const content = (
    <span
      className={cn(
        "font-heading text-[1.35rem] font-extrabold leading-none tracking-[-0.03em]",
        onDark ? "text-on-dark" : "text-fg",
        className,
      )}
    >
      {first}
      {rest.length > 0 && <span className="text-primary"> {rest.join(" ")}</span>}
    </span>
  );

  if (asText) return content;

  return (
    <Link href="/" aria-label={`${name} — página inicial`} className="inline-flex items-center">
      {content}
    </Link>
  );
}
