# 🛒 Amazon Clone (Frontend)

## 📝 Project Overview
This project is a Functional **Amazon Clone** built using **React.js**. It features a full e-commerce shopping experience including a product home page, shopping cart, and mock checkout process. It integrates **Firebase** for backend services (Auth, Database, Hosting).

## ✨ Key Features
*   **User Authentication**: Sign in/up functionality powered by **Firebase Auth**.
*   **React Context API**: Used for state management (Basket/Cart tracking).
*   **Responsive Design**: Mimics the Amazon desktop and mobile layout.
*   **Checkout**: Stripe integration setup (frontend structure).



## 📂 Folder Structure
```text
.
├── 📂 public/          # Static assets
├── 📂 src/             # React Source code
│   ├── 📂 components/  # Header, Product, Checkout components
│   ├── 📂 reducer/     # Context API reducers
│   └── 📄 App.js       # Main App component
├── 📄 firebase.json    # Firebase deployment config
├── 📄 package.json     # Dependencies
└── 📄 README.md        # Project documentation
```

## 🛠️ Prerequisites & Setup
1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Firebase Setup**
    *   Create a project at [firebase.google.com](https://firebase.google.com).
    *   Copy your config object into `src/firebase.js` (if present) or `App.js`.

3.  **Run Locally**
    ```bash
    npm start
    ```

## 💻 Tech Stack
*   **Frontend**: React.js
*   **State Management**: React Context API
*   **Backend/Hosting**: Firebase
*   **UI Library**: Material UI
