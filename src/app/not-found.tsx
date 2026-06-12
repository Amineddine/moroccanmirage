import AtlasLink from "@/components/ui/AtlasLink";

export default function NotFound() {
  return (
    <main
      data-horizon="50,3,UNCHARTED"
      className="flex min-h-screen items-center justify-center bg-night px-6"
    >
      <div className="text-center">
        <p className="plate-label">Sheet № 404</p>
        <h1 className="font-display mt-6 text-[clamp(3rem,9vw,7rem)] font-light leading-none text-bone">
          Uncharted <span className="italic text-amber">territory</span>
        </h1>
        <p className="mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-muted">
          This page lies beyond the edge of our atlas. Let us guide you back to the marked routes.
        </p>
        <div className="mt-12 flex justify-center">
          <AtlasLink href="/">Return to the Atlas</AtlasLink>
        </div>
      </div>
    </main>
  );
}
