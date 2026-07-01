/**
 * Returns true when a project belongs in the homepage set
 */
function isSelectedProject(project) {
  const selectedTitles = [
    "Minecraft World Models",
    "ContextReply",
    "Sokoban",
    "Clothing Recommendation",
    "Search Engine",
    "Fabflix",
  ];
  return selectedTitles.includes(project.title);
}

/**
 * Returns the smaller set of projects shown on the homepage
 */
function getSelectedProjects(projects) {
  return projects.filter(isSelectedProject);
}

/**
 * Stores every project shown across the site
 */
const allProjects = [
  {
    title: "Minecraft World Models",
    subtitle: "World Models, MCP, Embodied AI",
    period: "Jun 2026 - Present",
    summary:
      "A research driven project exploring world models in Minecraft with MCP style tool use, environment interaction, and grounded decision making for open ended tasks.",
    tech: ["Python", "World Models", "Minecraft", "MCP", "Embodied AI"],
  },
  {
    title: "ContextReply",
    subtitle: "AI Product",
    period: "Jun 2026",
    summary:
      "A context aware assistant concept centered on making generated replies more relevant, useful, and grounded in conversation history.",
    tech: ["React", "JavaScript", "AI"],
  },
  {
    title: "Sokoban",
    subtitle: "Python, PyTorch, Gymnasium",
    period: "Apr 2026 - Jun 2026",
    summary:
      "Built a Sokoban solving framework comparing BFS, Greedy Best First Search, A*, and a Double DQN approach, with masked macro actions and imitation learning support.",
    tech: ["Python", "PyTorch", "Gymnasium", "A*", "Double DQN"],
  },
  {
    title: "Search Engine",
    subtitle: "Python, React",
    period: "Jan 2026 - Mar 2026",
    summary:
      "Built a search engine with a custom crawler, SPIMI based inverted index, polite crawling, and ranking with TF-IDF, cosine similarity, PageRank, and soft conjunction retrieval.",
    tech: ["Python", "React", "SPIMI", "TF-IDF", "PageRank"],
  },
  {
    title: "Fabflix",
    subtitle: "Java, MySQL, Tomcat",
    period: "Apr 2025 - Jun 2025",
    summary:
      "Built a movie platform with Java and MySQL, focused on database design, backend optimization, and production style deployment patterns.",
    tech: ["Java", "MySQL", "Tomcat", "AWS", "Docker"],
  },
  {
    title: "Clothing Recommendation",
    subtitle: "TensorFlow, Flask, React",
    period: "Aug 2024 - Sep 2024",
    summary:
      "Built an image retrieval system using ResNet 50 embeddings and cosine similarity to return top matches across more than 10,000 fashion items.",
    tech: ["TensorFlow", "Flask", "React", "ResNet50", "Computer Vision"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/khmorad/clothingRecommendationApp/tree/main",
      },
      {
        label: "Demo",
        href: "https://www.youtube.com/watch?v=P2Y8-JbCPIk",
      },
    ],
  },
  {
    title: "Recipe Maker",
    subtitle: "React, Flask",
    period: "Jun 2024 - Aug 2024",
    summary:
      "A recipe web app that combines ingredient input, image based detection, and generated cooking guidance in a single workflow.",
    tech: ["React", "Flask", "TensorFlow", "OpenAI API"],
    links: [
      { label: "GitHub", href: "https://github.com/khmorad/recipeMakerAI" },
      {
        label: "Demo",
        href: "https://www.youtube.com/watch?v=erw31rS5tag",
      },
      {
        label: "Live Site",
        href: "https://recepie-maker-ai.vercel.app/",
      },
    ],
  },
];

/**
 * Stores the main portfolio content in one place
 */
export const siteContent = {
  hero: {
    eyebrow: "Shizuka Takao",
    name: "Curious about perception, robotics, and applied AI",
    panelLabel: "Research Interests",
    summary:
      "My research interests center on AI systems that perceive real-world environments, reason from visual information, and support reliable decision-making.",
    detail:
      "I am especially interested in projects that combine computer vision, representation learning, and simulation, particularly in robotics, autonomous navigation, and AI-powered tools.",
    links: [
      { label: "GitHub", href: "https://github.com/shizuka-takao" },
      { label: "Resume", href: "/Resume_2026_Summer.pdf" },
    ],
  },
  aboutPage: {
    eyebrow: "About Me",
    summary:
      "I am an undergraduate student majoring in Computer Science at the University of California, Irvine. My interests center on computer vision, embodied AI, and efficient AI systems for real-world perception and decision-making.",

    details: [
      "At UC Irvine, I conduct research in the Ding Lab under the guidance of Professor Fangyuan Ding, where I work on integrating deep learning models with GUI-based tools to support cell image segmentation and biomedical image analysis.",
      "My broader research interests are in perception-driven AI systems: systems that can understand visual environments, reason from sensory information, and support reliable decisions in real-world settings. I am especially interested in computer vision, representation learning, simulation, embodied AI, and world models.",
      "More recently, I have been exploring research directions related to Professor Mengyu Wang’s AI and robotics projects, especially world models and embodied AI, as well as Professor Marco Levorato’s work on efficient, deployable AI systems, including vision-language models and edge-cloud deployment. These directions connect closely with my interest in building AI systems that bridge perception, decision-making, and practical deployment.",
    ],

    imageAlt: "Shizuka Takao portrait",
    links: [
      { label: "GitHub", href: "https://github.com/shizuka-takao" },
      { label: "Resume", href: "/Resume_2026_Summer.pdf" },
    ],
  },
  research: [
    {
      title: "Harvard AI and Robotics Lab",
      subtitle: "Undergraduate Research Assistant",
      period: "Jun 2026 - Present",
      institution: "Harvard University",
      advisor: "Advisor: Mengyu Wang",
      summary:
        "Early-stage research work exploring project directions in AI, robotics, embodied AI, and world models. Details will be updated as the project scope develops.",
      tags: ["Embodied AI", "World Models", "Research"],
    },
    {
      title: "Intelligent and Autonomous Systems Lab",
      subtitle: "Undergraduate Research Assistant",
      period: "Jun 2026 - Present",
      institution: "UC Irvine",
      advisor: "Advisor: Marco Levorato",
      summary:
        "Early-stage research work exploring efficient, deployable AI systems, including vision-language models, edge-cloud deployment, and system-level implementation. Details will be updated as the project scope develops.",
      tags: ["Efficient AI", "Vision-Language Models", "Systems"],
    },
    {
      title: "Ding Lab",
      subtitle: "Undergraduate Research Assistant",
      period: "Jun 2025 - Present",
      institution: "UC Irvine",
      advisor: "Advisor: Fangyuan Ding",
      summary:
        "Developing computer vision pipelines for biological microscopy image analysis, with a focus on segmentation quality, annotation workflows, and evaluation on limited labeled data.",
      highlights: [
        "Combined GroundingDINO, watershed, and SAM box prompting to generate single cell masks from multi channel images",
        "Prepared Cellpose-SAM training data and benchmarked segmentation quality with IoU, Dice, and frame level metrics",
        "Built a Tkinter annotation tool with multithreaded segmentation and export workflows that cut manual segmentation time by 90%",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/UCI-Ding-Lab/FISH-ML2" },
      ],
      tags: [
        "Computer Vision",
        "Segmentation",
        "Tkinter",
        "GroundingDINO",
        "SAM",
      ],
    },
  ],
  education: [
    {
      title: "University of California, Irvine",
      subtitle: "BS in Computer Science",
      period: "Sep 2024 - Present",
      contextLines: [
        "Intelligent Systems Specialization",
        "GPA: 3.98/4.00",
        "Magna Cum Laude, top 2-6% of cohort",
      ],
      highlightStyle: "labeled",
      highlights: [
        "AI and machine learning: Machine Learning and Data Mining, Introduction to Artificial Intelligence, Deep Generative Models, Applications of Probability in CS, Algorithms for Graph Models, Project in AI, Project in Computer Vision",
        "Other electives: Information Retrieval, Introduction to Data Management, Project in Data and Web Apps, Programming in Java",
        "Core: Data Structures Implementation and Analysis, Principles in System Design, Introduction to Software Engineering, Boolean Logic and Discrete Structures, Probability and Statistics for CS",
      ],
    },
    {
      title: "Diablo Valley College",
      subtitle: "AS in Computer Science and Mathematics",
      period: "Jan 2022 - May 2024",
      contextLines: ["GPA: 4.00/4.00"],
      highlightStyle: "labeled",
      highlights: [
        "Computer science: Program Design and Data Structures, Assembly Language Programming and Computer Organization, Object Oriented Programming in C++, Advanced Programming with C and C++, Introduction to Programming, Computer Programming Using MATLAB",
        "Mathematics: Discrete Mathematics, Linear Algebra, Statistics and Probability, Differential Equations, Calculus III, Calculus II, Calculus I",
        "Physics: Mechanics and Wave Motion, Heat and Electromagnetism",
      ],
    },
  ],
  workExperience: [
    {
      title: "American Express",
      subtitle: "Data Science Fellow",
      period: "Aug 2025 - Dec 2025",
      summary: "Built an end to end credit risk classification workflow.",
      highlights: [
        "Trained and evaluated XGBoost models for imbalanced classification, reaching 0.83 validation accuracy",
        "Designed a pipeline for feature engineering, hyperparameter tuning, and repeatable validation",
        "Built a Streamlit interface for real time credit score probability inference",
      ],
      tags: ["Data Preprocessing", "Supervised Learning"],
    },
    {
      title: "Kasanare",
      subtitle: "Software Engineer Intern",
      period: "Jun 2023 - Aug 2023",
      summary:
        "Developed LLM powered chatbot features using retrievaland prompt design to improve response quality.",
      highlights: [
        "Built retrieval augmented generation flows with LangChain and Pinecone",
        "Applied zero shot and chain of thought prompting strategies to improve relevance and grounding",
      ],
      tags: ["RAG", "LangChain", "Pinecone", "Prompt Engineering"],
    },
  ],
  teachingExperience: [
    {
      title: "UC Irvine",
      subtitle: "ICS 53 Learning Assistant",
      period: "Sep 2026 - Present",
      summary:
        "Supported students with ICS 53 systems programming topics, including process and memory management, shell behavior, concurrency, synchronization, and operating systems concepts.",
    },
    {
      title: "Diablo Valley College",
      subtitle: "Mathematics Tutor",
      period: "Mar 2023 - Sep 2023",
      summary:
        "Facilitated tutoring sessions, guiding students through math concepts up to multivariable calculus.",
    },
  ],
  selectedProjects: getSelectedProjects(allProjects),
  allProjects,
  allProjectsLink: {
    label: "View All Projects",
    href: "/projects",
    isExternal: false,
  },
  extracurricular: [
    {
      title: "Break Through Tech AI at Cornell",
      subtitle: "AI Fellow",
      period: "May 2025 - Mar 2026",
      summary:
        "Selected for the Break Through Tech AI program and completed the Machine Learning Foundations course through Cornell.",
    },
    {
      title: "Women in Computer Science",
      subtitle: "Secretary",
      period: "Sep 2023 - May 2024",
      summary:
        "Maintained records for general, executive, and collaboration meetings while helping coordinate speaker events for a supportive community of women in computing.",
    },
    {
      title: "Deep Learning Society",
      subtitle: "ICC Representative",
      period: "Jan 2023 - May 2023",
      summary:
        "Represented the club in funding meetings to support resource allocation.",
    },
  ],
  blogPage: {
    eyebrow: "Writing",
    title: "Blog",
    summary:
      "A place for research notes, reflections, experiments, and longer thoughts that are still taking shape.",
    publicPosts: [
      {
        title: "Public Post Placeholder",
        summary:
          "Add finished posts here when you want them visible on the site.",
      },
    ],
    privatePosts: [
      {
        title: "Private Post Placeholder",
        summary:
          "Keep draft ideas, personal notes, or writing you may publish later in this section.",
      },
    ],
  },
  artsPage: {
    eyebrow: "Visual Work",
    title: "Arts",
    summary:
      "A small archive for visual pieces, sketches, design studies, or quieter side projects outside formal technical work.",
    publicPosts: [
      {
        title: "Public Work Placeholder",
        summary:
          "Add work here when you want it publicly visible in the portfolio.",
      },
    ],
    privatePosts: [
      {
        title: "Private Work Placeholder",
        summary:
          "Use this section for pieces you want to organize now and decide on later.",
      },
    ],
  },
  personalPage: {
    eyebrow: "Personal",
    title: "Personal",
    summary:
      "A quieter part of the site for writing and visual work, with separate spaces for posts that are public and posts that stay private for now.",
    sections: [
      {
        title: "Blog",
        summary:
          "Research notes, reflections, experiments, and longer writing that can stay split between public and private posts.",
        href: "/blog",
      },
      {
        title: "Arts",
        summary:
          "Visual pieces, sketches, and smaller creative work, also organized into public and private sections.",
        href: "/arts",
      },
    ],
  },
  footer: {
    note: "Selected work across research, engineering, teaching, and product building",
    rightsOwner: "Shizuka Takao",
    links: [
      { label: "GitHub", href: "https://github.com/tkpp26" },
      { label: "Resume", href: "/Resume_2026_Summer.pdf" },
    ],
  },
};

/**
 * Stores the links used in the sticky navigation
 */
export const navigationItems = [
  { id: "top", label: "Home", href: "/#top" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "research", label: "Research", href: "/#research" },
  { id: "work", label: "Work", href: "/#work" },
  { id: "teaching", label: "Teaching", href: "/#teaching" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "activities", label: "Extracurricular", href: "/#activities" },
  { label: "All Projects", href: "/projects" },
  { label: "Personal", href: "/personal" },
  { label: "About Me", href: "/about" },
];
