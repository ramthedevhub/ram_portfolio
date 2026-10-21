# Portfolio — React + Vite

A responsive, fast, frontend-only portfolio converted from `portfolio-extended.html`.
No backend, database or paid services. All content lives in one file you can edit.

**Tech:** React 19 · Vite · plain CSS · inline SVG icons (no icon library). Two runtime dependencies: `react` and `react-dom`.

---

## 1. Run it on Windows

You need **Node.js 20 or newer** (download the LTS version from https://nodejs.org). Check with:

```powershell
node -v
npm -v
```

Unzip the project, then open **PowerShell** (or Command Prompt) in the folder:

```powershell
cd path\to\portfolio
npm install
npm run dev
```

Open the address it prints (normally http://localhost:5173). Changes you save appear instantly.

Starting from scratch instead of the zip? The same project can be created with:

```powershell
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
```

and then copying the `src`, `public`, `index.html` and `package.json` files from this project over it.

---

## 2. Where to edit things

| What you want to change | Where |
| --- | --- |
| Name, email, phone, GitHub, **LinkedIn**, location | `src/data/portfolioData.js` → `profile` |
| Intro text and hero skill chips | `portfolioData.js` → `hero` |
| About text, interests, "projects completed" number | `portfolioData.js` → `about` |
| Skills (grouped by category) | `portfolioData.js` → `skillCategories` |
| Projects (text, tags, GitHub link, live demo link) | `portfolioData.js` → `projects` |
| Experience | `portfolioData.js` → `experience` |
| Degree, institution, graduation year, grade | `portfolioData.js` → `education.summary` |
| Certifications and credential links | `portfolioData.js` → `certifications` |
| **Résumé** | Replace `public/resume.pdf` (keep the name, or change `profile.resume`) |
| Images | `public/images/` (reference them as `/images/your-file.webp`) |
| Page title, description, social tags | `index.html` |
| Favicon | `public/favicon.svg` |
| Colors, fonts, spacing | `src/index.css` (the `:root` variables at the top) |
| Section styling | the `.css` file next to each component in `src/components/` |

Rules of thumb:

- Leave a link as `''` (empty) to hide that button. Example: `live: ''` on a project hides "Live demo".
- To add a project, copy one object in `projects`, change the fields, and save. Experience, skills and certifications work the same way.
- The credential count in the About section is calculated from the certifications list.

### Things you still need to fill in

1. **LinkedIn** — `profile.linkedin` is empty, so the button is hidden. Add your real profile URL.
2. **Degree and institution** — `education.summary.degree` and `institution` are empty because they were not in the original portfolio. While you run `npm run dev` a dashed reminder box shows on the Education card; it never appears on the deployed site.
3. **Résumé** — `public/resume.pdf` is a starter file generated only from the facts in your portfolio. Replace it with your own résumé PDF before you share the site.
4. **"18+ projects completed"** — this number was copied from your original portfolio. Change `about.projectsCompleted` if it is out of date, or set it to `''` to hide it.

---

## 3. What was kept, changed and removed

- **Kept:** the orange visual identity, the hero illustration with its **pull-cord lamp** (click the lamp or press Tab to it and Enter for dark mode), the head that follows your mouse, the animated name entrance, the typing illustration in Experience, the certification filter and search.
- **Improved:** a real navbar with mobile menu, scroll progress and a visible dark-mode button; consistent spacing and type scale; accessible colors; skills grouped by category; one clean timeline for experience.
- **Simplified:** the About illustration is now a still image (the animated version needed ~760 KB of image frames). The "Process" section was left out because it was not in the list of sections you asked for.
- **Performance:** images went from about 7.8 MB (embedded in one HTML file) to about 1.3 MB of separate files. The lamp and head-tracking frames load only when the browser is idle, only with a mouse, and are skipped for visitors with reduced-motion or data-saver settings.

Dark mode follows the visitor's system setting on the first visit and remembers their choice afterwards.

### Contact form

The form is frontend-only and says so on the page. Pressing the button opens the visitor's email app with a pre-filled draft addressed to you (a `mailto:` link). Nothing is sent from the website itself. If you later want real submissions, connect a service such as Formspree or Netlify Forms.

---

## 4. Build for production

```powershell
npm run build
npm run preview
```

`npm run build` creates the `dist` folder. `npm run preview` serves it locally so you can check it before deploying.

---

## 5. Deploy

### Netlify (drag and drop — simplest)

1. Run `npm run build`.
2. Go to https://app.netlify.com/drop and drag the **`dist`** folder onto the page.
3. Netlify gives you a public link. Rename it under *Site configuration → Change site name*.

### Netlify or Vercel from GitHub (updates automatically)

1. Push this folder to a GitHub repository.
2. In Netlify (*Add new site → Import an existing project*) or Vercel (*Add New → Project*), pick the repository.
3. Use these settings (both usually detect them): **Build command** `npm run build`, **Output / publish directory** `dist`.
4. Every `git push` redeploys the site.

The site must be served from the root of a domain (for example `yourname.netlify.app`), which is what both services do.

---

## 6. Project structure

```text
portfolio/
├── public/
│   ├── images/            optimized images and animation frames
│   ├── favicon.svg
│   └── resume.pdf         replace with your own résumé
├── src/
│   ├── components/        Navbar, Hero, About, Skills, Projects, Experience,
│   │                      Education, Certifications, Contact, Footer
│   │                      (each with its own .css), plus Icon and SectionHeading
│   ├── data/portfolioData.js   ← all your content
│   ├── hooks/             theme, lamp animation, head tracking, scroll helpers
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          design tokens and shared styles
├── index.html
├── package.json
└── vite.config.js
```

## 7. Accessibility and quality notes

- Semantic landmarks, a skip link, labelled buttons, visible focus rings and full keyboard support (including the mobile menu, which closes with Escape).
- Text and button colors meet WCAG AA contrast in both themes.
- Animations respect the system "reduce motion" setting; none block scrolling or navigation.
- External links open in a new tab with `rel="noopener noreferrer"`.
- Page title, description and social tags are in `index.html`. For a rich link preview when you share the site, add an `og:image` tag with the full URL of a 1200×630 image.
