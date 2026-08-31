# Pedro Américo — Portfolio

Personal portfolio for **Pedro Américo**, Full Stack Developer and DevOps
Engineer. It presents my engineering profile, services, selected work, and
contact channels.

**Live:** [pedroamerico.com](https://www.pedroamerico.com/)

## What it covers

- Full-stack software development
- DevOps, CI/CD, and infrastructure automation
- Internal tools and workflow automation
- Selected products and engineering projects
- Professional contact channels

## Stack

- React 19 + TypeScript
- Vite 7
- CSS
- Vercel Analytics
- Intersection Observer-based section reveals
- Typed.js and smooth navigation

## Run locally

Prerequisite: Node.js LTS.

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run preview
```

## Structure

```text
src/
├── components/       page sections and shared UI
├── App.tsx           page composition and analytics
└── main.tsx          application entry point
```

The interface is organized into hero, about, services, projects, and contact
sections, with light/dark theme support and responsive navigation.

## Deployment

The production site is deployed on Vercel. Pushes to the production branch
trigger a new deployment.
