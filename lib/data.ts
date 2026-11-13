export const profile = {
  name: "Muhammad Abass Mudasir",
  handle: "Moh-dakai",
  email: "mudasirabass31@gmail.com",
  github: "https://github.com/Moh-dakai",
  location: "Kaduna, Nigeria",
};

export interface Project {
  name: string;
  kind: string;
  blurb: string;
  stack: string[];
  repo: string;
  live?: string;
  featured?: boolean;
}

// Original (non-fork) public repositories worth showing, sourced from GitHub.
export const projects: Project[] = [
  {
    name: "Aiki",
    kind: "AI · Chrome extension",
    blurb:
      "Job-application copilot: stores your career history once, auto-fills forms, and writes tailored resume + cover-letter PDFs per role. Built on Gemma for Nigerian graduates.",
    stack: ["JavaScript", "Chrome APIs", "Gemma"],
    repo: "https://github.com/Moh-dakai/Aiki",
    featured: true,
  },
  {
    name: "AltLiqIQ",
    kind: "AI infra · MCP server",
    blurb:
      "Maps altcoin liquidation clusters across Binance, Bybit and OKX, classifies squeeze risk and estimates cascade size, exposed as an MCP server for LLM tools.",
    stack: ["Python", "MCP", "Exchange APIs"],
    repo: "https://github.com/Moh-dakai/AltLiqlQ",
    featured: true,
  },
  {
    name: "EventVol Intelligence",
    kind: "AI infra · MCP server",
    blurb:
      "Analyses FX volatility around macro events (NFP, CPI, FOMC) and returns expected pip deviation, breakout probability and fakeout scores over SSE.",
    stack: ["Python", "FastAPI", "SSE", "MCP"],
    repo: "https://github.com/Moh-dakai/EventVol-Intelligence",
    featured: true,
  },
  {
    name: "Fasa",
    kind: "Fintech · Stablecoin rails",
    blurb:
      "Cross-border trade payments for informal African trade that settle in seconds. Merchant dashboard, settlement API and a credit-scoring flow, one `docker compose up` away.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Docker"],
    repo: "https://github.com/Moh-dakai/Stable_coin",
    live: "https://stable-coin-tau.vercel.app",
    featured: true,
  },
  {
    name: "PostMortem.ai",
    kind: "AI · SRE tooling",
    blurb:
      "Autonomous incident root-cause analysis and blameless post-mortem copilot, built for the AI Builders Hackathon 2026.",
    stack: ["React 19", "Vite", "TypeScript"],
    repo: "https://github.com/Moh-dakai/Ai_Build",
  },
  {
    name: "EcomBlack",
    kind: "Commerce",
    blurb:
      "Full-stack storefront with Supabase Auth, Paystack payments, persistent cart and an admin dashboard for inventory.",
    stack: ["Next.js", "TypeScript", "Supabase", "Paystack"],
    repo: "https://github.com/Moh-dakai/ecom-black",
    live: "https://ecom-black-two.vercel.app",
  },
  {
    name: "MTECP",
    kind: "SaaS · Multi-tenancy",
    blurb:
      "Multi-tenant e-commerce platform in Laravel with isolated catalogues per tenant, built to scale horizontally.",
    stack: ["Laravel", "PHP", "MySQL", "Vue"],
    repo: "https://github.com/Moh-dakai/MTECP",
  },
  {
    name: "VeraCred",
    kind: "Web3 · Credentials",
    blurb:
      "Blockchain-anchored academic credential wallet: tamper-proof records students own, employers verify in seconds. Solidity + Hardhat test suite.",
    stack: ["Solidity", "Hardhat", "JavaScript"],
    repo: "https://github.com/Moh-dakai/Vercreed",
  },
  {
    name: "AI Lab Simulator",
    kind: "EdTech · Hackathon",
    blurb:
      "Virtual physics experiments (Ohm, projectile, Hooke) with AI-written explanations and a graceful offline fallback.",
    stack: ["Flask", "JavaScript", "OpenAI"],
    repo: "https://github.com/Moh-dakai/Lab_Sim",
    live: "https://labsim-frontend.vercel.app/",
  },
  {
    name: "reqline",
    kind: "Dev tool",
    blurb:
      "Minimal in-browser API request tester with headers, JSON body, response viewer and local history. No backend, no account.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    repo: "https://github.com/Moh-dakai/reqline",
  },
  {
    name: "Expense Tracker",
    kind: "Web app",
    blurb:
      "Shared group expenses with automatic balance calculation, settlement suggestions and Chart.js breakdowns.",
    stack: ["React", "Chart.js"],
    repo: "https://github.com/Moh-dakai/expense-tracker-app",
    live: "https://expense-tracker-app-kappa-ten.vercel.app/",
  },
  {
    name: "Spendwise AI",
    kind: "AI · Finance",
    blurb:
      "Personal finance assistant that predicts spending and flags overspending, with a Flask API and Streamlit dashboard.",
    stack: ["Python", "Flask", "MySQL", "Streamlit"],
    repo: "https://github.com/Moh-dakai/spendwise",
  },
];

export interface Contribution {
  repo: string;
  org: string;
  prs: number;
  lang: string;
  note?: string;
}

// Merged pull requests authored by Moh-dakai in other people's repositories.
export const contributions: Contribution[] = [
  { org: "BigNathan1", repo: "CoopLumen", prs: 9, lang: "TypeScript" },
  { org: "ASHIR-TECH", repo: "AXEL", prs: 6, lang: "Python", note: "Multi-agent trading system" },
  { org: "ritik4ever", repo: "stellar-goal-vault", prs: 4, lang: "TypeScript" },
  { org: "anumukul", repo: "Stellar-work-", prs: 4, lang: "TypeScript" },
  { org: "Stellopay", repo: "stellopay-frontend", prs: 4, lang: "TypeScript" },
  { org: "Axionvera", repo: "axionvera-sdk", prs: 4, lang: "TypeScript" },
  { org: "accesslayerorg", repo: "accesslayer-client", prs: 3, lang: "TypeScript" },
  { org: "RYD2026DEV", repo: "Admin", prs: 3, lang: "TypeScript" },
  { org: "Fluxora-Org", repo: "Fluxora-Backend", prs: 3, lang: "TypeScript" },
  { org: "accesslayerorg", repo: "accesslayer-contracts", prs: 2, lang: "Rust" },
  { org: "Veritasor", repo: "Veritasor-Contracts", prs: 2, lang: "Rust" },
  { org: "Jagadeeshftw", repo: "grainlify", prs: 2, lang: "Rust" },
  { org: "CredenceOrg", repo: "Credence-Backend", prs: 2, lang: "TypeScript" },
  { org: "RYD2026DEV", repo: "rydepro-mobile", prs: 2, lang: "TypeScript" },
  { org: "RYD2026DEV", repo: "Rydepro-Landing-Page", prs: 2, lang: "TypeScript" },
  { org: "Contractor-x", repo: "Voli-MCP", prs: 2, lang: "Python" },
  { org: "dotandev", repo: "hintents", prs: 1, lang: "Go", note: "Soroban tx replay CLI" },
  { org: "SoroLabs", repo: "soroscope", prs: 1, lang: "Rust" },
  { org: "Tollcraft", repo: "soroban-budget-assert", prs: 1, lang: "Rust" },
  { org: "promisszn", repo: "soroban-amm", prs: 1, lang: "Rust" },
  { org: "Oshioke-Salaki", repo: "GateDelay", prs: 1, lang: "Solidity" },
  { org: "Fluxora-Org", repo: "Fluxora-Contracts", prs: 1, lang: "Rust" },
  { org: "accesslayerorg", repo: "accesslayer-server", prs: 1, lang: "TypeScript" },
  { org: "safetrustcr", repo: "backend-SafeTrust", prs: 1, lang: "TypeScript" },
  { org: "ToluLabs", repo: "StellarCred", prs: 1, lang: "TypeScript" },
  { org: "Core-Foundry", repo: "Notify-Chain", prs: 1, lang: "TypeScript" },
  { org: "CredenceOrg", repo: "Credence-Frontend", prs: 1, lang: "TypeScript" },
  { org: "Chronopay-Org", repo: "ChronoPay-Frontend", prs: 1, lang: "TypeScript" },
  { org: "CalloraOrg", repo: "Callora-Backend", prs: 1, lang: "TypeScript" },
  { org: "Pepsiboy24", repo: "AFIT_STARTUP", prs: 1, lang: "HTML" },
];

export const stats = [
  { value: "68", label: "merged PRs in external repos" },
  { value: "24", label: "orgs contributed to" },
  { value: "8", label: "languages shipped" },
  { value: "12", label: "original projects" },
];

export const experience = [
  {
    role: "ML Engineering Intern",
    company: "FlyRank AI",
    period: "Aug 2026 – Present",
    current: true,
    text: "Machine-learning work as part of the AI team.",
    tags: ["Machine Learning", "Python", "AI"],
  },
  {
    role: "OSS Engineer & Contributor",
    company: "Drips",
    period: "Jul 2026 – Present",
    current: true,
    text: "Shipping improvements to open-source codebases and collaborating with maintainers across Rust, TypeScript and Python projects.",
    tags: ["Open Source", "Rust", "TypeScript", "Code Review"],
  },
  {
    role: "Software Engineer Intern",
    company: "Nigerian College of Aviation Technology, Zaria",
    period: "Aug – Oct 2025",
    current: false,
    text: "Software design and development on-site during a 3-month internship supporting real systems and product work.",
    tags: ["Software Design", "Product Delivery"],
  },
  {
    role: "Development Intern",
    company: "ABU-NITDA IT Hub, Zaria",
    period: "Aug – Oct 2024",
    current: false,
    text: "Built cross-platform Flutter/Dart apps with Firebase auth and cloud storage; shipped MVP features ahead of schedule in an Agile workflow.",
    tags: ["Flutter", "Dart", "Firebase", "Agile"],
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "Python", "Rust", "PHP", "JavaScript", "Go", "Solidity", "C++"] },
  { group: "Frontend", items: ["React 19", "Next.js 16", "Tailwind CSS", "Vite", "Vue", "Flutter"] },
  { group: "Backend", items: ["Node.js", "FastAPI", "Flask", "Django", "Laravel", "REST APIs", "JWT"] },
  { group: "Data & Infra", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Docker", "Vercel", "CI/CD"] },
  { group: "AI & Web3", items: ["MCP servers", "LLM tooling", "Gemma", "Soroban", "Stellar", "Hardhat"] },
];

export const certs = [
  {
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    year: "2026",
    file: "/certs/Udacity_AI_Cert.pdf",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    file: "/certs/Data_Analytics_Essentials_certificate_maxmcgrath207-gmail-com_3823d058-4217-44ee-b64d-5c8d1de69882.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2025",
    file: "/certs/Introduction_to_Cybersecurity_certificate_maxmcgrath207-gmail-com_0b92e66c-caf5-4e93-8e51-50b6721445cb.pdf",
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    year: "2025",
    file: "/certs/Ethical_Hacker_Cisco_certificate.pdf",
  },
];
