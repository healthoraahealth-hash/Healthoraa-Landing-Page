
# Healthora – Full Project Documentation

## 1. Project Overview

Healthora is a full-stack web application consisting of:

- A **Vite + React frontend** (landing page–driven UI)
- A **Node.js + Express backend** (form handling & API logic)

The project is structured to ensure:

- Clear separation of frontend and backend  
- Easy onboarding for future developers  
- Clean, modular, and scalable code  

---

## 2. Root Directory Structure

```txt
Healthora/
├── frontend/     # Client-side (React + Vite)
└── backend/      # Server-side (Node + Express)


---

🖥️ Frontend Documentation

3. Frontend Tech Stack

Framework: React
Bundler: Vite
Language: JavaScript (JSX)
Styling: Tailwind CSS
Linting: ESLint
Package Manager: npm

---

4. Frontend Folder Structure


frontend/
├── .vite/                 # Vite internal cache
├── dist/                  # Production build output
├── node_modules/          # Installed dependencies
├── public/                # Public static files
│
├── src/                   # Application source code
│
├── .env                   # Frontend environment variables
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint rules
├── package.json
└── README.md
```

---

## 5. Frontend `src/` Structure

```txt
src/
├── assets/                # Images & static assets
├── components/            # Reusable UI components
├── pages/                 # Page-level components
├── sections/              # Landing page sections
│
├── api.js                 # API request handler
├── App.jsx                # Root React component
├── App.css                # App-level styles
├── index.css              # Global styles
└── main.jsx               # React entry point
```

---

## 6. Frontend Folder Explanation

### `assets/`

Stores images, icons, and other static files used across the UI.

---

### `components/`

Reusable UI components used in multiple places.

**Examples:**

* Buttons
* Input fields
* Cards
* Layout helpers

Components should be **generic and reusable**.

---

### `pages/`

Represents full pages of the application.

```txt
pages/
└── Home.jsx   # Main landing page
```

Pages typically:

* Assemble multiple sections
* Handle page-level logic

---

### `sections/`

Contains individual landing page sections for modular design.

```txt
sections/
├── About.jsx
├── ContactForm.jsx
├── CoursesSection.jsx
├── Footer.jsx
├── HeroSection.jsx
├── Navbar.jsx
├── Results.jsx
└── TestimonialSection.jsx
```

Each section:

* Represents one visual block of the landing page
* Is imported into `Home.jsx`

This structure allows easy layout changes without touching logic.

---

## 7. Core Frontend Files

### `api.js`

Centralized API communication layer.

**Responsibilities:**

* Handles all HTTP requests to backend APIs
* Keeps components clean
* Makes backend URL changes easy

---

### `App.jsx`

Root React component:

* Wraps the entire application
* Manages global layout and routing (if added later)

---

### `main.jsx`

Application entry point:

* Mounts React to the DOM
* Loads global styles

---

## 8. Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

**Production build:**

```bash
npm run build
```

---

# 🛠️ Backend Documentation

## 9. Backend Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Environment Variables:** dotenv
* **API Type:** REST

---

## 10. Backend Folder Structure

```txt
backend/
├── node_modules/          # Dependencies
├── routes/                # API routes
│
├── .env                   # Backend environment variables
├── index.js               # Server entry point
├── package.json
└── package-lock.json
```

---

## 11. Backend Routes Structure

```txt
routes/
├── routeContact.js        # Contact form API
└── routeForm.js           # Form submission API
```

Each route file:

* Uses Express Router
* Handles one logical responsibility
* Exports routes to `index.js`

---

## 12. Backend Core Files

### `index.js`

Main backend entry file.

**Responsibilities:**

* Initializes Express app
* Loads middleware
* Registers API routes
* Starts server

---

### `.env`

Stores sensitive values such as:

* `PORT`
* API keys
* Database URLs (if added later)

⚠️ **Never commit sensitive credentials.**

---

## 13. Running the Backend

```bash
cd backend
npm install
node index.js
```

---

# 🔗 Frontend ↔ Backend Communication

* Frontend sends HTTP requests using `api.js`
* Backend processes requests via Express routes
* Responses are returned in **JSON format**

---

# 🤝 Contribution Guidelines

1. Create a new branch from `main`
2. Keep commits small and meaningful
3. Do not mix frontend and backend logic
4. Test before pushing code

---

# 📏 Coding Conventions

## Frontend

* Functional components only
* PascalCase for components
* camelCase for variables
* One section/component per file

## Backend

* Route-based separation
* Clear API naming
* Avoid large monolithic files

---

# 📝 Notes for Future Developers

* Landing page sections live in `src/sections`
* API logic must stay in `api.js`
* Avoid hardcoding URLs
* Keep UI and logic separated

