
import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "dngt",
    name: "DNGT",
    category: "Web3 · Blockchain · Token ecosystem",
    year: "2026",
    summary:
      "A blockchain project with token infrastructure, wallet connectivity, and an on-chain distribution campaign.",
    description:
      "DNGT is a token ecosystem built around a fixed-supply digital asset and a Genesis Airdrop campaign. The platform connects wallet authentication, campaign eligibility, allocation data, and smart contract infrastructure.",
    role: "Full-stack developer",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Reown",
      "Foundry",
      "Resend",
      "Solidity",
    ],
    focus: [
      "Token ecosystem",
      "Wallet connectivity",
      "Airdrop allocation",
      "Smart contract integration",
      "Campaign management",
    ],
    image: "/projects/dngt.png",
    visual: "dngt",
    links: {
      live: "https://dngt.io/",
    },
    status: "Project paused / research phase",
    challenge:
      "The project required a reliable connection between blockchain infrastructure and campaign operations. Token allocations, eligibility records, wallet identities, and distribution rules needed to remain consistent and auditable.",
    approach: [
      "Built the application interface with Next.js and TypeScript.",
      "Used Supabase to manage application data and campaign records.",
      "Integrated wallet connectivity through Reown.",
      "Developed and tested smart contract workflows using Foundry.",
      "Worked on Genesis Airdrop allocation logic and Merkle-based distribution.",
      "Structured campaign data around explicit eligibility and allocation rules.",
    ],
    learnings: [
      "Token distribution systems need reproducible and independently verifiable allocation data.",
      "Snapshot timing and recipient eligibility are critical dependencies in Merkle-based distributions.",
      "Blockchain applications require careful coordination between on-chain and off-chain state.",
    ],
  },


{
  slug: "earnrave",
  name: "EarnRave",
  category: "Trading Analytics · Trade Journaling · Fintech",
  year: "2025–26",
  summary:
    "A trading journal and analytics platform designed to help traders track, analyse and improve their trading performance.",
  description:
    "EarnRave is a trading analytics platform focused on helping traders record and evaluate their trading activity. Its core direction centres on trade journaling, performance measurement, strategy analysis, risk assessment and actionable insights that help traders identify patterns and make better trading decisions.",
  role: "Product Engineer · Full-Stack",
  stack: [
    "JavaScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "REST APIs",
    "Lightweight Charts",
    "Binance REST API",
    "WebSockets",
  ],
  focus: [
    "Trade journaling",
    "Performance analytics",
    "Strategy tracking",
    "Risk assessment",
    "Market data integration",
    "Trading insights",
  ],
  image: "/projects/earnrave.png",
  visual: "earnrave",
  links: {
    live: "https://earnrave.com/",
  },
  status: "Development project",
  challenge:
    "Traders need a structured way to record their trades, evaluate performance and understand the patterns behind their results. EarnRave is being developed to bring trade records, market data and performance analysis into one platform.",
  approach: [
    "Designed the platform around trade journaling and structured trading records.",
    "Developed the application foundation using Node.js, Express and PostgreSQL.",
    "Integrated Binance market data through REST APIs and WebSockets.",
    "Built interactive market visualisations using Lightweight Charts.",
    "Defined the direction for performance measurement, strategy analysis and risk assessment.",
  ],
  learnings: [
    "Structured trade records are essential for meaningful performance analysis.",
    "Trading analytics requires consistent calculations and reliable underlying data.",
    "Market data integrations need to account for real-time updates and connection reliability.",
    "Useful trading insights should help traders understand their behaviour, not simply display statistics.",
  ],
},


  {
    slug: "rebox",
    name: "REBOX",
    category: "Device intelligence · E-commerce · Marketplace",
    year: "2026",
    summary:
      "A device marketplace combining device identification, product data, and verification-oriented trust features.",
    description:
      "REBOX is a device commerce platform focused on making it easier to buy and sell used electronics with better product information. Its core direction combines a structured device catalogue, automatic device identification, verification workflows, and a marketplace for device listings.",
    role: "Product engineer · Full-stack",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Python",
      "FastAPI",
      "Tailwind CSS",
    ],
    focus: [
      "Device identification",
      "Hardware catalogue",
      "Device verification",
      "Marketplace architecture",
      "Device intelligence",
      "Trust and pricing signals",
    ],
    image: "/projects/rebox.png",
    visual: "rebox",
    links: {
      live: "https://rebox.ng/",
    },
    status: "In active development",
    challenge:
      "Used-device marketplaces often rely on seller-entered product information, making it difficult to establish exactly which device is being listed. REBOX aims to make device identity and product information more structured and reliable.",
    approach: [
      "Designed a normalized device catalogue with brands, models, model numbers, and specifications.",
      "Implemented device identification using browser and device signals matched against structured catalogue records.",
      "Built an identification endpoint that resolves device information and returns a confidence score.",
      "Separated device identity, device variants, and marketplace listing information.",
      "Designed an architecture for future hardware telemetry ingestion and verification services.",
      "Structured the product around the journey of identifying, evaluating, and purchasing a device.",
    ],
    learnings: [
      "Device identification requires normalized catalogue data and careful handling of ambiguous results.",
      "Device identity and device condition are separate concepts and should be verified independently.",
      "Trust features should distinguish automatically detected information from seller-provided claims.",
      "A device marketplace can create additional value through structured product intelligence.",
    ],
  },

  {
    slug: "metacap-technology",
    name: "Metacap Technology",
    category: "Technology · Business website",
    year: "2024",
    summary:
      "A corporate digital presence for a technology company providing software and digital solutions.",
    description:
      "Metacap Technology is a technology business focused on digital products and software development. Its website serves as the company's online presence, introducing the business, communicating its capabilities, and providing a point of contact for prospective clients.",
    role: "Founder · Full-stack developer",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
    focus: [
      "Corporate website",
      "Brand positioning",
      "Service presentation",
      "Responsive interface",
      "Client engagement",
    ],
    image: "/projects/metacap.png",
    visual: "metacap",
    links: {
      live: "https://metacaptechnology.com/",
    },
    status: "Company project",
    challenge:
      "The goal was to establish a clear digital identity for the company and present its technology capabilities in a way that prospective clients could understand and explore.",
    approach: [
      "Structured the website around the company's identity, capabilities, and services.",
      "Built responsive interfaces for desktop and mobile users.",
      "Used reusable frontend components to maintain consistency across the website.",
      "Organized content to make the company's offerings and contact pathways easy to find.",
    ],
    learnings: [
      "A technology company's website should communicate both its capabilities and its business identity.",
      "Clear service positioning is as important as visual presentation.",
    ],
  },

  {
    slug: "acer-institute-of-technology",
    name: "Acer Institute of Technology",
    category: "Education · STEAM · Institutional website",
    year: "2026",
    summary:
      "A creative educational website presenting STEAM learning, innovation clubs, and hands-on technology education for young learners.",
    description:
      "Acer Institute of Technology focuses on helping young people explore Science, Technology, Engineering, Arts, and Mathematics through practical, creative learning. Its website introduces the institute's educational approach, explains its STEAM framework, presents its school-based Innovation Clubs, and showcases the kinds of projects learners can explore.",
    role: "Full-stack developer · Website design and development",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "CSS",
      "Lucide",
    ],
    focus: [
      "STEAM education",
      "Educational storytelling",
      "Innovation clubs",
      "Institutional presentation",
      "Responsive web design",
      "Visual interaction design",
    ],
    image: "/projects/ait.png",
    visual: "acer",
    links: {
      live: "https://acer-institute-of-tecnology.vercel.app/",
    },
    status: "Live website",
    challenge:
      "The website needed to communicate an educational philosophy that goes beyond conventional classroom learning. It had to make STEAM education understandable, present the institute's approach to practical learning, and encourage schools and interested visitors to engage with the institute.",
    approach: [
      "Designed the website around the institute's STEAM learning philosophy.",
      "Created dedicated content sections for the educational approach, five STEAM disciplines, Innovation Clubs, and learner projects.",
      "Used expressive typography, illustrations, gradients, and visual elements to make the experience engaging and approachable.",
      "Built responsive layouts and navigation for desktop and mobile devices.",
      "Structured the contact section around school partnerships and enquiries.",
    ],
    learnings: [
      "Educational websites need to communicate learning outcomes and teaching philosophy, not just institutional information.",
      "Visual storytelling can make technical and educational concepts more accessible.",
      "Responsive design is particularly important when building for students, parents, and school administrators using different devices.",
    ],
  },

  {
    slug: "zamar-fields",
    name: "Zamar Fields",
    category: "Business · Brand website",
    year: "2026",
    summary:
      "A dedicated business website presenting the Zamar Fields brand and its offerings.",
    description:
      "Zamar Fields is a business website project built to establish the brand's digital presence and give visitors a clear way to understand its identity, explore its offerings, and make enquiries.",
    role: "Full-stack developer · Website design and development",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
    focus: [
      "Business website",
      "Brand presentation",
      "Content architecture",
      "Responsive design",
      "User experience",
    ],
    image: "/projects/zamar.png",
    visual: "zamar",
    links: {
      live: "https://zamar-fields-website.vercel.app/",
    },
    status: "Live website",
    challenge:
      "The project required a dedicated online experience that presents the Zamar Fields brand clearly, organizes its business information, and gives visitors a straightforward path to engage with the business.",
    approach: [
      "Developed a dedicated website for the Zamar Fields brand.",
      "Organized the website content around the business and its offerings.",
      "Built responsive layouts for different screen sizes.",
      "Focused on visual consistency, straightforward navigation, and a clear visitor experience.",
    ],
    learnings: [
      "Business websites should be structured around the information visitors need to make decisions.",
      "Brand presentation and usability need to work together rather than compete.",
    ],
  },
];

export const featuredProjects = projects.slice(0, 3);
