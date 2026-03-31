# 🚀 Microfrontend Architecture – React + Module Federation + Shared UI Library

This project demonstrates a **scalable frontend architecture** based on microfrontends using Webpack Module Federation, combined with a **custom-built shared component library designed to decouple UI from application logic**.

It focuses on **architecture, modularity, and maintainability** over visual complexity.

---

## 🧠 Overview

The application is composed of:

- **Host application** (main-app)
- **2 independent microfrontends**
- **Shared component library**

Each part is developed and executed independently, enabling separation of concerns and team scalability.

---

## 🏗️ Architecture

### Host (Main App)

- Acts as the container and orchestrator
- Handles routing and layout composition
- Dynamically consumes remote modules

### Microfrontends

#### Character List (mfe-character-list)

- Fetches and displays character data
- Integrates shared UI components
- Exposes modules via Module Federation

#### Character Detail (mfe-character-detail)

- Displays detailed character information
- Loaded dynamically from the host

---

## 📦 Shared Component Library

A custom reusable UI library (`tarjeta-lib`) was designed and built as part of this architecture.

It abstracts UI concerns into a shared layer, allowing microfrontends to remain focused on business logic while ensuring consistency and reusability across the system.

Key aspects:

- Packaged as an independent module
- Shared via workspace dependency
- Ensures UI consistency across MFEs

---

## ⚙️ Key Technical Decisions

- **Module Federation** for runtime composition
- **Microfrontend separation** for scalability
- **Shared library** to avoid duplication
- **Workspaces (monorepo)** for developer experience
- **Single command execution** for simplicity

---

## ⚡ Quick Start

Run the entire architecture locally:

```bash
npm install
npm run dev:all
```

Then open the host application at:

👉 http://localhost:5173

---

## 🌐 Local Environment

- Host: http://localhost:5173
- MFE List: http://localhost:3001
- MFE Detail: http://localhost:3000

---

## 🧩 Why Microfrontends?

This architecture enables:

- Independent development and deployment
- Better scalability across teams
- Clear separation of responsibilities
- Reduced coupling between features

---

## ⚠️ Trade-offs

Microfrontends introduce complexity:

- Increased setup overhead
- Coordination between applications
- Runtime integration challenges

This project explores those trade-offs in a controlled environment.

---

## 🎯 Purpose

This project is not intended to showcase UI/UX.

It is designed to demonstrate:

- Frontend architecture decisions
- Modular system design
- Real-world scalability patterns

---

## 📌 Notes

- Built with React + Webpack 5
- Uses Module Federation for runtime integration
- Shared dependencies managed as singletons
