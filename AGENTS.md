# Portfolio Site Guidelines

## Project

This repository contains Dhruv N Patel's public personal portfolio. It introduces Dhruv, a Mechanical Engineering Technology student at the New Jersey Institute of Technology (NJIT), and presents his background, work, skills, and contact information to visitors.

Keep personal and project details accurate. Do not invent education history, interests, skills, project descriptions, results, or links; use information provided by the site owner.

## Pages and Structure

Build and maintain these pages as the site grows:

- `index.html` — Home: a brief introduction to Dhruv and clear navigation to the other pages.
- `about.html` — About Me: personal background, education, and interests.
- `projects.html` — Projects: at least three projects, each with a meaningful description, an image or screenshot, and relevant links when available.
- `skills.html` — Skills: technical skills and honest proficiency descriptions.
- `contact.html` — Contact: contact information and optionally a client-side-validated contact form.

Use consistent navigation and a shared footer across pages. Each page must have one clear `<h1>` and a logical heading hierarchy. Use semantic HTML5 elements such as `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`; associate form labels with their controls and provide useful alternative text for meaningful images.

## Design

Use a consistent, professional visual identity inspired by the current homepage: a light background, white content surfaces, dark navy text, and blue accents. Keep typography legible and consistent, use spacing and restrained decoration to establish hierarchy, and maintain sufficient color contrast.

Design mobile-first and adapt layouts for phone and laptop widths with CSS media queries. Avoid horizontal overflow, preserve readable text and comfortable touch targets on small screens, and ensure navigation and content remain usable at every viewport size. Respect `prefers-reduced-motion` for nonessential animation.

## HTML, CSS, and JavaScript

- Keep page content in semantic HTML and styling in the shared external stylesheet `style.css`; do not add page-level `<style>` blocks or inline style attributes.
- Load shared CSS from each page using a relative `<link rel="stylesheet">`. Reuse shared class names and design tokens rather than introducing inconsistent per-page colors or typography.
- Keep JavaScript in an external `script.js` when interaction requires it. Prefer native HTML behavior and progressive enhancement; do not use JavaScript for static content or styling that belongs in CSS.
- Make interactive controls keyboard accessible, use descriptive link text, and provide visible focus styles.
- There is no backend. A contact form must not claim to send or store messages. If included, validate required fields and email input in JavaScript, explain that submission is not automatic, and direct visitors to `dnp67@njit.edu` with a clearly available `mailto:` link. Do not collect or transmit form data to an unconfigured service.
- Use relative links for pages and local assets so the static site works when hosted from the repository.

## Assets and Content

Keep project images and other local media in a clearly named assets directory, use optimized formats and descriptive filenames, and include useful `alt` text. Do not use placeholder project claims or present unavailable links as working links.

## Validation

This is a static site with no build or test tooling configured. When changing site pages, check that local links and asset paths resolve, HTML is well-formed, every page has its own `<h1>`, and layouts work at both phone and laptop widths. Do not introduce a build system or dependencies unless the site owner requests them.
