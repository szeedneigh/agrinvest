# Development Setup & Configuration

> **Project**: AgriInvest  
> **Category**: Project Setup & Development Environment  
> **Last Updated**: September 2025

## Overview

This document outlines the development environment setup, project configuration, and tooling standards for the AgriInvest project. Proper setup ensures consistency across all development environments and maintains code quality.

---

## 🚨 Critical Rules (Must Follow)

### 1. TypeScript by Default
- **Rule**: All files must be written in TypeScript (`.ts` or `.tsx`)
- **Exception**: Avoid plain JavaScript files unless explicitly needed for legacy compatibility
- **Benefits**: Type safety, better IDE support, fewer runtime errors
- **Configuration**: Ensure `strict: true` in `tsconfig.json`

### 2. Next.js App Router
- **Rule**: Always use the `app/` directory (App Router) instead of `pages/`
- **Exception**: Only use `pages/` when maintaining legacy code
- **Migration**: Gradually migrate existing pages to App Router
- **Benefits**: Better performance, nested layouts, streaming

### 3. ESLint & Prettier Setup
- **Rule**: ESLint and Prettier must be configured and enforced
- **Requirement**: Code must pass all linting rules with zero errors
- **Automation**: Configure editors to lint and format on save
- **CI Integration**: Linting must pass in CI pipeline

### 4. Environment Variables Security
- **Rule**: Use `.env.local` for secrets and API keys
- **Security**: Never commit `.env` files to git
- **Public Variables**: Use `NEXT_PUBLIC_` prefix only for client-safe variables
- **Documentation**: Maintain `.env.example` with all required variables

### 5. Package Management Consistency
- **Rule**: Use npm or pnpm consistently across the project
- **Requirement**: Always commit lockfile (`package-lock.json` or `pnpm-lock.yaml`)
- **Team Sync**: All team members must use the same package manager
- **CI/CD**: Use the same package manager in deployment pipelines

---

## 📁 Project Structure

### Required Folder Structure
```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── (auth)/            # Route groups
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/                # Base UI components (shadcn/ui)
│   ├── forms/             # Form components
│   └── layout/            # Layout components
├── lib/                   # Utilities and configurations
│   ├── api/               # API client functions
│   ├── auth/              # Authentication logic
│   ├── database/          # Database configuration
│   ├── utils/             # Helper functions
│   └── validations/       # Zod schemas
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── data/                  # Static data and constants
└── styles/                # Additional styles and Tailwind config

public/                    # Static assets
├── images/
├── icons/
└── favicon.ico

project_rules/             # Development guidelines (this folder)
```

---

## ⚠️ Important Rules (Recommended)

### 6. React Strict Mode
- **Rule**: Enable React Strict Mode in `next.config.js`
- **Benefits**: Catches potential issues during development
- **Configuration**:
  ```javascript
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    // Other config options
  };
  
  module.exports = nextConfig;
  ```

### 7. Pre-commit Hooks with Husky
- **Rule**: Set up Husky hooks to run lint and test scripts before commits
- **Benefits**: Prevents broken code from reaching the repository
- **Setup**:
  ```json
  // package.json
  {
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    },
    "lint-staged": {
      "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
    }
  }
  ```

---

## 🛠️ Required Tools & Configuration

### Core Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "prettier": "^3.0.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.0.0"
  }
}
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### ESLint Configuration
```json
// .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended"
  ],
  "rules": {
    "no-unused-vars": "error",
    "no-console": "warn",
    "prefer-const": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

### Prettier Configuration
```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

---

## 🔐 Environment Variables

### Environment File Structure
```bash
# .env.example (committed to git)
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/agrinvest

# Authentication
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000

# External APIs
NEXT_PUBLIC_API_BASE_URL=https://api.agrinvest.com
EXTERNAL_API_KEY=your-api-key

# Email Service
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=user@example.com
EMAIL_SERVER_PASSWORD=password

# File Upload
NEXT_PUBLIC_UPLOAD_ENDPOINT=https://upload.agrinvest.com
```

### Environment Validation
```typescript
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  EXTERNAL_API_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);
```

---

## 🚀 Development Workflow

### Getting Started
1. **Clone repository**
   ```bash
   git clone https://github.com/your-org/agrinvest.git
   cd agrinvest
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Setup environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

### Available Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## 📋 Setup Checklist

### Initial Project Setup
- [ ] Node.js 18+ installed
- [ ] Package manager (npm/pnpm) configured
- [ ] TypeScript configured with strict mode
- [ ] ESLint and Prettier installed and configured
- [ ] Husky pre-commit hooks set up
- [ ] Environment variables configured
- [ ] Git repository initialized
- [ ] README.md created with setup instructions

### Development Environment
- [ ] VS Code extensions installed (ESLint, Prettier, TypeScript)
- [ ] Editor configured for format-on-save
- [ ] Environment variables loaded
- [ ] Development server running successfully
- [ ] Hot reload working
- [ ] Type checking working

### CI/CD Integration
- [ ] GitHub Actions or similar CI configured
- [ ] Linting runs in CI
- [ ] Type checking runs in CI
- [ ] Tests run in CI
- [ ] Build verification in CI
- [ ] Deployment pipeline configured

---

## 🔗 Related Documentation

- [Code Style Rules](./code_style.md)
- [Testing Rules](./testing.md)
- [Performance Rules](./performance.md)
- [Workflow Rules](./workflow.md)