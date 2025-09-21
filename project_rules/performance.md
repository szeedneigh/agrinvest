# Performance Optimization Rules

> **Project**: AgriInvest  
> **Category**: Performance & Optimization  
> **Last Updated**: September 2025

## Overview

This document outlines performance optimization strategies and rules for the AgriInvest project. These guidelines ensure fast loading times, efficient resource usage, and optimal user experience.

---

## 🚨 Critical Rules (Must Follow)

### 1. Use Next.js Image Component
- **Rule**: All images must use Next.js `<Image>` component for automatic optimization
- **Benefits**: Lazy loading, automatic resizing, WebP conversion, responsive images
- **Example**:
  ```tsx
  import Image from 'next/image';
  
  // ✅ Correct
  <Image 
    src="/crops/wheat.jpg" 
    alt="Wheat field harvest" 
    width={800} 
    height={600}
    priority // For above-the-fold images
  />
  
  // ❌ Wrong
  <img src="/crops/wheat.jpg" alt="Wheat field" />
  ```

### 2. Server Components First
- **Rule**: Prefer Server Components over Client Components to reduce bundle size
- **Benefits**: Faster initial load, better SEO, reduced JavaScript on client
- **Use Client Components Only For**: User interactions, state management, browser APIs

### 3. Pagination for Large Datasets
- **Rule**: Never fetch entire datasets at once for large collections
- **Implementation**: Use pagination or infinite scroll
- **Server-Side**: Implement cursor-based or offset pagination

---

## ⚠️ Important Rules (Recommended)

### 4. Dynamic Imports for Large Components
- **Rule**: Large or rarely used components must be lazy-loaded
- **Method**: Use `next/dynamic` with suspense/fallbacks
- **Use Cases**: Modals, charts, admin panels, heavy libraries

### 5. Tree Shaking & Selective Imports
- **Rule**: Import only what you need from libraries
- **Benefits**: Smaller bundle size, faster load times

### 6. Minimize Client-Side JavaScript
- **Rule**: Push logic to the server when possible
- **Server-Side Benefits**: No impact on client bundle, better performance

### 7. Prevent Unnecessary Re-renders
- **Rule**: Use memoization for expensive computations and props
- **Tools**: `React.memo`, `useMemo`, `useCallback`

### 8. Database Query Optimization
- **Rule**: All backend queries must be optimized
- **Requirements**: Use indexes, select only required fields, paginate results

### 9. Static Asset Optimization
- **Rule**: Optimize static files and use CDN when appropriate
- **Implementation**: Place static files in `/public` only when necessary

### 10. Bundle Analysis
- **Rule**: Run bundle analysis before major releases
- **Tool**: `@next/bundle-analyzer`

---

## 📊 Performance Monitoring

### Core Web Vitals Targets
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms  
- **Cumulative Layout Shift (CLS)**: < 0.1

---

## 🔗 Related Documentation

- [Data Fetching Rules](./data_fetching.md)
- [UI Styling Rules](./ui_styling.md)
- [API Backend Rules](./api_backend.md)
