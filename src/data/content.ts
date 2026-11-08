/** SINGLE SOURCE OF CONTENT — sourced from resume. */

export const identity = {
  name: "Polnati Sri Satya Vaishnavi",
  role: "Full-Stack & AI Developer",
  tagline: ["Full-Stack", "AI / ML", "Problem Solver"],
  blurb:
    "CSE undergrad at SRM University AP building full-stack web apps and explainable AI systems — from MERN platforms to fraud-detection models people can actually trust.",
  email: "vaishnavipolnati6@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Vaishnavi-polnati" },
    { label: "LinkedIn", href: "https://linkedin.com/in/vaishnavi-polnati" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a Computer Science undergraduate at SRM University AP who enjoys turning ideas into working, full-stack products.",
    "As an SDE intern at Betterswitch I built the company's primary website with React.js and Node.js and contributed to a Hospital Management System used in real healthcare workflows.",
    "On the AI side, I build things like Prepwire, a Gemini-powered interview prep platform, and FinGuard AI, an explainable fraud-detection system with LightGBM and SHAP.",
  ],
  facts: [
    { k: "Based in", v: "Andhra Pradesh, IN" },
    { k: "Focus", v: "Full-Stack · AI / ML" },
    { k: "Education", v: "B.Tech CSE · CGPA 8.0" },
    { k: "Status", v: "Open to internships & roles" },
  ],
};

export type Skill = { name: string; level: number; group: string };
// shortcut: levels are self-estimates (resume lists no proficiency), tune as needed
export const skills: Skill[] = [
  { name: "Java", level: 0.85, group: "Languages" },
  { name: "Python", level: 0.85, group: "Languages" },
  { name: "JavaScript", level: 0.85, group: "Languages" },
  { name: "HTML / CSS", level: 0.88, group: "Languages" },
  { name: "React.js", level: 0.85, group: "Frameworks" },
  { name: "Node.js", level: 0.8, group: "Frameworks" },
  { name: "Machine Learning", level: 0.75, group: "AI/ML" },
  { name: "Gen AI", level: 0.6, group: "AI/ML" },
  { name: "MySQL / SQL", level: 0.8, group: "Databases" },
  { name: "PostgreSQL", level: 0.7, group: "Databases" },
  { name: "MongoDB", level: 0.82, group: "Databases" },
  { name: "DSA & OOP", level: 0.82, group: "CS Core" },
  { name: "OS & DBMS", level: 0.75, group: "CS Core" },
  { name: "REST APIs", level: 0.8, group: "CS Core" },
  { name: "AWS", level: 0.7, group: "Tools" },
  { name: "Git / GitHub", level: 0.85, group: "Tools" },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  summary: string;
  tags: string[];
};
export const experience: Experience[] = [
  {
    role: "Software Development Engineer Intern",
    org: "Betterswitch · Vijayawada",
    period: "May — Jul 2026",
    summary:
      "Built the company's primary website with React.js and Node.js, shipped responsive reusable UI components from design requirements, and contributed features to a Hospital Management System.",
    tags: ["React.js", "Node.js", "UI Components", "Healthcare"],
  },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  role: string;
  blurb: string;
  description: string;
  tags: string[];
  // hue tints the fallback gradient when no image is set
  hue: number;
  image?: string;
  href?: string;
};
export const projects: Project[] = [
  {
    id: "prepwire",
    title: "Prepwire",
    year: "2026",
    role: "Full-Stack Developer",
    blurb: "AI-powered interview preparation platform.",
    description:
      "A full-stack MERN interview prep platform with secure authentication. Integrates the Gemini API to generate dynamic interview questions and structured feedback, backed by RESTful APIs that handle concurrent interview requests and persist user history.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    hue: 230,
    image: "/projects/prepwire.svg",
  },
  {
    id: "finguard",
    title: "FinGuard AI",
    year: "2026",
    role: "ML Engineer",
    blurb: "Explainable transaction fraud detection.",
    description:
      "Fraud detection on the IEEE-CIS dataset with chronological splits, feature engineering, and a 3-seed LightGBM ensemble reaching 0.669 Average Precision, 0.928 ROC-AUC and 0.646 F1 on held-out data. SHAP gives per-transaction explanations, served through a FastAPI + React.js dashboard for batch predictions and risk prioritization.",
    tags: ["Python", "LightGBM", "SHAP", "FastAPI", "React.js"],
    hue: 160,
    image: "/projects/finguard.svg",
  },
  {
    id: "productlaunch",
    title: "ProductLaunch AI",
    year: "2026",
    role: "Ongoing",
    blurb: "Generative marketing visuals for financial products.",
    description:
      "A generative AI application that creates marketing visuals for financial products from campaign briefs and product requirements — producing varied visuals for different customer segments and reducing dependence on photoshoots and manual design.",
    tags: ["Generative AI", "Diffusion Models"],
    hue: 320,
    image: "/projects/productlaunch.svg",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  hue: number;
};
export const certificates: Certificate[] = [
  { title: "MongoDB Associate Developer", issuer: "MongoDB", year: "2026", hue: 150 },
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2026", hue: 30 },
  { title: "Web & Mobile UI/UX Design (Figma)", issuer: "Udemy", year: "Course", hue: 280 },
  { title: "Genesis Track Winner", issuer: "IEEE", year: "Achievement", hue: 230 },
  { title: "Documentation Head", issuer: "IEEE Student Community, SRM AP", year: "Leadership", hue: 190 },
];

export type Academic = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};
export const academics: Academic[] = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "SRM University AP",
    period: "2024 — 2028",
    detail: "CGPA: 8.0 · Andhra Pradesh, India",
  },
  {
    degree: "Class XII — MPC",
    school: "Sri Chaitanya Junior College",
    period: "2022 — 2024",
    detail: "79.7% · Hyderabad, India",
  },
  {
    degree: "Class X — CBSE",
    school: "Sree Vidhyanikethan International School",
    period: "2022",
    detail: "75% · Hyderabad, India",
  },
];

/** Section registry — order + ids drive nav, scroll progress, and blob morph. */
export const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "certificates", label: "Certificates" },
  { id: "academics", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
