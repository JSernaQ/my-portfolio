# AGENTS.md — Reglas técnicas del Portfolio

Guía para cualquier IA (o humano) que trabaje en este repositorio. Léela antes de tocar código.

## Stack

| Tecnología | Versión | Notas |
|------------|---------|-------|
| Astro | ^7 | SSR con `@astrojs/node` (standalone) |
| Tailwind CSS | ^4 | Vía plugin `@tailwindcss/vite` en `astro.config.mjs` |
| Node | ≥ 22.12 | Dockerfile usa `node:22-alpine` |
| EmailJS | browser SDK | Formulario de contacto (`@emailjs/browser`) |

## Comandos

```sh
npm run dev       # servidor de desarrollo (localhost:4321)
npm run host      # dev accesible en red
npm run build     # build de producción a ./dist
npm run preview   # previsualizar el build de producción
```

## Estructura de carpetas

```
src/
├── components/   # Componentes compartidos (ProjectCard)
├── data/         # Datos tipados que alimentan las secciones
│   ├── Projects.ts
│   └── Experience.ts
├── layouts/      # Layout.astro (head, SEO, fuentes)
├── pages/        # Páginas Y secciones del single-page app
│   ├── index.astro      <- página principal (importa todas las secciones)
│   ├── projects/index.astro <- página /projects
│   ├── Navbar.astro ... # secciones usadas como componentes
└── styles/global.css    # Tailwind + tema global
public/           # Assets estáticos (imágenes, iconos)
```

> **Convención actual**: las secciones viven en `src/pages/` y se importan como componentes desde `index.astro`. Mantener esta convención.

## Rutas

- `/` → landing (Navbar, Hero, Experience, Projects destacados, Contact, Footer)
- `/projects` → todos los proyectos (`src/pages/projects/index.astro`)

## Reglas técnicas

1. **Datos, no hardcode**: contenido de proyectos y experiencia se define en `src/data/*.ts`. Las secciones solo renderizan. Al agregar un proyecto/experiencia, edita el archivo de datos, no el `.astro`.
2. **Imágenes públicas**: rutas absolutas (`/profile.png`, no `profile.png`).
3. **Variables de entorno**: las `PUBLIC_*` van al bundle del cliente (visibles). Nunca comitear secrets. Ver `.env.example`.
4. **HTML válido**: elementos de lista dentro de `<ul>` deben usar `<li>`.
5. **ID de secciones**: `#hero`, `#experience`, `#projects`, `#contact-me` (usados en nav, no cambiar).
6. **Responsive**: probar en mobile (los menús slide y grids cambian con `<sm:`).
7. **No dejar** `console.log` ni `href=""` en producción.
8. **Reglas de diseño**: ver `docs/rules/design.md` (obligatorio para cambios de UI).

## Flujo de trabajo

1. Instalar deps: `npm ci` (package-lock commiteado).
2. Cambios pequeños y enfocados.
3. Verificar con `npm run build`.
4. Commit con mensaje descriptivo (el usuario decide cuándo commitear/deployear).