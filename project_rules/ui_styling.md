# UI Styling & Design Standards

> **Project**: AgriInvest  
> **Category**: User Interface & Design  
> **Last Updated**: September 2025

## Overview

This document defines the UI styling standards, design system guidelines, and best practices for the AgriInvest project. Consistent styling ensures a cohesive user experience and maintainable codebase.

---

## 🚨 Critical Rules (Must Follow)

### 1. Tailwind CSS for All Styling
- **Rule**: All styling must use Tailwind CSS classes
- **Exception**: Avoid inline styles and raw CSS unless absolutely necessary
- **Benefits**: Consistency, utility-first approach, smaller CSS bundles

### 2. Design System Consistency
- **Rule**: Colors, spacing, and typography must be defined in Tailwind config
- **No Hardcoding**: Don't hardcode hex values or pixel spacing in components
- **Use**: Theme tokens and CSS variables instead

### 3. Accessibility Requirements
- **Images**: All images must include descriptive alt text
- **Semantic HTML**: Use proper HTML elements (`<button>`, `<nav>`, `<header>`, `<main>`)
- **Forms**: All form inputs must have associated labels
- **Keyboard Navigation**: Interactive elements must be keyboard-accessible

### 4. No Global CSS Pollution
- **Rule**: Global styles should only exist in `globals.css`
- **Component Styles**: Keep component-specific styles scoped to components

---

## ⚠️ Important Rules (Recommended)

### 5. Component Library Consistency
- **Rule**: Use ShadCN UI or Acernity UI components for consistent design patterns
- **Benefits**: Consistent behavior, accessibility built-in, faster development

### 6. Responsive Design
- **Rule**: All UI must be mobile-first and responsive
- **Method**: Use Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, `xl:`)

### 7. Dark Mode Support
- **Rule**: Components must support dark mode using Tailwind's `dark:` utilities
- **Implementation**: Use theme configuration and dark mode variants

### 8. Reusable UI Components
- **Rule**: UI components must be reusable and stateless where possible
- **Location**: Keep in `src/components/`

### 9. Icon Management
- **Rule**: Use an icon library (Lucide, Heroicons) or SVG components
- **Avoid**: Raster images for icons

---

## 🔗 Related Documentation

- [Code Style Rules](./code_style.md)
- [Development Setup](./development_setup.md)
- [Performance Rules](./performance.md)
