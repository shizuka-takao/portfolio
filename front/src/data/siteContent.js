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
    title: "Clothing Recommendation",
    subtitle: "TensorFlow, Flask, React",
    period: "Aug 2024",
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
    period: "Full Stack Systems Project",
    summary:
      "Built a movie platform with Java and MySQL, focused on database design, backend optimization, and production style deployment patterns.",
    tech: ["Java", "MySQL", "Tomcat", "AWS", "Docker"],
  },
  {
    title: "Recipe Maker",
    subtitle: "AI Web App",
    summary:
      "A recipe web app that combines ingredient input, image based detection, and generated cooking guidance in a single workflow.",
    tech: ["React", "Flask", "TensorFlow", "OpenAI API"],
    links: [
      { label: "GitHub", href: "https://github.com/khmorad/recipeMakerAI" },
      {
        label: "Live Site",
        href: "https://recepie-maker-ai.vercel.app/",
      },
    ],
  },
  {
    title: "Mood Stabilizer",
    subtitle: "Next.js, FastAPI, MySQL",
    summary:
      "A journaling app built to support emotional reflection with AI prompts, text to speech, secure authentication, and a full stack architecture.",
    tech: ["Next.js", "TypeScript", "FastAPI", "MySQL", "AWS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/khmorad/Mood-Tracker",
      },
      {
        label: "Demo",
        href: "https://mood-tracker-rosy.vercel.app/",
      },
    ],
  },
  {
    title: "Minimax and Alpha-Beta Visualization",
    subtitle: "Python, Streamlit",
    summary:
      "An interactive learning tool for visualizing Minimax and Alpha-Beta pruning and seeing how adversarial search decisions evolve step by step.",
    tech: ["Python", "Streamlit", "Algorithms"],
  },
  {
    title: "Diabetes Risk Prediction",
    subtitle: "Python, Scikit-learn",
    summary:
      "An ensemble classification project built with careful preprocessing, feature engineering, and clear analysis of health risk signals.",
    tech: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/tkpp26/Diabetes-Classification",
      },
      {
        label: "Colab",
        href: "https://colab.research.google.com/drive/1csXvpUAIGlWY8na0sDJoLn-MRuGZwIjY?usp=sharing",
      },
    ],
  },
  {
    title: "NewsWeb",
    subtitle: "JavaScript, HTML, CSS",
    summary:
      "A news reader that surfaces recent stories across categories using the NewsAPI and a lightweight frontend built for quick browsing.",
    tech: ["JavaScript", "HTML", "CSS", "NewsAPI"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/tkpp26/NewsWeb",
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
    name: "Curious about how things work. Careful about how they are built.",
    title:
      "Drawn to AI, perception, biomedical tools, and systems that turn vague problems into something concrete, tested, and genuinely useful.",
    panelLabel: "How I tend to work",
    summary:
      "I ask a lot of questions, notice small details, and stay with problems long enough to understand why they work, why they fail, and what would make them more useful.",
    detail:
      "The work that feels most natural to me sits between research and building: messy inputs, unclear constraints, and the slow process of shaping them into tools another person can trust.",
    notes: [
      "Reflective, detail-oriented, and quietly ambitious",
      "Interested in systems that connect technical ideas to real-world use",
      "Most at home when research and building inform each other",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/tkpp26" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shizukatakao" },
      { label: "Resume", href: "/Resume_2026_Summer.pdf" },
    ],
  },
  aboutPage: {
    eyebrow: "About Me",
    title: "Thoughtful work, built carefully",
    summary:
      "I am intellectually curious, detail-oriented, and usually more interested in understanding a problem well than rushing to the first answer.",
    details: [
      "What keeps me interested in technical work is the combination of curiosity and usefulness. I like asking why a system behaves the way it does, where it breaks down, and how it can become more dependable in practice.",
      "I am especially drawn to AI, perception, robotics-adjacent systems, biomedical tools, and interfaces between research ideas and real-world use. I like work that begins a little undefined and becomes clearer through observation, iteration, and testing.",
      "The way I build is usually quiet and persistent. I notice small details, care about whether something is actually usable, and try to make technical work feel more grounded, more thoughtful, and more human.",
    ],
    imageAlt: "Shizuka Takao portrait",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shizukatakao" },
      { label: "GitHub", href: "https://github.com/tkpp26" },
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
        "Research collaboration centered on applied machine learning, experimentation, and translating technical questions into clear implementation work.",
      tags: ["Machine Learning", "Experimentation", "Research"],
    },
    {
      title: "Levorato Lab",
      subtitle: "Undergraduate Research Assistant",
      period: "Jun 2026 - Present",
      institution: "UC Irvine",
      advisor: "Advisor: Marco Levorato",
      summary:
        "Systems oriented research work grounded in implementation, iteration, and careful communication of technical ideas.",
      tags: ["Systems", "Networking", "Research"],
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
      tags: ["Computer Vision", "Segmentation", "Tkinter", "GroundingDINO", "SAM"],
    },
  ],
  education: [
    {
      title: "University of California, Irvine",
      subtitle: "BS in Computer Science",
      period: "Sep 2024 - Present",
      contextLines: ["Intelligent Systems Specialization", "GPA: 3.98"],
      summary:
        "Studying computer science with a growing focus on AI, perception, systems, and building tools that connect research ideas to practical use.",
      highlights: [
        "Relevant coursework in data structures, algorithms, software engineering, machine learning, and database systems",
        "Coursework and project work shaped by curiosity about how technical systems behave in real settings",
      ],
      tags: ["Computer Science", "Machine Learning", "Systems"],
    },
    {
      title: "Diablo Valley College",
      subtitle: "AS in Computer Science and Mathematics",
      period: "Jan 2022 - May 2024",
      contextLines: ["GPA: 4.00"],
      summary:
        "Built a strong foundation in mathematics and programming through a transfer pathway grounded in careful problem solving and consistency.",
      highlights: [
        "Relevant coursework in object oriented programming, data structures, calculus, linear algebra, and statistics",
        "Developed the mathematical and technical base that continues to shape later research and engineering work",
      ],
      tags: ["Mathematics", "Programming", "Transfer Pathway"],
    },
  ],
  workExperience: [
    {
      title: "American Express",
      subtitle: "Data Science Fellow",
      period: "Aug 2025 - Dec 2025",
      summary:
        "Built an end to end credit risk classification workflow spanning data cleaning, feature engineering, imbalance handling, and model evaluation.",
      highlights: [
        "Trained and evaluated XGBoost models for imbalanced classification, reaching 0.83 validation accuracy",
        "Designed a pipeline for feature engineering, hyperparameter tuning, and repeatable validation",
        "Built a Streamlit interface for real time credit score probability inference",
      ],
      tags: ["XGBoost", "Streamlit", "Classification", "Feature Engineering"],
    },
    {
      title: "Kasanare",
      subtitle: "Software Engineer Intern",
      period: "Jun 2023 - Aug 2023",
      summary:
        "Developed LLM powered chatbot features in Tokyo using retrieval, memory, and prompt design to improve response quality and grounding.",
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
        "Supported students in learning lower level systems concepts through approachable explanations, steady guidance, and hands on problem solving.",
    },
    {
      title: "Diablo Valley College",
      subtitle: "Mathematics Tutor",
      period: "Mar 2023 - Sep 2023",
      summary:
        "Guided students through core math topics with a patient and structured teaching style that focused on understanding rather than memorization.",
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
      period: "May 2025 - Present",
      summary:
        "Selected for the Break Through Tech AI program and completed the Machine Learning Foundations course through Cornell.",
    },
    {
      title: "Women in Computer Science",
      subtitle: "Secretary",
      period: "Sep 2023 - May 2024",
      summary:
        "Supported communication, planning, and community building for members across events and organization work.",
    },
    {
      title: "Deep Learning Society",
      subtitle: "ICC Representative",
      period: "Jan 2023 - May 2023",
      summary:
        "Helped strengthen student involvement and connections across the broader campus community.",
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
  footer: {
    note: "Selected work across research, engineering, teaching, and product building",
    rightsOwner: "Shizuka Takao",
    links: [
      { label: "GitHub", href: "https://github.com/tkpp26" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shizukatakao" },
      { label: "Resume", href: "/Resume_2026_Summer.pdf" },
    ],
  },
};

/**
 * Stores the links used in the sticky navigation
 */
export const navigationItems = [
  { id: "top", label: "Home", href: "/#top" },
  { label: "About Me", href: "/about" },
  { id: "education", label: "Education", href: "/#education" },
  { id: "research", label: "Research", href: "/#research" },
  { id: "work", label: "Work", href: "/#work" },
  { id: "teaching", label: "Teaching", href: "/#teaching" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "activities", label: "Extracurricular", href: "/#activities" },
  { label: "All Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Arts", href: "/arts" },
];
