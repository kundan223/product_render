'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type FolderItem = {
  id: string;
  name: string;
  sublabel?: string;
  youtubeWatchUrl: string;
  accent?: string;
  emoji?: string;
};

const FOLDERS: FolderItem[] = [
  {
    id: "f1",
    name: "EYTHOR ROBOT",
    sublabel: "Advanced Robotics",
    youtubeWatchUrl: "https://youtu.be/_m7L-ICUsnM",
    accent: "bg-amber-400",
    emoji: "🤖",
  },
  {
    id: "f2",
    name: "BRAMER DRONE",
    sublabel: "Aerial Footage",
    youtubeWatchUrl: "https://youtu.be/eq7xODQQVN4",
    accent: "bg-rose-400",
    emoji: "🚁",
  },
];

function getYouTubeId(input: string): string {
  try {
    const url = new URL(input);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.replace("/", "").split("/")[0];
    }
    const v = url.searchParams.get("v");
    if (v) return v;
    const m = url.pathname.match(/\/(shorts|embed)\/([^/?#]+)/);
    if (m && m[2]) return m[2];
    return "";
  } catch {
    return "";
  }
}

function toEmbedUrl(watchUrl: string) {
  const videoId = getYouTubeId(watchUrl);
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1`;
}

function toThumbUrl(watchUrl: string) {
  const videoId = getYouTubeId(watchUrl);
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

function FolderCard({
  item,
  hovered,
  onHover,
  onLeave,
}: {
  item: FolderItem;
  hovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const embed = toEmbedUrl(item.youtubeWatchUrl);
  const thumb = toThumbUrl(item.youtubeWatchUrl);

  return (
    <a
      href={item.youtubeWatchUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative block rounded-2xl bg-white/5 hover:bg-white/10 transition-colors overflow-hidden ring-1 ring-white/10"
    >
      <div className="relative">
        <div
          className="absolute -top-2 left-3 h-6 w-28 rounded-t-xl rounded-b-md opacity-90 flex items-center gap-2 px-3 text-black text-xs font-semibold shadow-sm"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)",
          }}
        >
          <span className={`inline-block h-2.5 w-2.5 rounded ${item.accent}`} />
          <span className="opacity-90">{item.emoji}</span>
        </div>

        <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 overflow-hidden">
          <img
            src={thumb}
            alt={item.name}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            loading="lazy"
          />
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {hovered && (
              <iframe
                title={item.name}
                src={embed}
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm md:text-base font-semibold tracking-wide">{item.name}</h3>
            {item.sublabel && (
              <p className="text-[11px] md:text-xs text-white/60">{item.sublabel}</p>
            )}
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-wider px-2 py-1 rounded-md bg-white/10">
            Open ▶
          </div>
        </div>
      </div>
    </a>
  );
}

export default function WorkFoldersPage() {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      <header className="mx-auto max-w-5xl px-4 md:px-6 py-6 md:py-10 flex items-center justify-between gap-4">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 active:scale-[0.99] transition"
        >
          ← Back
        </button>
        <div className="text-right">
          <h1 className="text-2xl md:text-4xl font-black tracking-tight">Work Library</h1>
          <p className="mt-1 text-white/70 text-xs md:text-sm">
            Hover to preview. Click to watch on YouTube.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 md:px-6 pb-14">
        <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
          {FOLDERS.map((f) => (
            <FolderCard
              key={f.id}
              item={f}
              hovered={hoverId === f.id}
              onHover={() => setHoverId(f.id)}
              onLeave={() => setHoverId((h) => (h === f.id ? null : h))}
            />
          ))}
        </div>
      </main>

      {/* Footer style like image */}
      <div className="absolute bottom-0 right-0 bg-black/90 text-white text-sm p-4 rounded-tl-lg">
        <h4 className="font-bold mb-2">Important Links</h4>
        <ul className="space-y-1">
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
