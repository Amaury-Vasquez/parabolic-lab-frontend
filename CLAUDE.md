# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ParabolicLab is a Next.js application designed to support learning about parabolic motion physics ("tiro parabólico"). This is an educational platform for teachers (docentes) and students to work with physics scenarios and track progress.

## Key Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production with Turbopack
npm start            # Start production server
npm run lint         # Run ESLint
```

## Architecture

### Route Groups & Layouts

The application uses Next.js 16 App Router with **route groups** to separate authenticated and unauthenticated routes:

- **`(unauth-routes)/`** - Public routes that use `MainLayout`
  - Simple fixed navbar with hamburger button and app name
  - Used for landing pages, registration, etc.

- **`(withauth-routes)/`** - Protected routes that use `AuthenticatedLayout`
  - Sidebar navigation menu for teacher dashboard
  - Contains `/docente/*` routes for teacher functionality

**Important**: Route groups use parentheses and don't affect the URL structure. Both groups inherit from the root `layout.tsx`.

### Layout System

Two main layouts in `src/layouts/`:

1. **`MainLayout.tsx`** - Unauthenticated pages
   - Fixed navbar with `bg-base-200`
   - Centered "ParabolicLab" branding
   - Left-aligned hamburger button
   - Uses `position: fixed` with `pt-16` content padding

2. **`AuthenticatedLayout.tsx`** - Authenticated pages
   - Left sidebar (`w-56`) with navigation menu
   - Uses DaisyUI menu component with route array and `.map()`
   - Dynamic active state using `usePathname()`
   - Main content area with `bg-base-100`

### Styling Approach

- **DaisyUI** is the primary component library - always use DaisyUI classes and components
- **Tailwind CSS 4** for utility classes
- Theme is set in root layout: `data-theme="winter"`
- Color palette uses DaisyUI semantic colors: `bg-base-100`, `bg-base-200`, `bg-base-300`, `bg-primary`, `text-primary-content`
- Never use hardcoded color values - always use DaisyUI theme colors

### Path Aliases

TypeScript is configured with path alias `@/*` pointing to `src/*`:
```tsx
import MainLayout from "@/layouts/MainLayout";
import Component from "@/components/Component";
```

## Development Patterns

### When creating navigation or lists:
- Define items in an array/object outside JSX
- Use `.map()` to render repeated elements
- Avoid duplicating values in multiple places (e.g., use `route.href` once for both `href` and comparison)

### When using DaisyUI:
- Use semantic component classes: `btn`, `card`, `menu`, `navbar`, `drawer`, etc.
- Use semantic color classes: `btn-primary`, `btn-outline`, `bg-base-100`, etc.
- Apply `active` class conditionally for navigation items
- Structure menus with `<nav className="menu">` containing `<li>` items

### Route Organization:
- Public pages go in `src/app/(unauth-routes)/`
- Teacher/admin pages go in `src/app/(withauth-routes)/docente/`
- Each route group has its own `layout.tsx` that applies the appropriate wrapper layout
