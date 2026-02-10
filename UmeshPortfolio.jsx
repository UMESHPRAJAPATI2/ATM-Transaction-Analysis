import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Workflow,
  Brain,
  BarChart3,
  Code,
  ChevronRight,
  Terminal,
  Database,
  Globe,
  Zap,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

const SECTION_MESSAGES = {
  hero: "Greetings, Traveler! I'm Umesh. Welcome to my digital universe of Automation & Data Science.",
  tech: "Scanning systems... Detected high-proficiency in Python, LLMs, and Make.com workflows.",
  experience:
    "Accessing flight logs... Here are the missions I've completed and the organizations I've served.",
  services:
    "My toolkit is vast. From building AI agents to crafting complex data pipelines, I can optimize your operations.",
  work: "Behold the artifacts! These are the deployed projects making a real impact in the galaxy.",
  contact:
    "End of transmission reached. Ready to initiate a collaboration? Open a frequency channel below.",
};

const techItems = [
  { name: "MAKE.COM", icon: Zap },
  { name: "PYTHON", icon: Terminal },
  { name: "MACHINE LEARNING", icon: Brain },
  { name: "POWER BI", icon: BarChart3 },
  { name: "NLP & LLMS", icon: MessageSquare },
  { name: "GOOGLE CLOUD", icon: Globe },
  { name: "SQL", icon: Database },
  { name: "REACT", icon: Code },
];

const experiences = [
  {
    period: "2025 — PRESENT",
    role: "AI Automation Developer",
    company: "Palm Leisure Stays",
    points: [
      "Designed intelligent CRM and lead-routing workflows with Make.com and OpenAI APIs.",
      "Automated multi-channel communication between sales, support, and marketing teams.",
      "Improved response velocity and reduced manual operations with AI-powered process orchestration.",
    ],
  },
  {
    period: "2024 JUN — AUG",
    role: "Power BI Developer Intern",
    company: "Celebal Technologies",
    points: [
      "Built executive dashboards to monitor campaign efficiency and conversion KPIs.",
      "Connected raw ETL outputs into clean semantic models for self-service analytics.",
      "Delivered actionable forecasting views for strategic business decisions.",
    ],
  },
  {
    period: "2024 FEB — JUN",
    role: "Production Analyst Intern",
    company: "Hindustan Zinc",
    points: [
      "Analyzed industrial process data and identified downtime bottlenecks.",
      "Developed data-backed reporting for plant productivity optimization.",
      "Collaborated cross-functionally to improve operational monitoring systems.",
    ],
  },
];

const services = [
  {
    title: "Workflow Automation",
    icon: Workflow,
    description:
      "End-to-end automation systems that orchestrate repetitive business operations with precision.",
  },
  {
    title: "AI Integration",
    icon: Brain,
    description:
      "Deploy LLM-enabled copilots, chat workflows, and decision systems into your product stack.",
  },
  {
    title: "BI Dashboards",
    icon: BarChart3,
    description:
      "Build robust reporting layers and intuitive KPI dashboards for strategic visibility.",
  },
  {
    title: "Custom Development",
    icon: Code,
    description:
      "Design purpose-built data and web tools using modern frameworks and cloud-ready architecture.",
  },
];

const projects = [
  {
    title: "Auto-CRM Agent",
    category: "AUTOMATION SUITE",
    description:
      "Autonomous lead qualification and follow-up engine integrating Make.com, OpenAI API, and Meta Graph API for real-time engagement.",
    tools: ["Make.com", "OpenAI API", "Meta Graph API"],
    gradient: "from-blue-700/60 via-indigo-600/40 to-cyan-500/30",
  },
  {
    title: "Ad-Spend Optimizer",
    category: "ANALYTICS INTELLIGENCE",
    description:
      "Cross-channel ROI intelligence platform combining Power BI dashboards, Python ETL models, and BigQuery warehousing for smarter budget allocation.",
    tools: ["Power BI", "Python ETL", "BigQuery"],
    gradient: "from-purple-700/60 via-pink-600/40 to-fuchsia-500/30",
  },
  {
    title: "Safety Vision",
    category: "COMPUTER VISION",
    description:
      "Real-time safety compliance monitoring powered by TensorFlow detection pipelines connected to IoT streams and alerting workflows.",
    tools: ["Python", "TensorFlow", "IoT Hub"],
    gradient: "from-emerald-700/60 via-teal-600/40 to-cyan-500/30",
  },
];

const AstroGuide = ({ section }) => {
  const message = SECTION_MESSAGES[section] || SECTION_MESSAGES.hero;

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 hidden w-[340px] max-w-[90vw] md:block"
      animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={message}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="mb-4 rounded-2xl border border-cyan-300/30 bg-zinc-900/90 p-4 text-sm leading-relaxed text-zinc-200 shadow-[0_0_35px_rgba(56,189,248,0.2)] backdrop-blur-xl"
        >
          {message}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-end pr-2 drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]">
        <svg viewBox="0 0 180 180" className="h-32 w-32">
          <circle cx="90" cy="90" r="72" fill="rgba(255,255,255,0.08)" />
          <ellipse cx="90" cy="95" rx="44" ry="52" fill="#f4f4f5" />
          <ellipse cx="90" cy="78" rx="31" ry="24" fill="#18181b" />
          <circle cx="80" cy="74" r="4" fill="#38BDF8" opacity="0.7" />
          <rect x="69" y="108" width="42" height="22" rx="8" fill="#38BDF8" opacity="0.85" />
          <circle cx="79" cy="119" r="3" fill="#0f172a">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="90" cy="119" r="3" fill="#0f172a">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="101" cy="119" r="3" fill="#0f172a">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <rect x="30" y="88" width="30" height="16" rx="8" fill="#e4e4e7" />
          <rect x="120" y="88" width="30" height="16" rx="8" fill="#e4e4e7" />
        </svg>
      </div>
    </motion.div>
  );
};

const SectionWatcher = ({ id, setSection, className = "", children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  useEffect(() => {
    if (isInView) setSection(id);
  }, [id, isInView, setSection]);

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
};

export default function UmeshPortfolio() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);

  const stars = useMemo(
    () =>
      Array.from({ length: 65 }, (_, i) => ({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${2 + Math.random() * 4}s`,
      })),
    []
  );

  const onCardMouseMove = useCallback((e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>

      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-cyan-500 mix-blend-difference"
      />

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.1),transparent_35%)]" />
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute h-[2px] w-[2px] animate-pulse rounded-full bg-white/80"
            style={{
              left: star.x,
              top: star.y,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 90, damping: 16 }}
        className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500" />
            <div className="text-sm font-black tracking-[0.25em]">
              UMESH<span className="text-zinc-400">.AI</span>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {["experience", "services", "work", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="group text-xs font-bold uppercase tracking-[0.2em] text-zinc-300"
              >
                {item}
                <span className="mt-1 block h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:border-cyan-400/50"
          >
            <Mail className="h-4 w-4 text-cyan-400" /> Init Comms
          </a>
        </div>
      </motion.nav>

      <SectionWatcher id="hero" setSection={setCurrentSection} className="relative flex min-h-screen items-center px-6 pt-28">
        <motion.div style={{ y: heroY }} className="mx-auto w-full max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            System Online: Ready to Automate
          </div>

          <h1 className="text-5xl font-black leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="block">
              DATA.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              LOGIC.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="animate-gradient-x block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              FUTURE.
            </motion.span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Architecting intelligent workflows and predictive models. I bridge the gap between
            <span className="font-semibold text-white"> Human Intent </span>
            and
            <span className="font-semibold text-white"> Machine Execution</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
              View Work
            </a>
            <a
              href="#"
              className="rounded-full border border-white/30 bg-transparent px-7 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-cyan-400/70" />
        </motion.div>
      </SectionWatcher>

      <SectionWatcher id="tech" setSection={setCurrentSection} className="relative border-y border-white/10 bg-zinc-950/60 py-6 backdrop-blur-sm">
        <div className="overflow-hidden">
          <motion.div
            className="flex min-w-max items-center gap-10"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...techItems, ...techItems, ...techItems].map(({ name, icon: Icon }, index) => (
              <div key={`${name}-${index}`} className="flex items-center gap-3 px-2 text-zinc-400">
                <Icon className="h-5 w-5 text-cyan-500" />
                <span className="text-sm font-black tracking-[0.22em]">{name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </SectionWatcher>

      <SectionWatcher id="experience" setSection={setCurrentSection} className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">Mission History</p>
            <h2 className="text-5xl font-black tracking-tighter md:text-7xl">
              FLIGHT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">LOGS</span>
            </h2>
          </div>

          <div className="relative space-y-10 border-l border-cyan-400/20 pl-8">
            {experiences.map((item, idx) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
              >
                <span className="absolute -left-[41px] top-8 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.9)]" />
                <p className="font-mono text-xs tracking-[0.2em] text-zinc-400">{item.period}</p>
                <h3 className="mt-3 text-2xl font-bold">{item.role}</h3>
                <p className="mt-2 inline-flex items-center gap-2 text-zinc-300">
                  <Globe className="h-4 w-4 text-cyan-400" />
                  {item.company}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <ChevronRight className="mt-0.5 h-4 w-4 text-cyan-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionWatcher>

      <SectionWatcher id="services" setSection={setCurrentSection} className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">Capabilities</p>
          <h2 className="mt-4 text-center text-5xl font-black tracking-tighter md:text-7xl">TECHNICAL ARSENAL</h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map(({ title, icon: Icon, description }) => (
              <motion.article
                key={title}
                onMouseMove={onCardMouseMove}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56,189,248,0.14), transparent 40%)`,
                  }}
                />
                <Icon className="relative h-10 w-10 text-cyan-400 transition group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_rgba(56,189,248,0.7)]" />
                <h3 className="relative mt-6 text-2xl font-bold">{title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-zinc-300">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionWatcher>

      <SectionWatcher id="work" setSection={setCurrentSection} className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-black tracking-tighter md:text-7xl">
            DEPLOYED <span className="text-cyan-400">SYSTEMS</span>
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -10 }}
                className="group relative flex h-[500px] flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-black/60 p-6"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition duration-300 group-hover:scale-105 group-hover:brightness-125`}
                />
                <div className="relative z-10">
                  <span className="inline-flex items-center rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-zinc-100">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-3xl font-black tracking-tight">{project.title}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-100/90 transition-all duration-300 group-hover:max-h-40">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-200">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-white/30 px-3 py-1">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="mt-4 h-6 w-6 text-white opacity-0 transition group-hover:opacity-100" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionWatcher>

      <SectionWatcher id="contact" setSection={setCurrentSection} className="px-6 pb-10 pt-24">
        <div className="mx-auto max-w-7xl border-t border-cyan-400/60 pt-12">
          <h2 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-8xl">
            LET&apos;S <span className="animate-gradient-x bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">BUILD</span>
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:prajapatumesh60@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              <Mail className="h-4 w-4" /> prajapatumesh60@gmail.com
            </a>
            {[Linkedin, Github, Twitter].map((Icon, idx) => (
              <button
                type="button"
                key={idx}
                className="rounded-full border border-white/30 p-3 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>

          <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-6 text-sm text-zinc-400 md:flex-row">
            <div>
              <p>MCA · Subodh Jain College (2025–27)</p>
              <p>BCA Data Science · ICFAI University (2022–25)</p>
            </div>
            <p>© 2026 Umesh Kumar · Bridging Human Intent and Machine Execution</p>
          </div>
        </div>
      </SectionWatcher>

      <AstroGuide section={currentSection} />
    </div>
  );
}
