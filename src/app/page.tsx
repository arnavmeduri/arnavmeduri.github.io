import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TypingEffect } from "@/components/typing-effect";
import { PageTransition, FadeIn } from "@/components/motion";

const projects = [
  {
    name: "PVO Segmentation",
    description:
      "Architected a ResUNet model for retinal tear screening in patients with acute, symptomatic posterior vitreous detachment using expert-labeled OCT B-scans. Built image preprocessing pipelines with OpenCV and Torchvision to generate segmentation masks from 250+ B-scans for model training.",
    tech: ["Python", "PyTorch", "OpenCV", "scikit-learn"],
    link: "https://github.com/arnavmeduri/pvo-segmentation",
    publication:
      "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13309/1330905/Using-artificial-intelligence-to-screen-for-retinal-tears-in-patients/10.1117/12.3040882.short",
  },
  {
    name: "FinBrief",
    description:
      "Built an educational financial analysis tool that generates beginner-friendly investment reports using a RAG pipeline over SEC filings and Finnhub metrics, with a fine-tuned DistilBERT model for financial sentiment analysis.",
    tech: ["Python", "FAISS", "DistilBERT", "Streamlit"],
    link: "https://github.com/arnavmeduri/finbrief",
  },
  {
    name: "Offset AI",
    description:
      "Built a browser extension and web dashboard for tracking AI environmental impact, using React, Vite, and Tailwind CSS. Monitors carbon emissions from AI usage and provides tools for offsetting environmental footprint.",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    link: "https://github.com/arnavmeduri/offset-ai",
  },
  {
    name: "Minimal Cell Proteomics",
    description:
      "Applied hidden Markov models (HMMER) to assign putative functions to 12 uncharacterized proteins in the JCVI-syn3A proteome. Leveraged pseudolikelihood-based maximum entropy models within the EVCouplings framework to identify 33 statistically significant inter-protein interactions across 110 PFAM-mapped protein families.",
    tech: ["Python", "PyMOL", "BioPython", "NumPy", "Pandas"],
    link: "https://github.com/arnavmeduri/jcvi-syn3A-analysis",
  },
  {
    name: "Technify Website",
    description:
      "Built the official website for Technify, a student-led organization at Duke providing pro-bono technical consulting for nonprofits and social impact organizations.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/arnavmeduri/technify-website",
  },
];

const socials = [
  {
    href: "https://github.com/arnavmeduri",
    label: "GitHub",
    icon: FiGithub,
  },
  {
    href: "https://linkedin.com/in/arnavmeduri",
    label: "LinkedIn",
    icon: FiLinkedin,
  },
  {
    href: "mailto:ameduri2024@gmail.com",
    label: "Email",
    icon: FiMail,
  },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Hero */}
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
            <p className="text-base text-muted leading-relaxed max-w-lg mb-6">
              Check out some of my{" "}
              <a
                href="#projects"
                className="text-accent hover:text-foreground transition-colors underline underline-offset-4 decoration-accent/40"
              >
                projects
              </a>
              !
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="p-2 text-muted hover:text-accent transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Projects */}
        <div id="projects" className="mt-24 pt-10 border-t border-border scroll-mt-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-10">
            Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group pl-4 border-l-2 border-transparent hover:border-accent transition-colors">
                  <div className="flex items-center gap-2">
                    {project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-foreground group-hover:text-accent transition-colors"
                      >
                        {project.name}
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
                    ) : (
                      <h3 className="font-medium text-foreground">
                        {project.name}
                      </h3>
                    )}
                  </div>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full bg-border/50 text-muted font-[family-name:var(--font-geist-mono)]"
                      >
                        {t}
                      </span>
                    ))}
                    {"publication" in project && project.publication && (
                      <a
                        href={project.publication as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:text-foreground transition-colors underline underline-offset-2"
                      >
                        Publication
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
