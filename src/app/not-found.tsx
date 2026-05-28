import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">
      <h1 className="text-6xl font-semibold tracking-tight text-accent mb-4">
        404
      </h1>
      <p className="text-base text-muted mb-8">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm text-accent hover:text-foreground transition-colors underline underline-offset-4 decoration-accent/40"
      >
        Go home
      </Link>
    </div>
  );
}
