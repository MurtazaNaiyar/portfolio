"use client";

import Image from "next/image";
import { useState } from "react";

/** Add public/photo.jpg for your headshot (e.g. 400x400). Falls back to initials. */
export default function AboutPhoto() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="h-40 w-40 shrink-0 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center text-2xl font-semibold text-accent"
        aria-hidden
      >
        MN
      </div>
    );
  }

  return (
    <Image
      src="/photo.jpg"
      alt="Murtaza Naiyar"
      width={160}
      height={160}
      className="h-40 w-40 shrink-0 rounded-full object-cover border border-surface-border"
      onError={() => setError(true)}
    />
  );
}
