import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "bare";
  className?: string;
};

/** Atlas CTA — mono uppercase, ticket-stub framing. */
export default function AtlasLink({ href, children, variant = "solid", className = "" }: Props) {
  const base =
    "group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.28em] uppercase transition-colors duration-300";
  const variants = {
    solid:
      "border border-gold/60 bg-gold/10 px-7 py-4 text-gold hover:bg-gold hover:text-abyss",
    ghost:
      "border border-bone/20 px-7 py-4 text-bone hover:border-gold/60 hover:text-gold",
    bare: "text-gold hover:text-amber",
  } as const;

  const external = /^(https?:|tel:|mailto:)/.test(href);
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
