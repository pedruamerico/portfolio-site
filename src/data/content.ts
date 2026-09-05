// Conteúdo do site em PT e EN. Nada aqui é inventado: projetos, stack e
// trajetória vieram do briefing. Não adicionar métricas, clientes ou resultados.

export type Lang = "pt" | "en";

export const WHATSAPP = {
  number: "5521996296559",
  message: {
    pt: "Olá Pedro, vim pelo seu site e quero fazer um orçamento.",
    en: "Hi Pedro, I came from your website and I'd like a quote.",
  },
} as const;

export const href = {
  email: "mailto:pedruamerico@gmail.com",
  github: "https://github.com/pedruamerico",
  linkedin: "https://www.linkedin.com/in/pedruamerico/",
  discord: "pedronly",
  whatsapp: (lang: Lang) =>
    `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message[lang])}`,
} as const;

export const hero = {
  pt: {
    kicker: "Engenheiro de software · do produto à produção",
    status: "Disponível para projetos",
    statement: "Software do produto à produção.",
    body:
      "Construo a aplicação, automatizo a entrega e mantenho o ambiente de pé. Cinco anos entre desenvolvimento, CI/CD e operação de clusters — uma pessoa para o caminho inteiro.",
    ctaProjects: "Projetos ↓",
    ctaContact: "Falar comigo",
    responseLabel: "resposta",
    responseValue: "até 24h",
    topLabel: "mais pedidos",
    topItems: ["SaaS", "Website", "Sistemas"],
    photoAlt: "Retrato de Pedro Américo",
  },
  en: {
    kicker: "Software engineer · product to production",
    status: "Available for projects",
    statement: "Software from product to production.",
    body:
      "I build the application, automate its delivery and keep the environment standing. Five years across development, CI/CD and cluster operations — one person for the whole path.",
    ctaProjects: "Projects ↓",
    ctaContact: "Get in touch",
    responseLabel: "response",
    responseValue: "within 24h",
    topLabel: "most requested",
    topItems: ["SaaS", "Website", "Systems"],
    photoAlt: "Portrait of Pedro Américo",
  },
} as const;

export const layers = [
  {
    id: "build",
    word: "BUILD",
    pt: {
      role: "Desenvolvimento de produtos, aplicações, ferramentas e automações.",
      out: "Aplicações fullstack do zero: interface, backend e banco.",
    },
    en: {
      role: "Products, applications, tools and automation.",
      out: "Fullstack applications from scratch: interface, backend and database.",
    },
    stack: ["TypeScript", "JavaScript", "Python", "Java", "React", "Next.js", "Node.js", "Electron", "PostgreSQL"],
  },
  {
    id: "deliver",
    word: "DELIVER",
    pt: { role: "CI/CD, containers, releases e GitOps.", out: "Pipeline e conteinerização — a entrega deixa de ser manual." },
    en: { role: "CI/CD, containers, releases and GitOps.", out: "Pipeline and containerization — delivery stops being manual." },
    stack: ["GitLab CI", "Jenkins", "GitHub Actions", "Docker", "Helm", "Argo CD"],
  },
  {
    id: "operate",
    word: "OPERATE",
    pt: {
      role: "Infraestrutura, clusters, observabilidade e troubleshooting.",
      out: "Cluster de pé, e os scripts que tiram trabalho repetitivo do caminho.",
    },
    en: {
      role: "Infrastructure, clusters, observability and troubleshooting.",
      out: "Cluster up and running, with the scripts that take repetitive work out of the way.",
    },
    stack: [
      "Kubernetes", "OpenShift", "Vault", "Linux", "Windows Server",
      "observabilidade", "administração de clusters", "troubleshooting",
    ],
  },
] as const;

export const projects = [
  {
    id: "vikings-league",
    index: "01",
    kicker: { pt: "PLATAFORMA", en: "PLATFORM" },
    title: "Vikings League",
    image: "/projects/vikings.webp",
    imageAlt: {
      pt: "Página inicial da Vikings League, com chamada de inscrição para a competição de EA FC Pro Clubs e destaques das equipes.",
      en: "Vikings League home page, with the EA FC Pro Clubs competition sign-up call and team highlights.",
    },
    context: {
      pt: "Plataforma de competição para EA FC Pro Clubs. Reúne divulgação, inscrições, avaliação estatística e finais transmitidas.",
      en: "A competition platform for EA FC Pro Clubs: promotion, sign-ups, statistical rating and broadcast finals.",
    },
    role: {
      pt: "Idealização, design, desenvolvimento e publicação do zero.",
      en: "Concept, design, development and release, from zero.",
    },
    decision: {
      pt: "Concentrar inscrição, competição e estatísticas em uma única experiência.",
      en: "Concentrate sign-up, competition and statistics in a single experience.",
    },
    outcome: {
      pt: "Fluxo completo da competição reunido em uma plataforma.",
      en: "The full competition flow gathered in one platform.",
    },
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Motion"],
    links: [
      { label: { pt: "código no GitHub", en: "code on GitHub" }, url: "https://github.com/pedruamerico/vikings-league", primary: true },
    ],
  },
  {
    id: "spotar",
    index: "02",
    kicker: { pt: "MARKETPLACE", en: "MARKETPLACE" },
    title: "Spotar",
    image: "/projects/spotar.webp",
    imageAlt: {
      pt: "Página do Spotar exibindo a busca de espaços para eventos com filtros de data, preço e disponibilidade.",
      en: "Spotar page showing the event-space search with date, price and availability filters.",
    },
    context: {
      pt: "Marketplace para descobrir e reservar espaços para eventos por hora ou diária, conectando proprietários e clientes.",
      en: "A marketplace to find and book event spaces by the hour or by the day, connecting owners and clients.",
    },
    role: {
      pt: "Idealização, design, desenvolvimento e publicação do zero.",
      en: "Concept, design, development and release, from zero.",
    },
    decision: {
      pt: "Centralizar descoberta, anúncio e reserva em um fluxo direto, com preço e disponibilidade mais claros.",
      en: "Put discovery, listing and booking in one direct flow, with clearer price and availability.",
    },
    outcome: { pt: "Marketplace publicado e acessível.", en: "Marketplace published and live." },
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    // repositório não informado como público — não exibir link de código
    links: [{ label: "spotar.com.br", url: "https://www.spotar.com.br/", primary: true }],
  },
  {
    id: "log-pose",
    index: "03",
    kicker: { pt: "APLICATIVO WINDOWS", en: "WINDOWS APP" },
    title: "Log Pose",
    image: "/projects/logpose.webp",
    imageAlt: {
      pt: "Interface do Log Pose listando programas disponíveis para instalação e ações de configuração do Windows.",
      en: "Log Pose interface listing installable programs and Windows configuration actions.",
    },
    context: {
      pt: "Aplicativo Windows para instalar programas, aplicar configurações, remover bloatware e administrar o sistema.",
      en: "A Windows app to install programs, apply settings, remove bloatware and administer the system.",
    },
    role: {
      pt: "Idealização, design, desenvolvimento e publicação do zero.",
      en: "Concept, design, development and release, from zero.",
    },
    decision: {
      pt: "Executar operações administrativas por uma ponte IPC isolada, separando interface e privilégios do sistema.",
      en: "Run administrative operations through an isolated IPC bridge, separating the interface from system privileges.",
    },
    outcome: {
      pt: "Instalação e configuração do Windows concentradas em um único aplicativo.",
      en: "Windows install and setup concentrated in a single app.",
    },
    stack: ["Electron", "React", "winget", "Windows APIs"],
    links: [
      { label: "logpose.pedroamerico.com", url: "https://logpose.pedroamerico.com/", primary: true },
      { label: { pt: "código no GitHub", en: "code on GitHub" }, url: "https://github.com/pedruamerico/log-pose" },
    ],
  },
] as const;

// icon: slug em /public/icons/<slug>.svg | null = só texto (sem logo disponível)
// invert: logo preto, precisa de filter:invert(1) no dark
export const stack = [
  {
    label: { pt: "Linguagens", en: "Languages" },
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "openjdk" },
      { name: "SQL", icon: null },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "Shell/Bash", icon: "gnubash" },
      { name: "PowerShell", icon: "powershell" },
    ],
  },
  {
    label: { pt: "Frontend e desktop", en: "Frontend and desktop" },
    items: [
      { name: "Next.js", icon: "nextdotjs", invert: true },
      { name: "React", icon: "react" },
      { name: "Electron", icon: "electron" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Motion", icon: "framer" },
    ],
  },
  {
    label: { pt: "Backend e dados", en: "Backend and data" },
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Route Handlers / API Routes", icon: "nextdotjs", invert: true },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    label: { pt: "Containers e orquestração", en: "Containers and orchestration" },
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "OpenShift", icon: "redhatopenshift" },
      { name: "Helm", icon: "helm" },
    ],
  },
  {
    label: { pt: "CI/CD · GitOps", en: "CI/CD · GitOps" },
    items: [
      { name: "GitLab CI", icon: "gitlab" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Argo CD", icon: "argo" },
    ],
  },
  {
    label: { pt: "Infraestrutura e operação", en: "Infrastructure and operations" },
    items: [
      { name: "Linux", icon: "linux" },
      { name: "Windows Server", icon: "windows" },
      { name: "Vault", icon: "vault" },
    ],
  },
  {
    label: { pt: "Automação e ferramentas", en: "Automation and tooling" },
    items: [
      { name: "Ansible", icon: "ansible" },
      { name: "Git", icon: "git" },
      { name: "GitLab", icon: "gitlab" },
      { name: "GitHub", icon: "github", invert: true },
      { name: "Vercel", icon: "vercel", invert: true },
    ],
  },
] as const;

export const products = {
  pt: { label: "Produtos", note: "o que eu construo", cta: "Precisa de algum destes?", ctaButton: "Fazer orçamento" },
  en: { label: "Products", note: "what I build", cta: "Need one of these?", ctaButton: "Request a quote" },
  items: [
    { icon: "landing", title: { pt: "Landing page", en: "Landing page" }, body: { pt: "Página única de conversão.", en: "A single conversion page." } },
    { icon: "site", title: { pt: "Site institucional", en: "Company website" }, body: { pt: "Presença completa da empresa.", en: "The company's full presence." } },
    { icon: "crud", title: { pt: "Web app / CRUD", en: "Web app / CRUD" }, body: { pt: "Sistemas com cadastro e gestão.", en: "Systems with records and management." } },
    { icon: "saas", title: { pt: "SaaS", en: "SaaS" }, body: { pt: "Produto por assinatura, multiusuário.", en: "A multi-user subscription product." } },
    { icon: "ecom", title: { pt: "E-commerce", en: "E-commerce" }, body: { pt: "Loja online com pagamento.", en: "An online store with payments." } },
    { icon: "desktop", title: { pt: "Aplicativo desktop", en: "Desktop app" }, body: { pt: "Windows, com instalador próprio.", en: "Windows, with its own installer." } },
    { icon: "bots", title: { pt: "Bots e automações", en: "Bots and automation" }, body: { pt: "Discord, Excel e rotinas.", en: "Discord, Excel and routines." } },
    { icon: "api", title: { pt: "APIs e integrações", en: "APIs and integrations" }, body: { pt: "Sistemas conversando entre si.", en: "Systems talking to each other." } },
    { icon: "infra", title: { pt: "Infraestrutura e DevOps", en: "Infrastructure and DevOps" }, body: { pt: "CI/CD, containers e clusters.", en: "CI/CD, containers and clusters." } },
    { icon: "manut", title: { pt: "Manutenção e sustentação", en: "Maintenance and support" }, body: { pt: "Correções, melhorias e suporte.", en: "Fixes, improvements and support." } },
  ],
} as const;

export const path = {
  pt: {
    label: "Trajetória",
    arc: "Aplicações → Entrega → Produção",
    lead: "Há mais de cinco anos atuo entre desenvolvimento de aplicações, automação de entrega e operação de ambientes em produção.",
    steps: [
      "Comecei construindo sistemas e ferramentas, o que me deu uma visão prática do produto e do código.",
      "Com o tempo, passei a automatizar pipelines, releases e infraestrutura para tornar as entregas repetíveis.",
      "Hoje trabalho de ponta a ponta, conectando desenvolvimento, CI/CD e operação.",
    ],
  },
  en: {
    label: "Path",
    arc: "Applications → Delivery → Production",
    lead: "For more than five years I have worked across application development, delivery automation and running environments in production.",
    steps: [
      "I started building systems and tools, which gave me a practical view of product and code.",
      "Over time I moved to automating pipelines, releases and infrastructure to make delivery repeatable.",
      "Today I work end to end, connecting development, CI/CD and operations.",
    ],
  },
} as const;

export const contact = {
  pt: { label: "Contato", quote: "Fazer orçamento", copy: "copiar", copied: "copiado" },
  en: { label: "Contact", quote: "Request a quote", copy: "copy", copied: "copied" },
} as const;
