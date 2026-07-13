// Centralized Portfolio Data File
// This file stores all information displayed throughout the portfolio.
// Update fields here to change the content shown on the website.

export const personalInfo = {
  name: "Meet Sheth",
  education: "M.Sc.(IT) Student",
  title: "Full Stack Developer",
  heroTitle: "Full Stack Developer & M.Sc.(IT) Student",
  email: "mitsheth2@gmail.com",
  location: "Gujarat, India",
  description: "I build secure and scalable full-stack web applications with modern frontend experiences, robust backend architectures, and real-world integrations.",
  aboutDescription: "I am an M.Sc. Information Technology student at Dhirubhai Ambani University with a strong interest in full-stack development, backend development, and system design. I enjoy building complete web applications that combine responsive frontend interfaces with secure backend APIs, authentication systems, databases, payment integrations, and role-based architectures. Through my academic projects and internship experience, I have worked with MERN-stack technologies and modern web development tools to develop practical software applications.",
  highlights: [
    { title: "Full Stack Development", desc: "Building end-to-end client-server systems" },
    { title: "Backend Development", desc: "Creating secure APIs & relational/non-relational schemas" },
    { title: "System Design", desc: "Designing robust, modular, and scalable platforms" },
    { title: "Web Applications", desc: "Constructing responsive and intuitive client interfaces" }
  ]
};

export const socialLinks = {
  // TODO: Add actual GitHub profile URL
  github: "https://github.com/Meetsheth25",
  // TODO: Add actual LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/meet-sheth25",
  email: "https://mail.google.com/mail/?view=cm&fs=1&to=mitsheth2@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Meet,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
  resume: "https://drive.google.com/file/d/13pPDvI1DK93LZO9cxGp2GbS9Ux2py7XQ/view?usp=sharing"
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "C++" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "Python" }
    ]
  },
  {
    category: "Frameworks & Technologies",
    items: [
      { name: "React.js" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "React Router" },
      { name: "Context API" },
      { name: "Socket.IO" }
    ]
  },
  {
    category: "Cloud, Databases & Integrations",
    items: [
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "Cloudinary" },
      { name: "Razorpay API" },
      { name: "Google OAuth 2.0" }
    ]
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Linux Shell" },
      { name: "Figma" }
    ]
  }
];

export const experience = [
  {
    company: "VNH Infotech",
    role: "Project Intern",
    duration: "October 2024 – March 2025",
    location: "Ahmedabad, Gujarat",
    responsibilities: [
      "Spearheaded the development of Dynamic-Ticks, a responsive full-stack web application built with React and Vite and integrated with a Node.js and Express.js backend.",
      "Engineered secure RESTful APIs for Dynamic-Ticks to handle application business logic, including user authentication, dynamic shopping carts, and payment gateway integration."
    ]
  }
];

export const projects = [
  {
    id: "dynamic-ticks",
    name: "Dynamic-Ticks",
    type: "Luxury Watch E-Commerce Platform",
    tech: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Razorpay", "Google OAuth 2.0"],
    description: "A premium MERN-stack e-commerce platform for luxury horology with secure authentication, role-based access control, product management, inventory workflows, payment integration, and end-to-end purchasing functionality.",
    features: [
      "5-tier Role-Based Access Control system",
      "OTP verification & JWT authentication",
      "Bcrypt credential security",
      "Razorpay payment integration",
      "Google OAuth 2.0",
      "Inventory management & fulfillment workflows",
      "Modular MVC backend architecture & responsive luxury marketplace"
    ],
    // TODO: Add actual project repository URL
    github: "https://github.com/Meetsheth25/Dynamic-Ticks",
    // Live demo URL
    demo: "https://dynamic-ticks.vercel.app"
  },
  {
    id: "arenasync",
    name: "ArenaSync",
    type: "Tournament Management Platform",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Razorpay API", "Cloudinary API", "JWT", "Bcrypt"],
    description: "A MERN-stack tournament management platform with secure role-based access control, automated knockout tournament workflows, payment verification, and real-time match synchronization.",
    features: [
      "Role-based access control & JWT-secured endpoints",
      "Bcrypt credential salting & 6-digit OTP email verification",
      "Automated knockout tournament bracket rendering",
      "Razorpay payment integration & HMAC-SHA256 signature checks",
      "Real-time match updates using Socket.IO",
      "REST API synchronization fallback & management workflows"
    ],
    // TODO: Add actual project repository URL
    github: "https://github.com/Meetsheth25/Arenasync",
    // Live demo URL
    demo: "https://arenasync-tau.vercel.app"
  },
  {
    id: "book-e-pedia",
    name: "Book-E-Pedia",
    type: "Digital Library & E-Commerce Platform",
    tech: ["React 19", "React Router v7", "Context API", "CSS3", "Python", "Django", "Django REST Framework", "PostgreSQL", "SQLite"],
    description: "A college group project focused on creating a unified digital library and e-commerce ecosystem for physical books, e-books, audiobooks, and video courses.",
    features: [
      "Collaborated on building a unified physical and digital media catalog (books, e-books, audiobooks, video courses)",
      "Role-based architecture with customer storefront and employee inventory/fulfillment tools",
      "Business analytics dashboard, dynamic filters, and persistent smart carts",
      "In-browser media players, automated invoicing, and admin workforce tools"
    ],
    isGroupProject: true,
    // TODO: Add actual project repository URL
    github: "https://github.com/dev-barot/Book-E-Pedia",
    demo: "https://book-e-pedia.vercel.app/" // TODO: Add actual demo URL
  }
];

export const education = [
  {
    institution: "Dhirubhai Ambani University",
    duration: "2025 – Present",
    program: "M.Sc. Information Technology",
    score: "CPI: 6.44",
    location: "Gandhinagar, Gujarat"
  },
  {
    institution: "GLS University",
    duration: "2022 – 2025",
    program: "B.Sc. (IT)",
    score: "CGPA: 7.87",
    location: "Ahmedabad, Gujarat"
  },
  {
    institution: "A-One School",
    duration: "2021 – 2022",
    program: "12th Standard (GHSEB)",
    score: "Percentage: 63.33%",
    location: "Ahmedabad, Gujarat"
  },
  {
    institution: "A-One School",
    duration: "2019 – 2020",
    program: "10th Standard (GSEB)",
    score: "Percentage: 50.83%",
    location: "Ahmedabad, Gujarat"
  }
];

export const coursework = [
  "Data Structures and Algorithms",
  "Database Management Systems (DBMS)",
  "Object-Oriented Programming"
];

export const interests = [
  "Full Stack Development",
  "Backend Development",
  "System Design",
  "Web Application Development"
];
