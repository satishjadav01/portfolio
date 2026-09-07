# Satish Jadav - Portfolio

Personal portfolio website for Satish Jadav, featuring selected projects, experience, skills, and contact details.

**Live site:** [portfolio-livid-chi-65.vercel.app](https://portfolio-livid-chi-65.vercel.app/)

## Built With

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Lenis
- React Icons

## Project Structure

The Vite application lives in the `Portfolio` directory:

```text
Portfolio/
	public/       Static assets
	src/          React components, sections, styles, and data
	index.html    Application entry HTML
	package.json  Scripts and dependencies
```

## Local Development

```bash
cd Portfolio
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Production Build

```bash
cd Portfolio
npm run build
npm run preview
```

Run the linter with:

```bash
npm run lint
```

## Deploying to Vercel

When importing this repository into Vercel, use these settings:

| Setting | Value |
| --- | --- |
| Framework Preset | Vite |
| Root Directory | `Portfolio` |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Vercel automatically creates a new deployment when changes are pushed to the `main` branch.
