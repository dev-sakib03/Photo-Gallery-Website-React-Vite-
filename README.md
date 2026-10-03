# 📸 LuminaGallery — Professional React Photo Gallery

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**LuminaGallery** is a modern, responsive, and production-grade photo gallery web application built with React, Vite, and Tailwind CSS. Designed with a custom **Glassmorphism UI System**, real-time filtering capabilities, dynamic album sorting, seamless light/dark theme switching, and optimized native data fetching.

---

## ✨ Key Features

- **⚡ Fast Native API Fetching:** Fetches photo data from the JSONPlaceholder REST API using native `fetch()` without unnecessary third-party dependencies.
- **🎯 Real-Time Search:** Instant client-side title search functionality with zero input latency.
- **🏷️ Dynamic Album Filter:** Dropdown filtering allowing users to segregate photos by specific Album IDs.
- **🌙 Glassmorphism Theme Switcher:** Fully integrated Light and Dark mode using Tailwind CSS dark utilities and React state.
- **🪟 Interactive Modal Preview:** Clickable photo cards opening dynamic, high-resolution modal dialogs with full metadata display.
- **📱 Fully Responsive Grid:** Adaptive multi-column grid architecture built for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack & Ecosystem

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Library** | React 18 | Declarative UI components & state hooks (`useState`, `useEffect`) |
| **Build Tool** | Vite | Ultra-fast local development server & HMR bundler |
| **Styling** | Tailwind CSS v3 | Utility-first styling with custom glassmorphic styling utilities |
| **Data Provider** | JSONPlaceholder API | RESTful backend endpoint for dynamic photo metadata |
| **Version Control** | Git & GitHub | Modular commit management and automated build deployment |

---

## 📂 Project Architecture

```text
photo-gallery-pro/
├── public/                 # Static public assets & icons
├── src/
│   ├── components/         # Modular React UI components
│   │   ├── Header.jsx      # Navigation, global search bar, & theme toggle
│   │   ├── PhotoGallery.jsx# Core logic container & grid manager
│   │   ├── PhotoCard.jsx   # Individual photo item component with hover effects
│   │   ├── Modal.jsx       # Lightbox view for full photo preview
│   │   └── Footer.jsx      # Responsive footer component
│   ├── App.jsx             # Main application layout root
│   ├── main.jsx            # React DOM mounting point
│   └── index.css           # Tailwind CSS imports & custom layer rules
├── .gitignore              # Production ignore patterns (e.g., node_modules)
├── index.html              # HTML5 entry template
├── package.json            # NPM scripts & project metadata
├── tailwind.config.js      # Custom theme & font extension configs
└── vite.config.js          # Vite configuration settings