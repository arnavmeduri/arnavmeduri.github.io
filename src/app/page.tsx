import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TypingEffect } from "@/components/typing-effect";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <div className="space-y-6">
        <div className="flex items-center gap-5">
          <div className="w-[90px] h-[90px] rounded-full overflow-hidden shrink-0 ring-2 ring-border">
            <Image
              src="/prof_pic.png"
              alt="Arnav Meduri"
              width={90}
              height={90}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              <TypingEffect text="Hey there! I'm Arnav." />
            </h1>
            <div className="flex gap-3 mt-2">
              <a
                href="https://github.com/arnavmeduri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/arnavmeduri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="mailto:arnav.meduri@duke.edu"
                className="text-muted hover:text-accent transition-colors"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>
        </div>

        <p className="text-lg text-muted leading-relaxed max-w-xl">
          I&apos;m a student at Duke University studying Computer Science and
          Statistics, with experience in full stack development, machine
          learning, and data engineering at research labs and startups.
        </p>

        <p className="text-lg text-muted leading-relaxed max-w-xl">
          Right now, I&apos;m a Software Engineer Intern at Red Hat, where
          I&apos;m working on CI/CD infrastructure and tooling for OpenShift.
        </p>

        <p className="text-lg text-muted leading-relaxed max-w-xl">
          Check out some of my{" "}
          <Link
            href="/projects"
            className="text-accent hover:text-foreground transition-colors underline underline-offset-4 decoration-accent/40"
          >
            projects
          </Link>
          !
        </p>
      </div>
    </div>
  );
}
