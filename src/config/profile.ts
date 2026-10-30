type ProfileDate = {
  date: string;
  label: string;
};

type WorkExperience = {
  id: string;
  company: string;
  url: string;
  role: string;
  start: ProfileDate;
  end: ProfileDate | null;
  description?: string;
};

type ProfileLink = {
  label: string;
  href: string;
};

type Profile = {
  name: string;
  role: string;
  intro: string;
  experience: WorkExperience[];
  links: ProfileLink[];
};

// Employment dates and descriptions follow docs/research/content-audit.md.
export const profile: Profile = {
  name: "Igor Antun",
  role: "Senior Software Engineer",
  intro:
    "I build financial products and the systems behind them. Full-stack, primarily TypeScript. Currently at CapitalOS, with a background in banking and payments.",
  experience: [
    {
      id: "capitalos",
      company: "CapitalOS",
      url: "https://capitalos.com/",
      role: "Senior Software Engineer",
      start: { date: "2026-06", label: "Jun 2026" },
      end: null,
      description:
        "Building financial infrastructure that enables software platforms to offer cards, payments, and spend management.",
    },
    {
      id: "scope3",
      company: "Scope3",
      url: "https://scope3.com/",
      role: "Senior Software Engineer",
      start: { date: "2025-01", label: "Jan 2025" },
      end: { date: "2026-01", label: "Jan 2026" },
      description:
        "Built platform features for AI advertising, including brand standards, media quality controls, and campaign reporting.",
    },
    {
      id: "series",
      company: "Series",
      url: "https://seriesfi.webflow.io/",
      role: "Senior Software Engineer",
      start: { date: "2023-08", label: "Aug 2023" },
      end: { date: "2024-04", label: "Apr 2024" },
      description:
        "Built financial product features and integrated the banking services behind them.",
    },
    {
      id: "z1",
      company: "Z1",
      url: "https://z1.app/",
      role: "Senior Software Engineer → Technical Lead",
      start: { date: "2020-06", label: "Jun 2020" },
      end: { date: "2023-06", label: "Jun 2023" },
      description:
        "Joined as the first hire and helped scale the neobank to hundreds of thousands of monthly active users. Later led a small engineering team and its Pix integration.",
    },
    {
      id: "pagarme",
      company: "Pagar.me",
      url: "https://www.pagar.me/",
      role: "Software Engineer",
      start: { date: "2018-01", label: "Jan 2018" },
      end: { date: "2020-05", label: "May 2020" },
      description:
        "Built payment-link products used by thousands of merchants and helped improve the payment infrastructure behind them.",
    },
  ],
  links: [
    { label: "Email", href: "mailto:igor@antun.me" },
    { label: "GitHub", href: "https://github.com/igorantun" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/igorantun" },
  ],
};
