"use client";

import { useState } from "react";

const PASSWORD = "arnav2026";

export default function Resume() {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (unlocked) {
    return (
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
          <a
            href="/resume.pdf"
            download
            className="text-sm text-accent hover:text-foreground transition-colors underline underline-offset-4 decoration-accent/40"
          >
            Download PDF
          </a>
        </div>
        <div className="w-full aspect-[8.5/11] border border-border rounded-md overflow-hidden">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">Resume</h1>
        <p className="text-sm text-muted mb-8">
          Enter the password to view my resume.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-xs">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md border border-border bg-card text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
            autoFocus
          />
          {error && (
            <p className="text-xs text-red-500">Incorrect password.</p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-md bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
