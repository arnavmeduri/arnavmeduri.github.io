const projects = [
  {
    name: "PVO Segmentation",
    description:
      "Architected a ResUNet model for retinal tear screening in patients with acute, symptomatic posterior vitreous detachment using expert-labeled OCT B-scans. Built image preprocessing pipelines with OpenCV and Torchvision to generate segmentation masks from 250+ B-scans for model training.",
    tech: ["Python", "PyTorch", "OpenCV", "scikit-learn"],
    link: "https://github.com/arnavmeduri/pvo-segmentation",
    publication: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/13309/1330905/Using-artificial-intelligence-to-screen-for-retinal-tears-in-patients/10.1117/12.3040882.short",
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

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-2xl font-semibold tracking-tight mb-10">Projects</h1>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <div key={i} className="group pl-4 border-l-2 border-transparent hover:border-accent transition-colors">
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
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ) : (
                <h3 className="font-medium text-foreground">{project.name}</h3>
              )}
            </div>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full bg-border/50 text-muted"
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
        ))}
      </div>
    </div>
  );
}
