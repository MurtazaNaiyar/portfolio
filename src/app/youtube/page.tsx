import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import { SITE, YOUTUBE_CHANNEL_URL, YOUTUBE_EMBED_PLAYLIST_ID } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "YouTube | Murtaza Naiyar",
  description: "Videos and content from Murtaza Naiyar's YouTube channel.",
  openGraph: {
    title: "YouTube | Murtaza Naiyar",
    description: "Videos and content from my YouTube channel.",
  },
  alternates: { canonical: `${SITE.baseUrl}/youtube` },
};

export default function YouTubePage() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <AnimateIn>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          YouTube
        </h1>
        <p className="mt-4 text-slate-400">
          Videos, talks, and content from my channel. Watch on YouTube for the full experience.
        </p>
      </AnimateIn>

      <AnimateIn className="mt-12">
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#ff0000] px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#cc0000] hover:-translate-y-0.5 hover:shadow-lg"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Watch on YouTube
        </a>
      </AnimateIn>

      {YOUTUBE_EMBED_PLAYLIST_ID ? (
        <AnimateIn className="mt-12">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-surface-border bg-surface-elevated">
            <iframe
              title="YouTube playlist"
              src={`https://www.youtube.com/embed/videoseries?list=${YOUTUBE_EMBED_PLAYLIST_ID}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </AnimateIn>
      ) : (
        <AnimateIn className="mt-12">
          <div className="rounded-2xl border border-surface-border bg-surface-elevated/50 p-8 text-center sm:p-12">
            <p className="text-slate-400">
              Embedded videos will appear here once you set{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 text-sm text-slate-300">
                YOUTUBE_EMBED_PLAYLIST_ID
              </code>{" "}
              in <code className="rounded bg-surface px-1.5 py-0.5 text-sm text-slate-300">src/lib/site-data.ts</code>.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Use your channel&apos;s uploads playlist ID (starts with <code className="text-accent">UU</code>) or any public playlist ID.
            </p>
          </div>
        </AnimateIn>
      )}
    </div>
  );
}
