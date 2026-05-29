import Link from "next/link";
import Image from "next/image";
import { TypingEffect } from "@/components/typing-effect";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <div className="flex flex-col items-center text-center">
        <div className="w-[96px] h-[96px] rounded-full overflow-hidden mb-5">
          <Image
            src="/prof_pic.png"
            alt="Arnav Meduri"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-semibold tracking-tight mb-6">
          <TypingEffect text="Hey there! I'm Arnav." />
        </h1>

        <p className="text-base text-muted leading-relaxed max-w-lg mb-4">
          I&apos;m a student at Duke University studying Computer Science and
          Statistics, with experience in full stack development and machine
          learning at research labs and startups.
        </p>

        <p className="text-base text-muted leading-relaxed max-w-lg mb-4">
          Right now, I&apos;m a Software Engineer Intern at Red Hat, working
          on CI/CD infrastructure and release engineering for OpenShift.
        </p>

        <p className="text-base text-muted leading-relaxed max-w-lg">
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
