/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT YOUR PORTFOLIO HERE
 *  Everything shown on the site comes from this file.
 *  Empty strings ('') hide the matching button/field on the page.
 * ─────────────────────────────────────────────────────────────
 */

/* ── Basic profile ─────────────────────────────────────────── */
export const profile = {
  name: 'Ra Mani Kanta Bathula',
  // Shown in the navbar and footer
  shortName: 'Ra Mani Kanta',
  initials: 'RM',
  title: 'Software Engineer & Full-Stack Developer',
  email: 'ram.thedevhub@gmail.com',
  phone: '+91 6303589140',
  phoneHref: 'tel:+916303589140',
  location: 'India · Open to Remote & Hybrid',
  github: 'https://github.com/Ramcodeverse',
  // TODO: add your LinkedIn profile URL (for example 'https://www.linkedin.com/in/your-name').
  // While this is empty the LinkedIn button is hidden instead of linking to a dead page.
  linkedin: '',
  // Keep your résumé PDF in the /public folder with this name,
  // or change the path below to match your file.
  resume: '/resume.pdf',
  resumeFileName: 'Ra-Mani-Kanta-Bathula-Resume.pdf',
}

/* ── Navigation (id = the section's id on the page) ────────── */
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
]

/* ── Hero ──────────────────────────────────────────────────── */
export const hero = {
  greeting: 'Hi, I’m',
  // Segments marked highlight: true get an orange underline
  intro: [
    { text: 'I build digital products that solve real-world problems and create meaningful impact through ' },
    { text: 'clean code', highlight: true },
    { text: ', ' },
    { text: 'creative thinking', highlight: true },
    { text: ', and ' },
    { text: 'simple, beautiful solutions', highlight: true },
    { text: '.' },
  ],
  primarySkills: ['Node.js', 'Express', 'React', 'TypeScript', 'Application Security'],
}

/* ── About ─────────────────────────────────────────────────── */
export const about = {
  paragraphs: [
    'Cyber Security graduate and aspiring Backend Developer (Node.js) focused on application security. I have built scalable Node.js and Express services with WebSockets, JWT authentication, RBAC, encrypted storage, and parameterized database access.',
    'Through cybersecurity internships I have run vulnerability assessments with Burp Suite, Nmap, and Wireshark. I like production-ready applications that are reliable, maintainable, and secure by design.',
  ],
  interests: [
    'Backend development with Node.js',
    'Application security',
    'Full-stack web applications',
    'Cloud (Google Cloud and AWS)',
  ],
  // Roles you are open to — shown in the Contact section
  openTo: 'full-time Software Engineer, Full-Stack Developer, and Cybersecurity Analyst roles for the Class of 2026',
  // The credential count is calculated automatically from the Certifications list below.
  // "18+" is the figure from your original portfolio; update it if it is no longer accurate.
  projectsCompleted: '18+',
}

/* ── Skills (icon names are defined in components/Icon.jsx) ── */
export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming languages',
    icon: 'code',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Bash'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'browser',
    items: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'server',
    items: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'JWT Authentication'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    items: ['SQLite', 'Prisma ORM', 'SQL'],
  },
  {
    id: 'cloud',
    title: 'Cloud & tools',
    icon: 'cloud',
    items: ['Google Cloud', 'AWS', 'Git', 'GitHub', 'Linux', 'Node.js test runner (node:test)'],
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    icon: 'shield',
    items: [
      'OWASP Top 10',
      'API Security',
      'RBAC',
      'bcrypt',
      'AES-256-GCM',
      'Rate Limiting',
      'Vulnerability Assessment',
      'CVSS',
      'Burp Suite',
      'Nmap',
      'Wireshark',
    ],
  },
]

/* ── Projects ──────────────────────────────────────────────── */
export const projectsLink = {
  label: 'All projects on GitHub',
  href: 'https://github.com/Ramcodeverse',
}

export const projects = [
  {
    id: 'blinktalks',
    title: 'BlinkTalks',
    description:
      'Real-time messaging and team workspace platform featuring native WebSockets, presence indicators, typing notifications, and Kanban task boards.',
    image: '/images/project-blinktalks.webp',
    imageAlt:
      'BlinkTalks sign-up screen with a live workspace preview showing a Kanban task checklist and an online presence count',
    imageWidth: 1052,
    imageHeight: 601,
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma'],
    github: 'https://github.com/Ramcodeverse/BlinkTalks',
    live: '', // add a live demo URL here when you have one
  },
  {
    id: 'mindmate',
    title: 'MindMate',
    description:
      'AI-powered wellness application with mood tracking, journaling, and habit streaks, featuring an admin console and secure Gemini API integration via a server-side proxy.',
    image: '/images/project-mindmate.webp',
    imageAlt: 'MindMate guided check-in screen asking how you are feeling, with a grid of emotion choices',
    imageWidth: 1200,
    imageHeight: 800,
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Gemini API'],
    github: 'https://github.com/Ramcodeverse/MindMate',
    live: '',
  },
  {
    id: 'nexus-taskflow',
    title: 'Nexus TaskFlow',
    description:
      'Production-ready full-stack task management platform with real-time collaboration, AI-powered workflow automation, and SaaS-grade architecture.',
    image: '/images/project-nexus-taskflow.svg',
    imageAlt: 'Nexus TaskFlow interface: a three-column task board beside an AI assistant chat panel',
    imageWidth: 800,
    imageHeight: 480,
    tags: ['React', 'Node.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/ramcodeverse/nexus_taskflow',
    live: '',
  },
]

/* ── Experience (newest first) ─────────────────────────────── */
// logo: image path inside /public/images, or '' to show the organization's initials
export const experience = [
  {
    id: 'datavalley',
    date: 'Jan 2026 – Apr 2026',
    organization: 'Datavalley India Pvt. Ltd. (APSCHE)',
    role: 'Cybersecurity Intern · Remote',
    logo: '/images/logo-datavalley.webp',
    points: [
      'Performed vulnerability assessments on 15+ web endpoints and local networks using Nmap, Wireshark, and Burp Suite; identified and remediated 12 critical vulnerabilities.',
      'Remediated OWASP Top 10 vulnerabilities across mock production environments.',
      'Automated log parsing and port scanning with Python and Bash on Linux, reducing manual audit time by 60%; documented findings with CVSS scoring and remediation recommendations.',
    ],
  },
  {
    id: 'zscaler',
    date: 'Jul – Sep 2025',
    organization: 'Zscaler',
    role: 'Zero Trust Cloud Security Virtual Intern',
    logo: '',
    points: [
      '10-week internship on Zero Trust architecture, cloud security and advanced threat protection.',
      'Built working knowledge of Zero Trust design and cloud security best practices.',
    ],
  },
  {
    id: 'apssdc',
    date: 'May – Jul 2025',
    organization: 'APSSDC Online',
    role: 'Data Analysis Using Python Intern',
    logo: '',
    points: [
      'Wrote Python scripts with Pandas and NumPy to clean and validate 100K+ rows of tabular data.',
      'Automated cleaning, aggregation, and validation workflows, reducing processing runtime by 35%.',
    ],
  },
  {
    id: 'ethical-hacking-institute',
    date: 'Apr – Jun 2025',
    organization: 'Ethical Hacking Institute',
    role: 'Ethical Hacking Virtual Intern',
    logo: '',
    points: [
      '10-week internship covering ethical-hacking methodology, penetration testing and vulnerability assessment.',
      'Ran hands-on penetration-testing exercises and full vulnerability assessments.',
    ],
  },
  {
    id: 'palo-alto',
    date: 'Jan – Mar 2025',
    organization: 'Palo Alto Networks',
    role: 'Cybersecurity Virtual Intern',
    logo: '/images/logo-palo-alto.webp',
    points: [
      '10-week programme on advanced threat analysis, network security and next-generation firewalls.',
      'Completed advanced training in threat detection and prevention.',
    ],
  },
  {
    id: 'eduskills',
    date: '2024 – 2025',
    organization: 'EduSkills & APSCHE',
    role: 'UiPath RPA Developer & Ethical Hacking Intern · Long-term',
    logo: '',
    points: [
      '240-hour programme combining UiPath RPA development with ethical hacking, organised by EduSkills with APSCHE.',
      'Built automations in UiPath and practised hands-on ethical hacking.',
    ],
  },
  {
    id: 'bluestock',
    date: 'Oct – Nov 2024',
    organization: 'Bluestock',
    role: 'Software Development Engineer Intern',
    logo: '/images/logo-bluestock.webp',
    points: [
      'Full-stack development and system design for fintech applications.',
      'Engineered frontend components for fintech dashboards and added robust API integrations, improving performance and stability.',
    ],
  },
  {
    id: 'uipath',
    date: '2023 – 2024',
    organization: 'UiPath',
    role: 'RPA Developer & Automation Specialist · Hybrid',
    logo: '/images/logo-uipath.webp',
    points: [
      'Designed robotic process automation and workflow optimisation for enterprise clients.',
      'Automated 50+ business processes, cut manual effort by 70% and led automation workshops.',
    ],
  },
  {
    id: 'tcs-forage',
    date: '2023',
    organization: 'TCS (Forage Program)',
    role: 'Full-Stack Development Trainee · Virtual',
    logo: '/images/logo-tcs.webp',
    points: [
      'Modern web development, cloud computing and agile practice on real-world enterprise applications.',
      'Earned an advanced React.js certification and built a scalable microservices architecture.',
    ],
  },
  {
    id: 'mastercard-forage',
    date: '2023',
    organization: 'Mastercard (Forage Program)',
    role: 'Cybersecurity Analyst Trainee · Virtual',
    logo: '/images/logo-mastercard.webp',
    points: [
      'Threat modelling, incident response and security architecture for financial systems.',
      'Ran security assessments and drafted incident-response procedures.',
    ],
  },
  {
    id: 'jpmorgan-forage',
    date: '2022',
    organization: 'JPMorgan Chase (Forage Program)',
    role: 'Software Engineering Trainee · Virtual',
    logo: '/images/logo-jpmorgan.webp',
    points: [
      'Fintech development covering trading systems, risk management and high-performance computing.',
      'Built a real-time trading dashboard and optimised trading algorithms.',
    ],
  },
]

/* ── Education ─────────────────────────────────────────────── */
export const education = {
  // Facts shown in the summary card. Empty fields are hidden on the live site
  // (while you run `npm run dev`, a dashed reminder box shows what is still missing).
  // TODO: fill in your degree, institution and any verified academic details (CGPA / percentage).
  summary: {
    headline: 'Cyber Security graduate · Class of 2026',
    degree: '', // e.g. 'B.Tech in Computer Science' — replace with your real degree
    specialization: 'Cyber Security',
    institution: '', // your college / university name
    graduationYear: '2026',
    grade: '', // optional: CGPA or percentage you can verify
  },
  // Learning journey from your original portfolio (newest first).
  // icon names are defined in components/Icon.jsx
  timeline: [
    {
      id: 'se-2026',
      year: '2026',
      title: 'Software Engineer',
      text: 'Production-ready, cloud-native full-stack applications',
      icon: 'cap',
      color: '#f26a1f',
    },
    {
      id: 'cyber-2024',
      year: '2024',
      title: 'Cybersecurity Specialization',
      text: 'Advanced threat analysis and security implementation',
      icon: 'shield',
      color: '#e5484d',
    },
    {
      id: 'fullstack-2023',
      year: '2023',
      title: 'Full-Stack Development',
      text: 'Modern web applications with cloud integration',
      icon: 'code',
      color: '#3b6fd4',
    },
    {
      id: 'iot-2022',
      year: '2022',
      title: 'IoT & Blockchain',
      text: 'Emerging technologies and decentralized systems',
      icon: 'chip',
      color: '#2fa866',
    },
    {
      id: 'cs-2021',
      year: '2021 – 2022',
      title: 'Computer Science Education',
      text: 'Foundation in algorithms and software engineering',
      icon: 'book',
      color: '#8e4ec6',
    },
  ],
}

/* ── Certifications ────────────────────────────────────────── */
// category: 'certification' | 'virtual' | 'course'
// links: { label, href, primary? } — the primary link renders as the filled button
export const certificationFilters = [
  { id: 'all', label: 'All' },
  { id: 'certification', label: 'Certifications' },
  { id: 'virtual', label: 'Virtual experiences' },
  { id: 'course', label: 'Courses' },
]

export const certificationsBundle = {
  label: 'All 4 Palo Alto certificates in one PDF',
  href: 'https://drive.google.com/file/d/1i_s5rBfQPZbQMhmSBH2yMKmx2AkxouIs/view?usp=drive_web',
}

export const certifications = [
  {
    id: 'gcp-ace',
    category: 'certification',
    badge: 'GC',
    color: '#1a64d6',
    date: 'Jul 2025',
    title: 'Google Cloud Certified Associate Cloud Engineer',
    issuer: 'Google Cloud',
    meta: 'Valid until Jul 2028 · ID e8a3787c…',
    skills: ['Google Cloud Platform', 'IAM', 'Infrastructure as Code'],
    links: [
      { label: 'Credly badge', href: 'https://www.credly.com/badges/bbd6a1fc-7f3d-4eae-85a5-6c5ce466e7c6/public_url' },
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1g1jLt_qfbdq0zXHkoToqo5DBaxuqYIRn/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'gcp-engineering',
    category: 'certification',
    badge: 'GC',
    color: '#1a64d6',
    date: 'Foundational',
    title: 'Google Cloud Engineering Certificate',
    issuer: 'Google Cloud · Career Launchpad',
    meta: 'Cloud engineering, DevOps and solution architecture foundations',
    skills: ['Cloud Engineering', 'GKE & DevOps', 'Vertex AI'],
    links: [
      { label: 'View certificate', href: 'https://www.credly.com/badges/78df7518-2968-4e3c-abe7-a37933e29760/public_url', primary: true },
    ],
  },
  {
    id: 'aws-academy',
    category: 'certification',
    badge: 'AWS',
    color: '#9a5800',
    date: 'May 2024',
    title: 'AWS Academy Graduate – Cloud Architecting',
    issuer: 'AWS Academy',
    meta: '60 course hours',
    skills: ['Cloud Architecture', 'Well-Architected', 'VPC & S3'],
    links: [
      { label: 'Credly badge', href: 'https://www.credly.com/go/adbA6UHy' },
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1w34T2Eb516pN-wxurhTxqdoR9qCAdr8T/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'uipath-ada',
    category: 'certification',
    badge: 'Ui',
    color: '#d63a0f',
    date: 'Apr 2025',
    title: 'UiPath Automation Developer Associate Training',
    issuer: 'UiPath Academy',
    meta: 'Diploma of Completion',
    skills: ['UiPath Studio', 'RPA Workflows', 'Automation'],
    links: [
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1M4WcFIwh7xRUenigUq2tGTo-ohOE1nOJ/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'uipath-rpa-foundation',
    category: 'certification',
    badge: 'Ui',
    color: '#d63a0f',
    date: '2025',
    title: 'RPA Developer Foundation (v2021.10)',
    issuer: 'UiPath',
    meta: 'Diploma of Completion',
    skills: ['RPA Fundamentals', 'UiPath Studio', 'Process Automation'],
    links: [
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1rb6UEdQbfk8FKE03cvHJcSHhvZVHt4Lz/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'pan-cyber-fundamentals',
    category: 'certification',
    badge: 'PA',
    color: '#c2410c',
    date: 'May 2024',
    title: 'Cybersecurity Fundamentals',
    issuer: 'Palo Alto Networks',
    meta: 'Certificate of Completion',
    skills: ['Cyber Threats', 'Security Basics', 'Defense'],
    links: [
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1btGTR1bEyWiTdcwCUl0EhsSOP2DItR9K/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'pan-network-security',
    category: 'certification',
    badge: 'PA',
    color: '#c2410c',
    date: 'May 2024',
    title: 'Network Security Fundamentals',
    issuer: 'Palo Alto Networks',
    meta: 'Certificate of Completion',
    skills: ['Network Security', 'Perimeter Defense', 'Traffic Control'],
    links: [
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1VW-WalNdxYtUQN71zCGCm7iRasMP28Ze/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'pan-security-operations',
    category: 'certification',
    badge: 'PA',
    color: '#c2410c',
    date: 'Sep 2024',
    title: 'Security Operations Fundamentals',
    issuer: 'Palo Alto Networks',
    meta: 'Certificate of Completion',
    skills: ['SOC Operations', 'Threat Detection', 'Incident Response'],
    links: [
      { label: 'View certificate', href: 'https://drive.google.com/file/d/17vGlH-p7mvfO2lxIa89eFS3m682U274c/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'pan-cloud-security',
    category: 'certification',
    badge: 'PA',
    color: '#c2410c',
    date: 'May 2024',
    title: 'Cloud Security Fundamentals',
    issuer: 'Palo Alto Networks',
    meta: 'Certificate of Completion',
    skills: ['Cloud Security', 'Shared Responsibility', 'Workloads'],
    links: [
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1g_L7gFQ-U7R-deP4lUlcUnb2rPmFtcoI/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'aicte-rpa',
    category: 'virtual',
    badge: 'AI',
    color: '#1d4ed8',
    date: 'Jan – Mar 2025',
    title: 'RPA Developer Virtual Internship',
    issuer: 'AICTE · EduSkills · UiPath',
    meta: '10 weeks · ID 2fd1d9a2…',
    skills: ['RPA Development', 'UiPath', 'Process Automation'],
    links: [
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1i9UUs3LD6NeUj3bHFW-B6p1rxXJGLhpJ/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'accenture-forage',
    category: 'virtual',
    badge: 'Ac',
    color: '#a100ff',
    date: 'Jun 2025',
    title: 'Software Engineering Job Simulation',
    issuer: 'Accenture · Forage',
    meta: 'Completed Jun 30, 2025',
    skills: ['Architecture', 'Security', 'Testing'],
    links: [
      { label: 'View certificate', href: 'https://www.theforage.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_4L99bcxXoFEkt6LuL_1751276593989_completion_certificate.pdf', primary: true },
    ],
  },
  {
    id: 'jpmorgan-forage-sim',
    category: 'virtual',
    badge: 'JP',
    color: '#0a4a9c',
    date: 'Jun 2025',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorganChase · Forage',
    meta: 'Completed Jun 30, 2025',
    skills: ['Spring Boot', 'Kafka', 'REST API'],
    links: [
      { label: 'View certificate', href: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_4L99bcxXoFEkt6LuL_1751273962537_completion_certificate.pdf', primary: true },
    ],
  },
  {
    id: 'mastercard-forage-sim',
    category: 'virtual',
    badge: 'MC',
    color: '#d6001a',
    date: 'Jun 2025',
    title: 'Cybersecurity Job Simulation',
    issuer: 'Mastercard · Forage',
    meta: 'Completed Jun 30, 2025',
    skills: ['Security Awareness', 'Phishing', 'Security Training'],
    links: [
      { label: 'View certificate', href: 'https://www.theforage.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_4L99bcxXoFEkt6LuL_1751267544662_completion_certificate.pdf', primary: true },
    ],
  },
  {
    id: 'tcs-forage-sim',
    category: 'virtual',
    badge: 'TCS',
    color: '#1b4fa3',
    date: 'Jun 2025',
    title: 'Cybersecurity Analyst Job Simulation',
    issuer: 'Tata Consultancy Services · Forage',
    meta: 'Completed Jun 30, 2025',
    skills: ['IAM', 'Solution Architecture', 'Process Analysis'],
    links: [
      { label: 'View certificate', href: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_4L99bcxXoFEkt6LuL_1751266129251_completion_certificate.pdf', primary: true },
    ],
  },
  {
    id: 'ibm-cybersecurity',
    category: 'course',
    badge: 'IBM',
    color: '#0f62fe',
    date: 'Nov 2024',
    title: 'Beginners Guide to Cybersecurity (CS0221EN)',
    issuer: 'IBM · edX',
    meta: 'Verified Certificate',
    skills: ['Cybersecurity Basics', 'Threats & Risk', 'Security Concepts'],
    links: [
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1mBJIXCiPohIllTEVGfwswvILLAhIzLRn/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'java-fundamentals',
    category: 'course',
    badge: 'Cs',
    color: '#0056d2',
    date: 'Nov 2025',
    title: 'Fundamentals of Java Programming',
    issuer: 'Board Infinity · Coursera',
    meta: 'Course Certificate',
    skills: ['Java', 'Programming Fundamentals', 'Problem Solving'],
    links: [
      { label: 'Verify', href: 'https://coursera.org/verify/168ESQT0WJPV' },
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1RXlS_sZF2_RyiJKOxyAETRSDlFJz4VKa/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'java-oops',
    category: 'course',
    badge: 'Sl',
    color: '#b45309',
    date: 'Nov 2025',
    title: 'OOPs in Java',
    issuer: 'Simplilearn SkillUP',
    meta: 'Certificate code 9406894',
    skills: ['Java', 'OOP Concepts', 'Classes & Objects'],
    links: [
      { label: 'View certificate', href: 'https://drive.google.com/file/d/1w80uMsDqfsFlAa_VwfhbzY1m_e9riEy2/view?usp=drive_web', primary: true },
    ],
  },
  {
    id: 'java-cpp-udemy',
    category: 'course',
    badge: 'Ud',
    color: '#8a2be2',
    date: 'May 2025',
    title: 'Java And C++ Complete Course for Beginners',
    issuer: 'Udemy · Crunch Coding',
    meta: '5.5 hours',
    skills: ['Java', 'C++', 'Programming Basics'],
    links: [
      { label: 'View certificate', href: 'https://drive.google.com/file/d/19q92ZFec611yIvmqtoH7frA6fQy6JAv4/view?usp=drive_web', primary: true },
    ],
  },
]
