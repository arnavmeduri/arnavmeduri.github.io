"use client";

import { useState } from "react";
import { PageTransition, FadeIn } from "@/components/motion";

const PASS_HASH = "3398c";
function check(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = ((h << 5) - h + input.charCodeAt(i)) | 0;
  }
  return h.toString(16).slice(-5) === PASS_HASH;
}

const RESUME_URL = "#";

export default function Resume() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (check(password)) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-2xl font-semibold tracking-tight mb-10">Resume</h1>

        {!unlocked ? (
          <FadeIn>
            <form onSubmit={handleSubmit} className="max-w-sm">
              <p className="text-sm text-muted mb-4">
                This page is password protected. Enter the password to view my
                resume.
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Password"
                  className="flex-1 px-3 py-2 text-sm rounded-md border border-border bg-background text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm rounded-md bg-accent text-white hover:opacity-90 transition-opacity"
                >
                  Enter
                </button>
              </div>
              {error && (
                <p className="text-sm text-red-500 mt-2">
                  Incorrect password.
                </p>
              )}
            </form>
          </FadeIn>
        ) : (
          <FadeIn>
            <p className="text-sm text-muted mb-4">
              Click below to view my resume.
            </p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent hover:text-foreground transition-colors underline underline-offset-4 decoration-accent/40"
            >
              View Resume
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </FadeIn>
        )}
      </div>
    </PageTransition>
  );
}
