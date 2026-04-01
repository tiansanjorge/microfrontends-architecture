# 🚀 Microfrontend Architecture – React + Module Federation + Shared UI

This project demonstrates a minimal microfrontend architecture using Webpack Module Federation, combined with a simple shared UI component.

It prioritizes architectural structure and system composition over UI complexity.

---

## ❗ Problem Statement

This project explores how to structure a frontend using microfrontends in a simple, controlled setup.

Instead of focusing on complex UI or business logic, the goal is to understand:

- How microfrontends are composed at runtime
- How to structure independent frontend applications
- How to share UI components across application boundaries

---

## ⚡ Quick Start

Run the entire architecture locally:

    npm install
    npm run dev:all

Then open the host application at:

👉 http://localhost:5173

---

## 🧠 Overview

This is a minimal microfrontend architecture built to demonstrate how independent frontend applications can be composed into a single system.

The focus is on:

- Runtime integration using Module Federation
- Clear separation between host and remotes
- Basic shared UI through a reusable component

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

## 🗂️ Repository Structure

This project is organized as a monorepo using workspaces:

- `main-app` → Host application
- `mfe-character-list` → Microfrontend
- `mfe-character-detail` → Microfrontend
- `tarjeta-lib` → Shared UI component

These modules were originally developed as independent repositories and later consolidated into a monorepo to simplify local development.

### Original standalone repositories:

- Character List: https://github.com/tiansanjorge/squadmakers-challenge-mfe-character-list
- Character Detail: https://github.com/tiansanjorge/squadmakers-challenge-mfe-character-detail
- Shared Library: https://github.com/tiansanjorge/squadmakers-challenge-card-component
- Host App: https://github.com/tiansanjorge/squadmakers-challenge-main-app

---

## 📦 Shared UI Component

A simple reusable UI component (`tarjeta-lib`) is used across microfrontends.

It demonstrates how UI can be shared between independently developed applications while keeping business logic isolated.

---

## ⚙️ Key Technical Decisions

### Module Federation

Used to dynamically load remote modules at runtime and simulate independent applications.

### Microfrontend Separation

Each feature is isolated into its own application to reflect real-world architectural boundaries.

### Shared UI Component

A shared component ensures UI reuse across microfrontends without duplication.

---

## 🧩 Why This Project Is Intentionally Simple

The UI and business logic in this project are intentionally minimal.

The goal is not to build a feature-rich application, but to:

- Isolate architectural concerns
- Make microfrontend behavior easier to understand
- Provide a clear and focused example of Module Federation

---

## 🌐 Local Environment

- Host: http://localhost:5173
- MFE List: http://localhost:3001
- MFE Detail: http://localhost:3000

---

## 🎯 Purpose

This project is designed as a learning and demonstration environment for microfrontend architecture.

It focuses on understanding system composition rather than building a production-ready application.

---

## 🧩 Why Microfrontends?

This architecture enables:

- Independent development
- Clear separation of responsibilities
- Modular system design

---

## ⚠️ Trade-offs

Microfrontends introduce complexity:

- More setup and configuration
- Coordination between applications
- Runtime integration challenges

---

## 🔗 Related Project

If you're interested in UI/UX and visual polish, check out this related project:

👉 https://rickandmortyexp.netlify.app/

This project focuses instead on frontend architecture and system design.

---

## 📌 Notes

- Built with React + Webpack 5
- Uses Module Federation for runtime integration
- Shared dependencies managed as singletons
