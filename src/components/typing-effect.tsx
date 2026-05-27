"use client";

import { useState, useEffect } from "react";

export function TypingEffect({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={className}>
      {displayed}
      <span
        className={`inline-block ml-0.5 text-accent font-light select-none ${
          done ? "animate-blink" : ""
        }`}
      >|</span>
    </span>
  );
}
