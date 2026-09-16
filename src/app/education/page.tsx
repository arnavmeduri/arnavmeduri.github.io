import { PageTransition, FadeIn } from "@/components/motion";

const coursework = [
  "Data Structures & Algorithms",
  "Computer Architecture",
  "Computer Network Architecture",
  "Operating Systems",
  "Applied Machine Learning",
  "Artificial Intelligence",
  "Probability",
  "Statistical Inference",
];

const activities = [
  { org: "Technify", role: "Director" },
  { org: "Product Lab", role: "Software Engineer" },
  { org: "Duke Applied Machine Learning", role: "Data Scientist" },
  { org: "Duke Impact Investing Group", role: "Consulting Analyst" },
  { org: "STA 221: Regression Analysis", role: "Undergraduate Teaching Assistant" },
];

export default function Education() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-2xl font-semibold tracking-tight mb-10">Education</h1>

        <FadeIn>
          <div className="group pl-4 border-l-2 border-transparent hover:border-accent transition-colors">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h3 className="font-medium text-foreground">
                  Bachelor of Science (B.S.) in Computer Science and Statistical Science
                </h3>
                <p className="text-sm text-accent">Duke University</p>
              </div>
            </div>
            <p className="text-xs text-muted mt-1">Durham, NC</p>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              Concentration: Artificial Intelligence &amp; Machine Learning
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-16 pt-10 border-t border-border">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
              Relevant Coursework
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              {coursework.join(", ")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="mt-16 pt-10 border-t border-border">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
              Activities and Societies
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              {activities.map((activity, i) => (
                <span key={i}>
                  {activity.org} ({activity.role})
                  {i < activities.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
