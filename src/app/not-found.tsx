import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative z-10 flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-foreground">404</h1>
      <p className="mt-2 text-slate-400">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
      >
        Back to home
      </Link>
    </div>
  );
}
