export type Lang = "en" | "fr";

export const translations = {
  en: {
    // Navbar
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact",
      openToWork: "Open to Opportunities",
      getInTouch: "Get in Touch",
      subtitle: "ENGINEERING STUDENT",
    },

    // Hero
    hero: {
      greeting: "Hi, I'm",
      welcome: "Welcome to my official portfolio",
      location: "Ariana / Bizerte, Tunisia",
      scrollDown: "Scroll Down",
      exploreExperience: "Explore Experience",
      getInTouch: "Get in Touch",
      certifications: "Certifications",
      espritLabel: "Final-Year Computer Engineering",
      internshipsLabel: "Bionic Soul, Tunisair, STIR",
      certsLabel: "NVIDIA, AWS Academy, Hashgraph",
      projectLabel: "Bal des Projets ESPRIT 2025",
      internships: "3 Internships",
      certs: "5+ Certifications",
      bestProject: "Best Project",
      typingPhrases: [
        "Computer Science Engineering Student",
        "Full-Stack & Systems Developer",
        "AI & Automation Enthusiast",
        "Client-Focused Solutions Specialist",
      ],
      bio: "Engineering student in Computer Science at ESPRIT with a background in Electronics and Automation. Combines rigorous technical problem-solving with exceptional relational and active listening skills, dedicated to crafting reliable solutions and driving client satisfaction.",
    },

    // About
    about: {
      sectionLabel: "About Ahmed",
      headline: "Engineering Mindset.",
      headlineAccent: "Client-First Heart.",
      subtitle:
        "Bridging technical precision in computer engineering with strong interpersonal and listening skills to deliver world-class client satisfaction.",
      professionalSummaryTitle: "Professional Summary",
      bio1: "Engineering student in computer science, equipped with excellent communication skills and a deep ability to actively listen and understand client requirements. Motivated, dynamic, and naturally comfortable in interpersonal and client-facing interactions.",
      bio2: "Serious and organized, with a clear aspiration to put strong relational capabilities at the service of a customer call center or tech support environment, continually striving to elevate client satisfaction in a structured and professional atmosphere.",
      competencies: [
        "Active listening & empathy",
        "Fast & precise data entry",
        "Rapid problem deconstruction",
        "Professional email communication",
        "Calm under operational pressure",
        "Client-satisfaction dedication",
      ],
      personalInfo: "Personal Information",
      fullName: "Full Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      currentBase: "Current Base",
      languages: "Languages",
      langData: [
        { name: "Arabic", level: "Native / Mother Tongue", percent: 100 },
        { name: "French", level: "Fluent (Courant)", percent: 95 },
        { name: "English", level: "Fluent (Courant)", percent: 90 },
      ],
      highlights: [
        {
          title: "Client Relations & Active Listening",
          description:
            "Comfortable in client interactions, attentive to customer needs, and committed to delivering high-satisfaction outcomes.",
        },
        {
          title: "Rapid Problem Analysis",
          description:
            "Quickly grasps complex challenges and formulates tailored, efficient solutions in fast-paced environments.",
        },
        {
          title: "Rigorous & Organized",
          description:
            "Demonstrated discipline in structured enterprise settings, combining technical autonomy with methodical execution.",
        },
      ],
      engagementsTitle: "Social & Club Engagements",
      engagements: [
        {
          role: "Active Member",
          organization: "Club Smartech – FSB Bizerte",
          details:
            "Engaged in robotics development, team competitions, and tech workshops.",
        },
        {
          role: "Member & Participant",
          organization: "IEEE FSB Bizerte Student Branch",
          details:
            "Involved in technical hackathons, professional networking, and engineering initiatives.",
        },
      ],
      sportsTitle: "Sports & Tactical Passions",
      sports: [
        { name: "Chess", label: "Strategic thinking & foresight", icon: "♟️" },
        { name: "Football", label: "Team cohesion & agility", icon: "⚽" },
        {
          name: "Table Tennis",
          label: "Focus & quick reflexes",
          icon: "🏓",
        },
      ],
    },

    // Experience
    experience: {
      sectionLabel: "Practical Experience",
      headline: "Work &",
      headlineAccent: "Internship History",
      subtitle:
        "Proven track record of autonomy, rapid assimilation, and valuable contributions across innovative tech, airline operations, and heavy industrial automation.",
      items: [
        {
          role: "Engineering Intern – Intelligent Technologies",
          company: "Bionic Soul",
          location: "Technopole El Ghazela, Ariana",
          period: "15 June 2025 – 30 August 2025",
          duration: "2.5 Months",
          type: "Technology Internship",
          summary:
            "Contributed to an innovative project in the intelligent technologies domain, developing sharp analysis capabilities and exacting attention to detail.",
          responsibilities: [
            "Conducted extensive data collection and systematic processing to engineer a dependable, highly-adapted system.",
            "Identified and mitigated technical anomalies, strengthening overall system accuracy.",
            "Reinforced analytical rigor, proactive problem-solving, and cross-functional technical adaptability.",
          ],
          skills: [
            "Intelligent Technologies",
            "Data Collection & Processing",
            "Analytical Rigor",
            "System Reliability",
            "Problem Solving",
          ],
          badgeColor: "from-sky-500 to-blue-600",
        },
        {
          role: "IT & Workflow Digitization Intern",
          company: "Tunisair",
          location: "Charguia 2, Tunis",
          period: "15 July 2024 – 30 August 2024",
          duration: "6 Weeks",
          type: "Process Digitization",
          summary:
            "Focused on enhancing internal working conditions and operational productivity by digitizing employee request management.",
          responsibilities: [
            "Engineered and deployed an intuitive online form system that superseded manual paper-based processes.",
            "Facilitated smoother request handling, accelerating response times and improving employee experience.",
            "Strengthened personal autonomy, organizational rigor, and adherence to enterprise compliance standards.",
          ],
          skills: [
            "Online Form Systems",
            "Workflow Digitization",
            "Employee Support",
            "Process Optimization",
            "Autonomous Management",
          ],
          badgeColor: "from-blue-600 to-indigo-600",
        },
        {
          role: "End-of-Studies Automation Intern",
          company: "STIR (Société Tunisienne des Industries de Raffinage)",
          location: "Bizerte, Tunisia",
          period: "January 2023 – May 2023",
          duration: "6 Months",
          type: "Industrial Engineering",
          summary:
            "Completed a comprehensive 6-month end-of-studies internship in a rigorous industrial environment, operating with high responsibility.",
          responsibilities: [
            "Actively contributed to program development and parameter configuration for a Siemens API / industrial controller.",
            "Adapted to strict safety, industrial quality protocols, and mission-critical operating environments.",
            "Solidified fundamental engineering practices, methodical troubleshooting, and industrial teamwork.",
          ],
          skills: [
            "Siemens API",
            "Industrial Automation",
            "Controller Programming",
            "Structured Enterprise",
            "Industrial Protocols",
          ],
          badgeColor: "from-slate-700 to-slate-800 border border-slate-600",
        },
      ],
    },

    // Education
    education: {
      sectionLabel: "Academic Background",
      headline: "Education &",
      headlineAccent: "Qualifications",
      subtitle:
        "A progressive path from technical sciences to automation engineering and final-year computer science at Tunisia's premier engineering institution.",
      currentlyEnrolled: "Currently Enrolled",
      keyFocusAreas: "Key Focus Areas & Highlights:",
      items: [
        {
          institution:
            "ESPRIT – École Supérieure Privée d'Ingénieurs et de Technologies",
          degree: "Diplôme d'Ingénieur en Informatique",
          specialty: "Computer Science & Engineering",
          period: "2023 – Present",
          status: "Currently in Final Year (Dernière Année)",
          location: "Ariana, Tunisia",
          current: true,
          description:
            "Comprehensive engineering curriculum covering advanced software engineering, system architecture, database design, cloud paradigms, and intelligent computing solutions.",
          keyLearnings: [
            "Software architecture, object-oriented design & modern web ecosystems",
            "Applied Artificial Intelligence & Generative AI workflows",
            "Agile methodologies, team project management & high-standard client delivery",
            "Honored at Bal des Projets ESPRIT 2025 for top-tier project excellence",
          ],
          tag: "Master of Engineering Level",
        },
        {
          institution: "Faculté des Sciences de Bizerte (FSB)",
          degree:
            "Licence en Électronique, Électrotechnique et Automatique (EEA)",
          specialty: "Electronics, Electrical Engineering & Automation",
          period: "2020 – May 2023",
          status: "Degree Obtained (Obtenu en Mai 2023)",
          location: "Bizerte, Tunisia",
          current: false,
          description:
            "Three-year rigorous scientific and applied degree bridging hardware electronics, automated control systems, microcontrollers, and industrial sensors.",
          keyLearnings: [
            "Industrial automation, PLC/Siemens controller programming & process logic",
            "Electronic circuit design, signal processing & microcontrollers",
            "System modeling, automated feedback loops & sensor diagnostics",
            "Completed 6-month end-of-studies internship at STIR Bizerte",
          ],
          tag: "Bachelor of Science Level",
        },
        {
          institution: "Lycée Med Ali Ennabi",
          degree: "Baccalauréat en Sciences Techniques",
          specialty: "Technical Sciences & Applied Engineering",
          period: "Obtained 2020",
          status: "National Diploma Obtained",
          location: "Ras Jebel, Tunisia",
          current: false,
          description:
            "Solid mathematical, physical, and technical foundation specializing in electrical and mechanical systems.",
          keyLearnings: [
            "Applied mathematics, physics, and mechanical principles",
            "Fundamentals of electrical engineering and logic circuits",
            "Technical blueprint analysis and analytical rigor",
          ],
          tag: "High School Scientific Baccalaureate",
        },
      ],
    },

    // Skills
    skills: {
      sectionLabel: "Core Competencies",
      headline: "Skills &",
      headlineAccent: "Proficiencies",
      subtitle:
        "A versatile combination of technical development, precision data handling, industrial systems, and standout interpersonal excellence.",
      allCompetencies: "All Competencies",
      clientSatisfaction: "Client-Satisfaction Orientation",
      highPrecision: "High Precision",
      dataEntry: "Data Entry & Quality Verification",
      tripleCert: "Triple Cert",
      nvidiaCert: "NVIDIA Applied AI Programs",
      cloudReady: "Cloud Ready",
      awsGraduate: "AWS Academy Graduate",
      categories: [
        {
          id: "web-dev",
          title: "Software & Web Development",
          skills: [
            {
              name: "HTML5 & CSS3",
              level: "Proficient",
              percent: 88,
              description:
                "Semantic layouts, responsive styles, modern web standards",
            },
            {
              name: "PHP Basics",
              level: "Intermediate",
              percent: 75,
              description:
                "Server-side scripting, form handling, dynamic pages",
            },
            {
              name: "SQL & Relational Databases",
              level: "Advanced",
              percent: 85,
              description:
                "Query design, schema modeling, data consistency & indexing",
            },
            {
              name: "Linux Operating Systems",
              level: "Advanced",
              percent: 85,
              description:
                "CLI navigation, bash scripts, process & permission management",
            },
            {
              name: "Web Platforms & Navigation",
              level: "Expert",
              percent: 95,
              description:
                "High-speed research, platform management, digital tooling",
            },
          ],
        },
        {
          id: "productivity",
          title: "Office & Professional Productivity",
          skills: [
            {
              name: "Fast & Precise Data Entry",
              level: "Expert",
              percent: 96,
              description:
                "High WPM typing, meticulous accuracy, rigorous verification",
            },
            {
              name: "Microsoft Excel",
              level: "Advanced",
              percent: 90,
              description:
                "Formulas, data tables, pivot analysis, reporting dashboards",
            },
            {
              name: "Microsoft Word & Documentation",
              level: "Expert",
              percent: 94,
              description:
                "Executive reports, formatted proposals, professional layout",
            },
            {
              name: "Microsoft PowerPoint",
              level: "Advanced",
              percent: 90,
              description:
                "Persuasive presentations, structured visuals, animations",
            },
            {
              name: "Professional Email Management",
              level: "Expert",
              percent: 95,
              description:
                "Structured communication, client etiquette, inbox triage",
            },
            {
              name: "IT & Management Software",
              level: "Advanced",
              percent: 88,
              description:
                "Enterprise software adoption, internal portal workflows",
            },
          ],
        },
        {
          id: "systems-ai",
          title: "Systems, AI & Cloud",
          skills: [
            {
              name: "Siemens API & PLC Automation",
              level: "Advanced",
              percent: 82,
              description:
                "Industrial API programming, controller workflows (STIR)",
            },
            {
              name: "AI & Anomaly Detection",
              level: "Certified (NVIDIA)",
              percent: 86,
              description: "Anomaly identification algorithms, data monitoring",
            },
            {
              name: "Generative AI & Diffusion Models",
              level: "Certified (NVIDIA)",
              percent: 84,
              description:
                "Diffusion architectures, prompt paradigms, synthetic data",
            },
            {
              name: "AI for Predictive Maintenance",
              level: "Certified (NVIDIA)",
              percent: 85,
              description:
                "Failure prediction, sensor data analysis, industrial AI",
            },
            {
              name: "AWS Cloud Foundations",
              level: "Certified (AWS)",
              percent: 82,
              description:
                "Cloud infrastructure, storage, computing services, security",
            },
          ],
        },
        {
          id: "interpersonal",
          title: "Relational & Client Success",
          skills: [
            {
              name: "Active Listening & Empathy",
              level: "Expert",
              percent: 98,
              description:
                "Understanding core customer concerns without prejudice",
            },
            {
              name: "Client Needs Analysis & Solutions",
              level: "Expert",
              percent: 94,
              description:
                "Translating ambiguous issues into practical, rapid answers",
            },
            {
              name: "Dynamic Interpersonal Relations",
              level: "Expert",
              percent: 95,
              description:
                "Comfortable in verbal interactions, call centers, client desk",
            },
            {
              name: "Stress Resistance & Composure",
              level: "Advanced",
              percent: 90,
              description:
                "Poised handling of difficult inquiries and high workloads",
            },
            {
              name: "Organizational Autonomy",
              level: "Advanced",
              percent: 92,
              description:
                "Independent execution with rigorous accountability",
            },
          ],
        },
      ],
    },

    // Certifications
    certifications: {
      sectionLabel: "Verified Credentials",
      headline: "Certifications &",
      headlineAccent: "Achievements",
      subtitle:
        "Industry credentials from NVIDIA & AWS, along with academic honors, hackathons, and national robotics challenges.",
      allCredentials: "All Credentials & Honors",
      certifications: "Certifications",
      awards: "Awards",
      hackathons: "Hackathons",
      competitions: "Competitions",
      items: [
        {
          id: "bal-esprit",
          title: "Best Project of the Year Recognition",
          organization: "Bal des Projets ESPRIT 2025",
          type: "Award",
          badge: "Official Honors",
          description:
            "Honored as one of the standout, highest-caliber engineering projects of the entire academic year at ESPRIT.",
          topics: ["Project Excellence", "Software Engineering", "Innovation", "System Integration"],
        },
        {
          id: "nvidia-anomaly",
          title: "AI Applications & Anomaly Detection",
          organization: "NVIDIA Deep Learning Institute",
          type: "Certification",
          badge: "NVIDIA Certified",
          description:
            "Advanced certification on applying deep neural networks for anomaly detection in real-world sensor and visual datasets.",
          topics: ["Deep Learning", "Anomaly Detection", "Computer Vision", "Model Evaluation"],
        },
        {
          id: "nvidia-genai",
          title: "Generative AI with Diffusion Models",
          organization: "NVIDIA Deep Learning Institute",
          type: "Certification",
          badge: "NVIDIA Certified",
          description:
            "Specialized training in generative artificial intelligence architectures, denoising diffusion probabilistic models, and prompting frameworks.",
          topics: ["Generative AI", "Diffusion Models", "Latent Space", "Prompt Engineering"],
        },
        {
          id: "nvidia-maintenance",
          title: "AI Applications for Predictive Maintenance",
          organization: "NVIDIA Deep Learning Institute",
          type: "Certification",
          badge: "NVIDIA Certified",
          description:
            "Industrial AI specialization on predictive maintenance, sensor stream processing, failure mode forecasting, and machine health telemetry.",
          topics: ["Predictive Maintenance", "Industrial AI", "Time-Series Telemetry", "Failure Prediction"],
        },
        {
          id: "aws-cloud",
          title: "AWS Academy Graduate – Cloud Foundations",
          organization: "Amazon Web Services (AWS Academy)",
          type: "Certification",
          badge: "AWS Training Badge",
          description:
            "Comprehensive certification on AWS cloud architecture, compute (EC2), storage (S3), IAM security, and reliable cloud design principles.",
          topics: ["Cloud Architecture", "AWS Cloud Foundations", "Cloud Security", "Infrastructure"],
        },
        {
          id: "hashgraph-dev",
          title: "Hashgraph Developer Course",
          organization: "The Hashgraph Association",
          type: "Certification",
          badge: "DLT Certified",
          description:
            "Developer certification in distributed ledger technology (DLT), Hedera Hashgraph consensus algorithms, and decentralized application fundamentals.",
          topics: ["Hashgraph Consensus", "DLT & Web3", "Smart Contracts", "Decentralized Systems"],
        },
        {
          id: "ieee-hackathon",
          title: "Hackathon Engineering Challenge",
          organization: "IEEE FSB Bizerte Student Branch",
          type: "Hackathon",
          badge: "IEEE Participant",
          description:
            "Intensive collaborative hackathon tackling algorithmic problems and rapid prototyping under high-pressure competitive conditions.",
          topics: ["Rapid Prototyping", "Team Hackathon", "Problem Solving", "IEEE Engineering"],
        },
        {
          id: "smartech-robotics",
          title: "National Robotics Event – Sousse",
          organization: "Club Smartech",
          type: "Competition",
          badge: "Robotics Contest",
          description:
            "Inter-collegiate robotics competition requiring autonomous navigation, microcontroller coding, and real-time sensor processing.",
          topics: ["Autonomous Robotics", "Embedded Systems", "Sensor Fusion", "Team Competition"],
        },
      ],
    },

    // Contact
    contact: {
      sectionLabel: "Connect & Collaborate",
      headline: "Let's Discuss",
      headlineAccent: "New Opportunities",
      subtitle:
        "Whether you have a role in customer relations, tech support, automation, or software engineering, I am ready to bring dedication, rigor, and great energy to your team.",
      directChannels: "Direct Contact Channels",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      geographicLocation: "Geographic Location",
      location: "Ariana & Bizerte, Tunisia",
      locationNote: "Available for local and remote opportunities",
      professionalNetworks: "Professional Networks",
      sendMessage: "Send a Message",
      sendMessageNote: "Fill out the form below and I will get back to you promptly.",
      fastReply: "Fast Reply",
      copy: "Copy",
      copied: "Copied!",
      yourName: "Your Name *",
      yourEmail: "Your Email *",
      subject: "Subject",
      message: "Message *",
      namePlaceholder: "John Doe",
      emailPlaceholder: "john@example.com",
      subjectPlaceholder: "Opportunity Inquiry / Project Discussion",
      messagePlaceholder:
        "Hello Ahmed, we would love to speak with you regarding...",
      transmit: "Transmit Message",
      sending: "Sending Message...",
      thankYou: "Thank You",
      thankYouMessage:
        "Your message has been sent directly to Ahmed Khalil. A response will be delivered to",
      thankYouSuffix: "as soon as possible.",
      sendAnother: "Send Another Note",
      errorTitle: "Failed to Send Message",
      errorMessageText:
        "An unexpected error occurred while sending your message. You can try again or open your email app directly.",
      openEmailApp: "Send via Email App",
      openGmail: "Open in Gmail (Web)",
      openOutlook: "Open in Outlook (Web)",
      openDefaultMail: "Open in Mail App",
      copiedToClipboard: "Copied to clipboard!",
      messagePrepared: "Message Ready for Ahmed Khalil!",
      messagePreparedSubtitle:
        "Your message has been formatted. Choose your preferred email client below to send it to khalil.ahmed22002@gmail.com:",
      copyFullMessage: "Copy Message Text",
    },

    // Footer
    footer: {
      tagline:
        "Computer Science Engineering Student • ESPRIT • Electronics & Automation • Client-Centric Problem Solver",
      backToTop: "Back to Top",
      rights: "All rights reserved.",
      builtWith: "Built with Next.js 16, Tailwind CSS v4 & Motion",
    },
  },

  fr: {
    // Navbar
    nav: {
      about: "À propos",
      experience: "Expérience",
      education: "Formation",
      skills: "Compétences",
      certifications: "Certifications",
      contact: "Contact",
      openToWork: "Ouvert aux Opportunités",
      getInTouch: "Me Contacter",
      subtitle: "ÉTUDIANT INGÉNIEUR",
    },

    // Hero
    hero: {
      greeting: "Bonjour, je suis",
      welcome: "Bienvenue sur mon portfolio officiel",
      location: "Ariana / Bizerte, Tunisie",
      scrollDown: "Défiler",
      exploreExperience: "Voir l'Expérience",
      getInTouch: "Me Contacter",
      certifications: "Certifications",
      espritLabel: "Ingénierie Informatique – Dernière Année",
      internshipsLabel: "Bionic Soul, Tunisair, STIR",
      certsLabel: "NVIDIA, AWS Academy, Hashgraph",
      projectLabel: "Bal des Projets ESPRIT 2025",
      internships: "3 Stages",
      certs: "5+ Certifications",
      bestProject: "Meilleur Projet",
      typingPhrases: [
        "Étudiant Ingénieur en Informatique",
        "Développeur Full-Stack & Systèmes",
        "Passionné d'IA & d'Automatisation",
        "Spécialiste des Solutions Orientées Client",
      ],
      bio: "Étudiant ingénieur en informatique à l'ESPRIT avec une formation en électronique et automatique. Alliant rigueur technique et excellentes aptitudes relationnelles, il est dédié à concevoir des solutions fiables et à garantir la satisfaction client.",
    },

    // About
    about: {
      sectionLabel: "À propos d'Ahmed",
      headline: "Esprit Ingénieur.",
      headlineAccent: "Priorité Client.",
      subtitle:
        "Allier la précision technique en génie informatique à de solides compétences interpersonnelles pour offrir une satisfaction client de premier ordre.",
      professionalSummaryTitle: "Résumé Professionnel",
      bio1: "Étudiant ingénieur en informatique, doté d'excellentes aptitudes à la communication et d'une capacité profonde à écouter activement et à comprendre les besoins des clients. Motivé, dynamique et naturellement à l'aise dans les interactions interpersonnelles et les contacts clients.",
      bio2: "Sérieux et organisé, avec une aspiration claire à mettre de solides aptitudes relationnelles au service d'un centre d'appels client ou d'un environnement de support technique, en s'efforçant continuellement d'améliorer la satisfaction client dans une atmosphère structurée et professionnelle.",
      competencies: [
        "Écoute active & empathie",
        "Saisie de données rapide & précise",
        "Déconstruction rapide des problèmes",
        "Communication e-mail professionnelle",
        "Calme sous pression opérationnelle",
        "Dévouement à la satisfaction client",
      ],
      personalInfo: "Informations Personnelles",
      fullName: "Nom Complet",
      emailAddress: "Adresse E-mail",
      phoneNumber: "Numéro de Téléphone",
      currentBase: "Localisation",
      languages: "Langues",
      langData: [
        { name: "Arabe", level: "Langue maternelle", percent: 100 },
        { name: "Français", level: "Courant", percent: 95 },
        { name: "Anglais", level: "Courant", percent: 90 },
      ],
      highlights: [
        {
          title: "Relations Clients & Écoute Active",
          description:
            "À l'aise dans les interactions clients, attentif aux besoins et engagé à offrir des résultats de haute satisfaction.",
        },
        {
          title: "Analyse Rapide des Problèmes",
          description:
            "Saisit rapidement les défis complexes et formule des solutions efficaces et adaptées dans des environnements dynamiques.",
        },
        {
          title: "Rigoureux & Organisé",
          description:
            "Discipline démontrée dans des environnements d'entreprise structurés, alliant autonomie technique et exécution méthodique.",
        },
      ],
      engagementsTitle: "Engagements Sociaux & Associatifs",
      engagements: [
        {
          role: "Membre Actif",
          organization: "Club Smartech – FSB Bizerte",
          details:
            "Impliqué dans le développement robotique, les compétitions d'équipe et les ateliers technologiques.",
        },
        {
          role: "Membre & Participant",
          organization: "IEEE FSB Bizerte Student Branch",
          details:
            "Participation à des hackathons techniques, du réseautage professionnel et des initiatives d'ingénierie.",
        },
      ],
      sportsTitle: "Sports & Passions Tactiques",
      sports: [
        { name: "Échecs", label: "Pensée stratégique & prévoyance", icon: "♟️" },
        { name: "Football", label: "Cohésion d'équipe & agilité", icon: "⚽" },
        { name: "Tennis de Table", label: "Concentration & réflexes rapides", icon: "🏓" },
      ],
    },

    // Experience
    experience: {
      sectionLabel: "Expérience Pratique",
      headline: "Travail &",
      headlineAccent: "Historique des Stages",
      subtitle:
        "Parcours prouvé d'autonomie, d'assimilation rapide et de contributions précieuses dans la tech innovante, les opérations aériennes et l'automatisation industrielle.",
      items: [
        {
          role: "Stagiaire Ingénieur – Technologies Intelligentes",
          company: "Bionic Soul",
          location: "Technopole El Ghazela, Ariana",
          period: "15 Juin 2025 – 30 Août 2025",
          duration: "2,5 Mois",
          type: "Stage Technologique",
          summary:
            "Contribution à un projet innovant dans le domaine des technologies intelligentes, développant des capacités d'analyse aiguisées et une attention méticuleuse aux détails.",
          responsibilities: [
            "Collecte et traitement systématique de données pour concevoir un système fiable et hautement adapté.",
            "Identification et atténuation d'anomalies techniques, renforçant la précision globale du système.",
            "Renforcement de la rigueur analytique, de la résolution proactive des problèmes et de l'adaptabilité technique transversale.",
          ],
          skills: [
            "Technologies Intelligentes",
            "Collecte & Traitement de Données",
            "Rigueur Analytique",
            "Fiabilité Système",
            "Résolution de Problèmes",
          ],
          badgeColor: "from-sky-500 to-blue-600",
        },
        {
          role: "Stagiaire IT & Digitalisation des Flux",
          company: "Tunisair",
          location: "Charguia 2, Tunis",
          period: "15 Juillet 2024 – 30 Août 2024",
          duration: "6 Semaines",
          type: "Digitalisation des Processus",
          summary:
            "Amélioration des conditions de travail internes et de la productivité opérationnelle en digitalisant la gestion des demandes des employés.",
          responsibilities: [
            "Conception et déploiement d'un système de formulaires en ligne remplaçant les processus manuels sur papier.",
            "Facilitation du traitement des demandes, accélérant les délais de réponse et améliorant l'expérience employé.",
            "Renforcement de l'autonomie personnelle, de la rigueur organisationnelle et du respect des normes de conformité.",
          ],
          skills: [
            "Systèmes de Formulaires",
            "Digitalisation des Flux",
            "Support Employés",
            "Optimisation des Processus",
            "Gestion Autonome",
          ],
          badgeColor: "from-blue-600 to-indigo-600",
        },
        {
          role: "Stagiaire PFE – Automatisation Industrielle",
          company: "STIR (Société Tunisienne des Industries de Raffinage)",
          location: "Bizerte, Tunisie",
          period: "Janvier 2023 – Mai 2023",
          duration: "6 Mois",
          type: "Ingénierie Industrielle",
          summary:
            "Stage de fin d'études de 6 mois complet dans un environnement industriel rigoureux, opérant avec une haute responsabilité.",
          responsibilities: [
            "Contribution active au développement de programme et à la configuration de paramètres pour un automate Siemens.",
            "Adaptation aux protocoles stricts de sécurité, de qualité industrielle et aux environnements à criticité élevée.",
            "Consolidation des pratiques d'ingénierie fondamentales, du dépannage méthodique et du travail d'équipe industriel.",
          ],
          skills: [
            "API Siemens",
            "Automatisation Industrielle",
            "Programmation API",
            "Entreprise Structurée",
            "Protocoles Industriels",
          ],
          badgeColor: "from-slate-700 to-slate-800 border border-slate-600",
        },
      ],
    },

    // Education
    education: {
      sectionLabel: "Parcours Académique",
      headline: "Formation &",
      headlineAccent: "Diplômes",
      subtitle:
        "Un parcours progressif des sciences techniques à l'ingénierie de l'automatique, jusqu'en dernière année d'informatique dans la première institution d'ingénierie de Tunisie.",
      currentlyEnrolled: "Actuellement Inscrit",
      keyFocusAreas: "Domaines Clés & Points Forts :",
      items: [
        {
          institution:
            "ESPRIT – École Supérieure Privée d'Ingénieurs et de Technologies",
          degree: "Diplôme d'Ingénieur en Informatique",
          specialty: "Génie Informatique",
          period: "2023 – Présent",
          status: "Actuellement en Dernière Année",
          location: "Ariana, Tunisie",
          current: true,
          description:
            "Cursus d'ingénierie complet couvrant le génie logiciel avancé, l'architecture des systèmes, la conception de bases de données, les paradigmes cloud et les solutions informatiques intelligentes.",
          keyLearnings: [
            "Architecture logicielle, conception orientée objet & écosystèmes web modernes",
            "Intelligence Artificielle appliquée & flux d'IA Générative",
            "Méthodologies Agile, gestion de projets d'équipe & livraison client haut de gamme",
            "Honoré au Bal des Projets ESPRIT 2025 pour l'excellence du projet",
          ],
          tag: "Niveau Master en Ingénierie",
        },
        {
          institution: "Faculté des Sciences de Bizerte (FSB)",
          degree:
            "Licence en Électronique, Électrotechnique et Automatique (EEA)",
          specialty: "Électronique, Génie Électrique & Automatique",
          period: "2020 – Mai 2023",
          status: "Diplôme Obtenu (Mai 2023)",
          location: "Bizerte, Tunisie",
          current: false,
          description:
            "Licence scientifique et appliquée rigoureuse sur 3 ans couvrant l'électronique matérielle, les systèmes de contrôle automatisés, les microcontrôleurs et les capteurs industriels.",
          keyLearnings: [
            "Automatisation industrielle, programmation d'automates Siemens & logique de processus",
            "Conception de circuits électroniques, traitement du signal & microcontrôleurs",
            "Modélisation de systèmes, boucles de rétroaction automatisées & diagnostics de capteurs",
            "Stage de fin d'études de 6 mois à STIR Bizerte",
          ],
          tag: "Niveau Licence en Sciences",
        },
        {
          institution: "Lycée Med Ali Ennabi",
          degree: "Baccalauréat en Sciences Techniques",
          specialty: "Sciences Techniques & Ingénierie Appliquée",
          period: "Obtenu en 2020",
          status: "Diplôme National Obtenu",
          location: "Ras Jebel, Tunisie",
          current: false,
          description:
            "Solides bases mathématiques, physiques et techniques spécialisées dans les systèmes électriques et mécaniques.",
          keyLearnings: [
            "Mathématiques appliquées, physique et principes mécaniques",
            "Fondamentaux du génie électrique et des circuits logiques",
            "Analyse de plans techniques et rigueur analytique",
          ],
          tag: "Baccalauréat Scientifique",
        },
      ],
    },

    // Skills
    skills: {
      sectionLabel: "Compétences Clés",
      headline: "Compétences &",
      headlineAccent: "Maîtrises",
      subtitle:
        "Une combinaison polyvalente de développement technique, de traitement précis des données, de systèmes industriels et d'excellence interpersonnelle.",
      allCompetencies: "Toutes les Compétences",
      clientSatisfaction: "Orientation Satisfaction Client",
      highPrecision: "Haute Précision",
      dataEntry: "Saisie & Vérification de Données",
      tripleCert: "Triple Cert",
      nvidiaCert: "Programmes IA Appliquée NVIDIA",
      cloudReady: "Prêt pour le Cloud",
      awsGraduate: "Diplômé AWS Academy",
      categories: [
        {
          id: "web-dev",
          title: "Développement Logiciel & Web",
          skills: [
            {
              name: "HTML5 & CSS3",
              level: "Compétent",
              percent: 88,
              description:
                "Mises en page sémantiques, styles responsifs, standards web modernes",
            },
            {
              name: "PHP Bases",
              level: "Intermédiaire",
              percent: 75,
              description:
                "Scripts côté serveur, gestion de formulaires, pages dynamiques",
            },
            {
              name: "SQL & Bases de Données Relationnelles",
              level: "Avancé",
              percent: 85,
              description:
                "Conception de requêtes, modélisation de schémas, cohérence des données & indexation",
            },
            {
              name: "Systèmes d'Exploitation Linux",
              level: "Avancé",
              percent: 85,
              description:
                "Navigation CLI, scripts bash, gestion des processus & des permissions",
            },
            {
              name: "Plateformes Web & Navigation",
              level: "Expert",
              percent: 95,
              description:
                "Recherche haute vitesse, gestion de plateformes, outils numériques",
            },
          ],
        },
        {
          id: "productivity",
          title: "Productivité Bureau & Professionnelle",
          skills: [
            {
              name: "Saisie de Données Rapide & Précise",
              level: "Expert",
              percent: 96,
              description:
                "Frappe haute WPM, précision méticuleuse, vérification rigoureuse",
            },
            {
              name: "Microsoft Excel",
              level: "Avancé",
              percent: 90,
              description:
                "Formules, tableaux de données, analyse pivot, tableaux de bord",
            },
            {
              name: "Microsoft Word & Documentation",
              level: "Expert",
              percent: 94,
              description:
                "Rapports de direction, propositions formatées, mise en page professionnelle",
            },
            {
              name: "Microsoft PowerPoint",
              level: "Avancé",
              percent: 90,
              description:
                "Présentations percutantes, visuels structurés, animations",
            },
            {
              name: "Gestion Professionnelle des E-mails",
              level: "Expert",
              percent: 95,
              description:
                "Communication structurée, étiquette client, gestion de la boîte de réception",
            },
            {
              name: "Logiciels IT & de Gestion",
              level: "Avancé",
              percent: 88,
              description:
                "Adoption de logiciels d'entreprise, flux de portail interne",
            },
          ],
        },
        {
          id: "systems-ai",
          title: "Systèmes, IA & Cloud",
          skills: [
            {
              name: "API Siemens & Automatisation PLC",
              level: "Avancé",
              percent: 82,
              description:
                "Programmation API industrielle, flux de contrôleurs (STIR)",
            },
            {
              name: "IA & Détection d'Anomalies",
              level: "Certifié (NVIDIA)",
              percent: 86,
              description:
                "Algorithmes d'identification d'anomalies, surveillance des données",
            },
            {
              name: "IA Générative & Modèles de Diffusion",
              level: "Certifié (NVIDIA)",
              percent: 84,
              description:
                "Architectures de diffusion, paradigmes de prompt, données synthétiques",
            },
            {
              name: "IA pour la Maintenance Prédictive",
              level: "Certifié (NVIDIA)",
              percent: 85,
              description:
                "Prédiction de pannes, analyse de données capteurs, IA industrielle",
            },
            {
              name: "Fondamentaux Cloud AWS",
              level: "Certifié (AWS)",
              percent: 82,
              description:
                "Infrastructure cloud, stockage, services de calcul, sécurité",
            },
          ],
        },
        {
          id: "interpersonal",
          title: "Relations & Succès Client",
          skills: [
            {
              name: "Écoute Active & Empathie",
              level: "Expert",
              percent: 98,
              description:
                "Compréhension des préoccupations clients sans préjugé",
            },
            {
              name: "Analyse des Besoins Clients & Solutions",
              level: "Expert",
              percent: 94,
              description:
                "Traduire les problèmes ambigus en réponses pratiques et rapides",
            },
            {
              name: "Relations Interpersonnelles Dynamiques",
              level: "Expert",
              percent: 95,
              description:
                "À l'aise dans les interactions verbales, centres d'appels, bureau client",
            },
            {
              name: "Résistance au Stress & Sang-Froid",
              level: "Avancé",
              percent: 90,
              description:
                "Gestion sereine des demandes difficiles et des charges de travail élevées",
            },
            {
              name: "Autonomie Organisationnelle",
              level: "Avancé",
              percent: 92,
              description:
                "Exécution indépendante avec responsabilisation rigoureuse",
            },
          ],
        },
      ],
    },

    // Certifications
    certifications: {
      sectionLabel: "Accréditations Vérifiées",
      headline: "Certifications &",
      headlineAccent: "Réalisations",
      subtitle:
        "Accréditations industrielles de NVIDIA & AWS, ainsi que distinctions académiques, hackathons et défis robotiques nationaux.",
      allCredentials: "Toutes les Accréditations & Distinctions",
      certifications: "Certifications",
      awards: "Distinctions",
      hackathons: "Hackathons",
      competitions: "Compétitions",
      items: [
        {
          id: "bal-esprit",
          title: "Prix de Reconnaissance du Meilleur Projet",
          organization: "Bal des Projets ESPRIT 2025",
          type: "Award",
          badge: "Honneurs Officiels",
          description:
            "Distingue l'un des projets d'ingénierie les plus remarquables et de plus haut calibre de toute l'année académique à l'ESPRIT.",
          topics: ["Excellence de Projet", "Génie Logiciel", "Innovation", "Intégration Systèmes"],
        },
        {
          id: "nvidia-anomaly",
          title: "Applications de l'IA et Détection d'Anomalies",
          organization: "NVIDIA Deep Learning Institute",
          type: "Certification",
          badge: "Certifié NVIDIA",
          description:
            "Certification avancée sur l'application des réseaux de neurones profonds pour la détection d'anomalies dans des jeux de données réels.",
          topics: ["Deep Learning", "Détection d'Anomalies", "Vision par Ordinateur", "Évaluation de Modèles"],
        },
        {
          id: "nvidia-genai",
          title: "IA Générative avec les Modèles de Diffusion",
          organization: "NVIDIA Deep Learning Institute",
          type: "Certification",
          badge: "Certifié NVIDIA",
          description:
            "Formation spécialisée dans les architectures d'intelligence artificielle générative, les modèles de diffusion et le prompt engineering.",
          topics: ["IA Générative", "Modèles de Diffusion", "Espace Latent", "Ingénierie de Prompts"],
        },
        {
          id: "nvidia-maintenance",
          title: "Applications de l'IA pour la Maintenance Prédictive",
          organization: "NVIDIA Deep Learning Institute",
          type: "Certification",
          badge: "Certifié NVIDIA",
          description:
            "Spécialisation IA industrielle sur la maintenance prédictive, l'analyse de télémétrie de capteurs et la prévision des pannes.",
          topics: ["Maintenance Prédictive", "IA Industrielle", "Télémétrie Séries Temporelles", "Prédiction de Pannes"],
        },
        {
          id: "aws-cloud",
          title: "Diplômé AWS Academy – Fondamentaux Cloud",
          organization: "Amazon Web Services (AWS Academy)",
          type: "Certification",
          badge: "Badge Formation AWS",
          description:
            "Certification complète sur l'architecture cloud AWS, les services EC2, le stockage S3, la sécurité IAM et la haute disponibilité.",
          topics: ["Architecture Cloud", "Fondamentaux AWS", "Sécurité Cloud", "Infrastructure"],
        },
        {
          id: "hashgraph-dev",
          title: "Cours Développeur Hashgraph",
          organization: "The Hashgraph Association",
          type: "Certification",
          badge: "Certifié DLT",
          description:
            "Certification développeur en technologies de registres distribués (DLT), algorithmes de consensus Hedera Hashgraph et dApps.",
          topics: ["Consensus Hashgraph", "DLT & Web3", "Smart Contracts", "Systèmes Décentralisés"],
        },
        {
          id: "ieee-hackathon",
          title: "Défi Hackathon Ingénierie",
          organization: "IEEE FSB Bizerte Student Branch",
          type: "Hackathon",
          badge: "Participant IEEE",
          description:
            "Hackathon d'ingénierie intensif résolvant des problématiques algorithmiques complexes et prototypage rapide sous haute pression.",
          topics: ["Prototypage Rapide", "Hackathon d'Équipe", "Résolution de Problèmes", "Ingénierie IEEE"],
        },
        {
          id: "smartech-robotics",
          title: "Événement National de Robotique – Sousse",
          organization: "Club Smartech",
          type: "Competition",
          badge: "Concours Robotique",
          description:
            "Compétition interuniversitaire de robotique nécessitant navigation autonome, programmation de microcontrôleurs et fusion de capteurs.",
          topics: ["Robotique Autonome", "Systèmes Embarqués", "Fusion de Capteurs", "Compétition d'Équipe"],
        },
      ],
    },

    // Contact
    contact: {
      sectionLabel: "Connecter & Collaborer",
      headline: "Discutons de",
      headlineAccent: "Nouvelles Opportunités",
      subtitle:
        "Que vous ayez un poste en relation client, support technique, automatisation ou ingénierie logicielle, je suis prêt à apporter dévouement, rigueur et grande énergie à votre équipe.",
      directChannels: "Canaux de Contact Directs",
      emailAddress: "Adresse E-mail",
      phoneNumber: "Numéro de Téléphone",
      geographicLocation: "Localisation Géographique",
      location: "Ariana & Bizerte, Tunisie",
      locationNote: "Disponible pour des opportunités locales et à distance",
      professionalNetworks: "Réseaux Professionnels",
      sendMessage: "Envoyer un Message",
      sendMessageNote:
        "Remplissez le formulaire ci-dessous et je vous répondrai rapidement.",
      fastReply: "Réponse Rapide",
      copy: "Copier",
      copied: "Copié !",
      yourName: "Votre Nom *",
      yourEmail: "Votre E-mail *",
      subject: "Sujet",
      message: "Message *",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean@exemple.com",
      subjectPlaceholder: "Demande d'Opportunité / Discussion de Projet",
      messagePlaceholder:
        "Bonjour Ahmed, nous aimerions vous parler concernant...",
      transmit: "Envoyer le Message",
      sending: "Envoi du message...",
      thankYou: "Merci",
      thankYouMessage:
        "Votre message a été envoyé directement à Ahmed Khalil. Une réponse vous parviendra à",
      thankYouSuffix: "dès que possible.",
      sendAnother: "Envoyer une Autre Note",
      errorTitle: "Échec de l'envoi du message",
      errorMessageText:
        "Une erreur inattendue est survenue lors de l'envoi. Vous pouvez réessayer ou ouvrir directement votre boîte mail.",
      openEmailApp: "Envoyer via Application E-mail",
      openGmail: "Ouvrir dans Gmail (Web)",
      openOutlook: "Ouvrir dans Outlook (Web)",
      openDefaultMail: "Ouvrir l'application e-mail",
      copiedToClipboard: "Copié dans le presse-papier !",
      messagePrepared: "Message prêt pour Ahmed Khalil !",
      messagePreparedSubtitle:
        "Votre message a été formaté. Choisissez votre client e-mail préféré ci-dessous pour l'envoyer à khalil.ahmed22002@gmail.com :",
      copyFullMessage: "Copier le texte du message",
    },

    // Footer
    footer: {
      tagline:
        "Étudiant Ingénieur en Informatique • ESPRIT • Électronique & Automatique • Solutionneur Orienté Client",
      backToTop: "Retour en Haut",
      rights: "Tous droits réservés.",
      builtWith: "Construit avec Next.js 16, Tailwind CSS v4 & Motion",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];
