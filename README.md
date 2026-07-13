# 🌟 Meet Sheth | Professional Portfolio

Welcome to the source code repository for my personal developer portfolio! This is a premium, modern, and highly responsive single-page portfolio website designed to showcase my experience, technical skills, academic background, and full-stack projects.

Built with **React**, **Vite**, **Framer Motion**, and **Custom Modular CSS**, the application implements high-end design principles including glassmorphism, fluid micro-interactions, custom scroll animations, and clean typography.

---

## 🚀 Live Demo
🔗 **Explore the live version:** [Meet Sheth Portfolio](https://google.com) *(Update with your actual portfolio deployment link if applicable)*

---

## 🎨 Design & Aesthetic Features

- **Premium Typography & Branding:** Styled using premium Google Fonts ([Outfit](https://fonts.google.com/specimen/Outfit) for headings, [Inter](https://fonts.google.com/specimen/Inter) for body text) creating a modern, editorial vibe.
- **Glassmorphism Design System:** Leveraging customized glassmorphic layers (`backdrop-filter: blur(16px)`), premium box shadows, and subtle grid overlays for a clean, futuristic glass aesthetic.
- **Snappy Micro-Animations:** Built with [Framer Motion](https://www.framer.com/motion/) for responsive page entry, hover states, scroll triggers, and active navigation indicators.
- **Pure CSS Layouts:** Crafted with CSS Flexbox and Grid using CSS custom properties (variables) for consistent sizing, colors, transitions, and elevations without external UI frameworks.

---

## 🛠️ Tech Stack & Tooling

| Category | Technologies |
|---|---|
| **Frontend Core** | React 19, Javascript (ES6+) |
| **Build & Tooling** | Vite, Oxlint (super-fast linter) |
| **Animations** | Framer Motion |
| **Icons** | React Icons |
| **Styling** | Vanilla CSS (Modular Stylesheets) |
| **Deployment** | Vercel / Netlify |

---

## 📂 Project Structure

The project follows a clean, modular structure where logic, data representation, and presentation layers are decoupled:

```text
portfolio/
├── public/              # Static assets (favicons, PDFs, resume)
├── src/
│   ├── assets/          # Project specific images & graphics
│   ├── components/      # Functional React Components
│   │   ├── About.jsx       # Biography & Highlights section
│   │   ├── Contact.jsx     # Interactive email contact card
│   │   ├── Education.jsx   # Timeline of academic qualifications
│   │   ├── Experience.jsx  # Professional internships & roles
│   │   ├── Footer.jsx      # Social profiles & copyright banner
│   │   ├── Hero.jsx        # Landing fold with dynamic call-to-actions
│   │   ├── Navbar.jsx      # Sticky navbar with responsive scrollspy navigation
│   │   ├── Projects.jsx    # Project grid with detailed description cards
│   │   └── Skills.jsx      # Categorized skill badges
│   ├── data/
│   │   └── portfolioData.js # Centralized content data file (edit here!)
│   ├── styles/          # Component-scoped Custom CSS Files
│   │   ├── about.css
│   │   ├── contact.css
│   │   ├── ...
│   │   └── global.css      # Core Design System, tokens, reset & variables
│   ├── App.jsx          # Main page assembler
│   └── main.jsx         # App entry point
├── package.json         # Project manifests and scripts
└── vite.config.js       # Vite development configuration
```

---

## 📦 Local Installation & Setup

To run this portfolio website locally on your machine, follow these steps:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/Meetsheth25/portfolio.git
cd portfolio
```

### 3. Install Dependencies
Install all the required npm packages specified in `package.json`:
```bash
npm install
```

### 4. Run Development Server
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
To build a highly optimized bundle for production deployment:
```bash
npm run build
```
This generates static assets in the `dist/` directory, ready to be hosted on Vercel, Netlify, or GitHub Pages.

---

## ✍️ How to Customize the Content

You don't need to dive into individual components to change the text or images. The entire portfolio is powered by a **centralized data architecture**.

To update the displayed info (e.g., your resume link, new projects, work experiences, or skills), simply modify the data file:

👉 [src/data/portfolioData.js](file:///c:/Users/mitsh/Desktop/project/Mit%20rasume/Portfolio/src/data/portfolioData.js)

### Modifying Key Blocks:
- **`personalInfo`**: Adjust your name, bio, email, highlights, and job titles.
- **`socialLinks`**: Swap out placeholders for your actual GitHub profile, LinkedIn, and CV download URLs.
- **`skills`**: Add, remove, or modify categories and technological tools.
- **`projects`**: Showcase new applications by appending to the array. Each project card supports features, badges, live demos, and repository links.
- **`education`**: Keep your academic timeline up to date.

---

## 👨‍💻 Author

**Meet Sheth**
- M.Sc. Information Technology Student
- Gujarat, India
- **Email:** [mitsheth2@gmail.com](mailto:mitsheth2@gmail.com)
- **LinkedIn:** [@meet-sheth25](https://www.linkedin.com/in/meet-sheth25)
- **GitHub:** [@Meetsheth25](https://github.com/Meetsheth25)
