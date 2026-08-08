import Link from "next/link";
import Image from "next/image";
import { TypingEffect } from "@/components/typing-effect";
import { PageTransition, FadeIn } from "@/components/motion";

export default function Home() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-10">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <div className="w-[96px] h-[96px] rounded-full overflow-hidden mb-5">
              <Image
                src="/prof_pic.png"
                alt="Arnav Meduri"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <h1 className="text-2xl font-semibold tracking-tight mb-6">
            <TypingEffect text="Hey there! I'm Arnav." />
          </h1>

          <FadeIn delay={0.1}>
            <p className="text-base text-muted leading-relaxed max-w-lg mb-4">
              I&apos;m a Computer Science and Statistics student at Duke
              University. Currently, I&apos;m a Software Engineer Intern at
              Red Hat, working on CI/CD and release engineering infrastructure
              for OpenShift. Feel free to reach out if you&apos;d like to
              chat!
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
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
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
}
