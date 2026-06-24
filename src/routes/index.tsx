import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import profileAsset from "@/assets/sharanya.jpeg.asset.json";
import resumeAsset from "@/assets/sharanya-resume.pdf.asset.json";
const profileImg = profileAsset.url;
const RESUME_URL = resumeAsset.url;
const GITHUB_URL = "https://github.com/sharanya-t1/sharanya-s-data-portfolio";
const LINKEDIN_URL = "https://www.linkedin.com/in/t-sharanya-a305432a4";
const PHONE = "+91 6303563347";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  Moon,
  Sun,
  Database,
  BarChart3,
  Code2,
  TrendingUp,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "T Sharanya — Aspiring Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "T Sharanya — B.Tech AI & DS student based in Hyderabad. Portfolio of data analysis projects, dashboards, Python, SQL, Power BI, Tableau.",
      },
      { property: "og:title", content: "T Sharanya — Aspiring Data Analyst" },
      {
        property: "og:description",
        content: "B.Tech AI & DS · Hyderabad · Projects, dashboards & insights by T Sharanya.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const QUICK_SKILLS = ["Python", "SQL", "Power BI", "Tableau", "Excel", "Pandas"];

const TOOLS = [
  "Python", "SQL", "Excel", "Power BI", "Tableau",
  "Pandas", "NumPy", "Scikit-learn", "MySQL", "Git",
];

const SKILL_GROUPS = [
  {
    title: "Programming",
    icon: Code2,
    items: [
      { name: "Python", level: 88 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Visualization",
    icon: BarChart3,
    items: [
      { name: "Power BI", level: 82 },
      { name: "Tableau", level: 78 },
      { name: "Matplotlib", level: 80 },
    ],
  },
  {
    title: "Tools & Data",
    icon: Database,
    items: [
      { name: "Excel", level: 90 },
      { name: "Git", level: 75 },
      { name: "MySQL", level: 80 },
    ],
  },
];

const PROJECTS = [
  {
    title: "Student Performance Analysis",
    description:
      "Exploring how study habits, attendance and demographics impact academic outcomes.",
    problem:
      "Identify the factors that most influence student exam scores to help educators intervene early.",
    dataset:
      "1,000 student records with attendance, study hours, parental education and exam scores.",
    steps: [
      "Cleaned missing values and encoded categorical variables",
      "Performed EDA with Pandas, Seaborn and Matplotlib",
      "Built correlation matrix and regression baseline",
    ],
    insights: [
      "Study hours show the strongest correlation with scores (r = 0.71)",
      "Attendance under 70% drops average grade by ~18%",
    ],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Machine learning model to predict telecom customer churn and surface retention levers.",
    problem:
      "Reduce churn by predicting which customers are likely to leave in the next 30 days.",
    dataset:
      "7,000 telecom customer records with contract, tenure, charges and churn label.",
    steps: [
      "Feature engineering on tenure and service bundles",
      "Trained Logistic Regression and Random Forest with Scikit-learn",
      "Evaluated using ROC-AUC and confusion matrix",
    ],
    insights: [
      "Month-to-month contracts have 3.4x higher churn",
      "Random Forest reached 0.86 ROC-AUC on holdout set",
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/",
  },
  {
    title: "Smart Billing System",
    description:
      "SQL-driven billing analytics with automated reports for a small retail business.",
    problem:
      "Manual invoicing led to revenue leakage and slow monthly reporting cycles.",
    dataset:
      "Transactional database with 25k invoices across 18 months of operations.",
    steps: [
      "Designed normalized MySQL schema",
      "Wrote stored procedures for tax & discount logic",
      "Built Excel dashboard pulling live from MySQL",
    ],
    insights: [
      "Cut monthly reporting time from 2 days to 20 minutes",
      "Detected 4.2% revenue leakage in misapplied discounts",
    ],
    tools: ["MySQL", "SQL", "Excel"],
    github: "https://github.com/",
  },
  {
    title: "Sales Dashboard (Power BI / Tableau)",
    description:
      "Interactive sales analytics dashboard tracking KPIs, regions and product mix.",
    problem:
      "Leadership needed a single source of truth for weekly sales performance.",
    dataset:
      "Two years of retail sales data across 12 regions and 200 SKUs.",
    steps: [
      "Modeled star schema with fact and dimension tables",
      "Built DAX measures for YoY, MTD and contribution margin",
      "Designed responsive Power BI report with drill-through pages",
    ],
    insights: [
      "Top 20% of SKUs drive 78% of revenue (Pareto pattern)",
      "Region East shows 22% YoY growth, outperforming average",
    ],
    tools: ["Power BI", "Tableau", "DAX", "SQL"],
    github: "https://github.com/",
  },
];

function Portfolio() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Header dark={dark} onToggle={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          T Sharanya<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={onToggle}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Hire me</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="absolute inset-0 surface-grid opacity-60" aria-hidden />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-28 md:items-center">
        <div className="fade-up">
          <Badge variant="secondary" className="mb-6 gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1">
            <Sparkles className="h-3 w-3 text-accent" />
            Open to internships & full-time roles
          </Badge>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I'm <span className="gradient-text">T Sharanya</span>
          </h1>
          <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
            Aspiring Data Analyst
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Turning data into meaningful insights and business decisions —
            through clean analysis, sharp visuals, and a curious mind.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#resume">
                <Download className="mr-1 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Quick skills
            </p>
            <div className="flex flex-wrap gap-2">
              {QUICK_SKILLS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative fade-up">
          <div
            className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-border shadow-elegant"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/30" />
            <img
              src={profileImg}
              alt="T Sharanya"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-card p-4 shadow-elegant md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Projects shipped</p>
                <p className="font-display text-lg font-bold">4+ analytics builds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A curious mind for data, business and stories."
    >
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I'm T Sharanya, a B.Tech student in Artificial Intelligence &amp;
            Data Science based in Hyderabad, Telangana. I'm passionate about
            transforming messy raw data into clear, decision-ready insights —
            from Excel spreadsheets to Python notebooks, SQL queries and
            interactive BI dashboards.
          </p>
          <p>
            I love the moment when a chart reveals the hidden <em>why</em> behind
            a business metric. Whether it's analysing student performance,
            predicting customer churn or building a sales dashboard, I focus on
            clarity, accuracy and storytelling.
          </p>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm font-semibold text-foreground">Career goal</p>
            <p className="mt-1 text-sm text-muted-foreground">
              To join a data-driven team where I can grow as an analyst,
              contribute to real business outcomes, and eventually move into
              advanced analytics & data science.
            </p>
          </div>
        </div>

        <Card className="border-border bg-card p-6">
          <p className="mb-4 text-sm font-semibold text-foreground">
            Toolbox
          </p>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
              >
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-8 space-y-4 border-t border-border pt-6 text-sm">
            <Row label="Education" value="B.Tech · AI & Data Science" />
            <Row label="Focus" value="Data Analytics & BI" />
            <Row label="Location" value="Hyderabad, Telangana" />
            <Row label="Phone" value="+91 6303563347" />
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium text-foreground">{value}</span>
    </div>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="A few analytics projects spanning EDA, machine learning, SQL systems and BI dashboards."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <Card
            key={p.title}
            className="group relative flex flex-col overflow-hidden border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-elegant"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-bold leading-tight">
                {p.title}
              </h3>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.title} on GitHub`}
                className="shrink-0 rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">{p.description}</p>

            <div className="mt-5 space-y-3 text-sm">
              <Detail label="Problem" text={p.problem} />
              <Detail label="Dataset" text={p.dataset} />
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  Steps
                </p>
                <ul className="list-inside list-disc space-y-0.5 text-muted-foreground marker:text-accent/70">
                  {p.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  Key insights
                </p>
                <ul className="list-inside list-disc space-y-0.5 text-muted-foreground marker:text-accent/70">
                  {p.insights.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:gap-2"
            >
              View on GitHub <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Detail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-accent">
        {label}
      </p>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      description="My current toolkit across programming, visualization and data tools."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {SKILL_GROUPS.map((g) => {
          const Icon = g.icon;
          return (
            <Card key={g.title} className="border-border bg-card p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.items.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Grab the full story"
      description="View or download a one-page PDF resume covering education, projects and skills."
    >
      <Card className="flex flex-col items-start justify-between gap-6 border-border bg-card p-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-xl font-bold">T Sharanya — Resume.pdf</p>
          <p className="mt-1 text-sm text-muted-foreground">
            B.Tech AI &amp; DS · Hyderabad · PDF
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <a href={RESUME_URL} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-1 h-4 w-4" />
              View
            </a>
          </Button>
          <Button asChild>
            <a href={RESUME_URL} download="T-Sharanya-Resume.pdf">
              <Download className="mr-1 h-4 w-4" />
              Download
            </a>
          </Button>
        </div>
      </Card>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-muted">
        <iframe
          src={RESUME_URL}
          title="T Sharanya resume preview"
          className="h-[640px] w-full"
        />
      </div>
    </Section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! Your message has been noted.", {
        description: "I'll get back to you within 1–2 days.",
      });
    }, 700);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something with data."
      description="Have a role, project, or just want to chat about analytics? Drop a message."
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <ContactLink
            icon={Phone}
            label="Phone"
            value={PHONE}
            href="tel:+916303563347"
          />
          <ContactLink
            icon={MapPin}
            label="Location"
            value="Hyderabad, Telangana"
            href="https://maps.google.com/?q=Hyderabad,Telangana"
          />
          <ContactLink
            icon={Linkedin}
            label="LinkedIn"
            value="linkedin.com/in/t-sharanya"
            href={LINKEDIN_URL}
          />
          <ContactLink
            icon={Github}
            label="GitHub"
            value="github.com/sharanya-t1"
            href={GITHUB_URL}
          />
        </div>

        <Card className="border-border bg-card p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Name">
                <Input id="name" name="name" required placeholder="Your name" />
              </Field>
              <Field id="email" label="Email">
                <Input id="email" type="email" name="email" required placeholder="you@email.com" />
              </Field>
            </div>
            <Field id="message" label="Message">
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or project..."
              />
            </Field>
            <Button type="submit" disabled={sending} className="w-full sm:w-auto">
              {sending ? "Sending..." : "Send message"}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-elegant"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="truncate font-medium">{value}</p>
      </div>
      <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
    </a>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>© {new Date().getFullYear()} T Sharanya · Hyderabad, Telangana</p>
        <div className="flex items-center gap-4">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-accent">
            <Github className="h-4 w-4" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-accent">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="tel:+916303563347" className="hover:text-accent">
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
