"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./theme-provider";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between border-b border-border bg-nav-bg backdrop-blur-md">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          arnav meduri
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="flex items-center gap-2 ml-3 pl-3 border-l border-border">
            <a
              href="https://github.com/arnavmeduri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={15} />
            </a>
            <a
              href="https://linkedin.com/in/arnavmeduri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={15} />
            </a>
            <a
              href="mailto:ameduri2024@gmail.com"
              className="p-1 text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FiMail size={15} />
            </a>

            <button
              onClick={toggleTheme}
              className="p-1 text-muted hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
