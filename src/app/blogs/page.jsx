'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function BlogsPlaceholderPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Blogs section isn’t active yet</h1>
        <p className="mt-2 text-white/70">
          We’re working on it. Check back soon!
        </p>

        <button
          onClick={() => router.back()}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 active:scale-[0.99] transition"
          aria-label="Go back"
        >
          <span className="-ml-1">←</span> Back
        </button>
      </div>
    </div>
  );
}
