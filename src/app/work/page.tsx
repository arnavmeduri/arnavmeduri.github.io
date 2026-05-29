const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Red Hat",
    location: "Raleigh, NC",
    period: "May 2026 — Present",
    description:
      "Working on CI/CD infrastructure and release engineering for OpenShift on the Technical Release Team (TRT) in the SHIP group.",
  },
  {
    role: "Software Engineer Intern",
    company: "Esquire Deposition Solutions",
    location: "Durham, NC",
    period: "Jan 2026 — May 2026",
    description:
      "Developed a sales enablement dashboard integrating legal case data and CRM systems to provide actionable insights for sales and management teams.",
  },
  {
    role: "Software Development Intern",
    company: "Ecolytics",
    location: "Washington, D.C. (Remote)",
    period: "May 2025 — Jan 2026",
    description:
      "Built software solutions for ESG reporting and sustainability analytics.",
  },
  {
    role: "Software Engineer Intern",
    company: "Authorship",
    location: "Charlotte, NC (Remote)",
    period: "May 2025 — Aug 2025",
    description:
      "Created full-stack tools to streamline legal case management and compliance workflows.",
  },
  {
    role: "Machine Learning Research Intern",
    company: "Columbia University Irving Medical Center",
    location: "New York, NY (Remote)",
    period: "Jun 2023 — Apr 2025",
    description: null,
  },
];

const skills = {
  Languages: [
    "Java",
    "Python",
    "C",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "SQL",
    "R",
    "MATLAB",
  ],
  "Frameworks & Tools": [
    "React",
    "Next.js",
    "Node.js",
    "Angular",
    "MongoDB",
    "PyTorch",
    "NumPy",
    "Pandas",
    "AWS",
    "Linux",
  ],
  Skills: [
    "Object-Oriented Programming",
    "RESTful APIs",
    "AI/ML",
    "Full Stack Development",
    "Unit Testing",
    "Git",
  ],
};

export default function Work() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-2xl font-semibold tracking-tight mb-10">Work</h1>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="group pl-4 border-l-2 border-transparent hover:border-accent transition-colors">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h3 className="font-medium text-foreground">{exp.role}</h3>
                <p className="text-sm text-accent">{exp.company}</p>
              </div>
              <span className="text-sm text-muted shrink-0">{exp.period}</span>
            </div>
            <p className="text-xs text-muted mt-1">{exp.location}</p>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              {exp.description ?? (
                <>
                  Developed deep learning models for retinal tear screening at
                  the AI for Vision Science Lab at Columbia University.
                  Recognized as a{" "}
                  <a
                    href="https://www.societyforscience.org/regeneron-sts/2024-scholars/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-foreground transition-colors underline underline-offset-4 decoration-accent/40"
                  >
                    Regeneron Science Talent Search Scholar
                  </a>
                  {" "}for this work.
                </>
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-border">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
          Skills
        </h2>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-foreground mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-border/50 text-muted border border-transparent hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
