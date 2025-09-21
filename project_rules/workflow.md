# Development Workflow & Environment Rules

> **Project**: AgriInvest  
> **Category**: Development Workflow & Environment Management  
> **Last Updated**: September 2025

## Overview

This document outlines the development workflow, environment management, and deployment guidelines for the AgriInvest project. Proper workflow ensures team collaboration, code quality, and deployment reliability.

---

## 🚨 Critical Environment Rules (Must Follow)

### 1. Environment Variables Management
- **Rule**: All environment-specific settings must be managed via `.env.local`, `.env.development`, `.env.production`
- **Security**: Never hardcode secrets, API keys, or sensitive data directly in code
- **Client Variables**: Use `NEXT_PUBLIC_` prefix only for variables safe to expose on the client
- **Documentation**: Document all required environment variables in `.env.example`

### 2. Environment Validation
- **Rule**: Validate environment variables at runtime using libraries like Zod or envsafe
- **Implementation**: Create a centralized env validation module
- **Example**:
  ```typescript
  // lib/env.ts
  import { z } from 'zod';
  
  const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(1),
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
    // Add all required env vars
  });
  
  export const env = envSchema.parse(process.env);
  ```

### 3. Security Best Practices
- **Rule**: Avoid leaking server-only environment variables into client-side bundles
- **Validation**: Ensure no sensitive data is exposed with `NEXT_PUBLIC_` prefix
- **Review**: Regularly audit environment variable usage

---

## 🔄 Git Workflow

### Branch Strategy
```
main                    # Production branch
├── develop            # Development integration branch
├── feature/crop-list  # Feature branches
├── bugfix/auth-issue  # Bug fix branches
└── hotfix/security    # Emergency fixes
```

### Commit Conventions
- **Format**: `type(scope): description`
- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- **Examples**:
  ```
  feat(crops): add crop filtering functionality
  fix(auth): resolve login redirect issue
  docs(api): update endpoint documentation
  test(components): add CropCard component tests
  ```

### Pull Request Process
1. **Create Feature Branch**: `git checkout -b feature/feature-name`
2. **Make Changes**: Follow coding standards and write tests
3. **Commit Changes**: Use conventional commit messages
4. **Push Branch**: `git push origin feature/feature-name`
5. **Create PR**: Include description, testing notes, and screenshots
6. **Code Review**: Address feedback and make changes
7. **CI Checks**: Ensure all tests and linting pass
8. **Merge**: Squash and merge to main branch

---

## 📋 Pre-Commit Checklist

### Code Quality
- [ ] All ESLint warnings resolved
- [ ] Code formatted with Prettier
- [ ] TypeScript compilation successful
- [ ] No unused imports or variables
- [ ] Proper error handling implemented

### Testing
- [ ] Unit tests written for new functionality
- [ ] All tests passing locally
- [ ] Coverage requirements met
- [ ] Integration tests updated if needed

### Documentation
- [ ] README updated if necessary
- [ ] API documentation updated
- [ ] Environment variables documented
- [ ] Code comments added for complex logic

### Security
- [ ] No secrets committed to code
- [ ] Environment variables properly configured
- [ ] Dependencies updated and secure
- [ ] Access controls properly implemented

---

## 🚀 Deployment Guidelines

### Environment Stages
1. **Development**: Local development and testing
2. **Staging**: Pre-production testing and client review
3. **Production**: Live application serving users

### Deployment Checklist
- [ ] All tests passing in CI
- [ ] Database migrations completed
- [ ] Environment variables configured
- [ ] Performance tests executed
- [ ] Security scanning completed
- [ ] Backup procedures verified

### Rollback Plan
- [ ] Previous version tagged and accessible
- [ ] Database rollback scripts prepared
- [ ] Monitoring and alerting configured
- [ ] Communication plan for stakeholders

---

## 🔧 Development Scripts

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "prepare": "husky install"
  }
}
```

### Pre-commit Hooks
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
}
```

---

## 📊 Code Review Guidelines

### What to Look For
- **Functionality**: Does the code work as intended?
- **Readability**: Is the code easy to understand?
- **Performance**: Are there any performance concerns?
- **Security**: Are there any security vulnerabilities?
- **Testing**: Are there adequate tests?
- **Standards**: Does it follow project conventions?

### Review Checklist
- [ ] Code follows established patterns
- [ ] Error handling is appropriate
- [ ] Performance implications considered
- [ ] Security best practices followed
- [ ] Tests cover new functionality
- [ ] Documentation is updated

---

## 🔗 Related Documentation

- [Development Setup](./development_setup.md)
- [Code Style Rules](./code_style.md)
- [Testing Rules](./testing.md)
- [API Backend Rules](./api_backend.md)