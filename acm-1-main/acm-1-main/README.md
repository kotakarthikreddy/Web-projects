# ⚛️ ACM Student Chapter Website (Frontend)

## 📝 Project Overview
This project is the frontend client for a University **ACM Student Chapter** website. It is a Single Page Application (SPA) built using **React.js**. It serves as the portal for students to learn about events, team members, and chapter activities.

## ✨ Key Features
*   **Modern UI**: Designed with **Material UI** and **Styled Components** for a polished look.
*   **Routing**: Client-side routing using `react-router-dom`.
*   **Animation**: Smooth transitions and animations powered by `aos` (Animate On Scroll).
*   **Components**: Modular architecture with reusable components.

## 📂 Folder Structure
```text
.
├── 📂 public/          # Static assets (index.html, icons)
├── 📂 src/             # Source code
│   ├── 📂 components/  # Reusable React components
│   ├── 📂 pages/       # Page components (Home, Events, Team, etc.)
│   └── 📄 App.js       # Main application component
├── 📄 package.json     # Project dependencies and scripts
└── 📄 README.md        # Project documentation
```

## 🛠️ Prerequisites & Setup
Ensure you have **Node.js** and **npm** installed.

1.  **Install Dependencies**
    Navigate to the project directory and run:
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm start
    ```
    This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 💻 Tech Stack
*   **Framework**: React.js
*   **UI Library**: Material UI (@mui/material)
*   **Styling**: Styled Components, CSS Modules
*   **Routing**: React Router
