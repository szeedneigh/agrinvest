# AgriInvest Project Rules & Guidelines

> **Project**: AgriInvest - Agricultural Investment Platform  
> **Purpose**: Development standards, best practices, and coding guidelines  
> **Last Updated**: September 2025

## 📖 Overview

This directory contains comprehensive development guidelines and best practices for the AgriInvest project. These rules ensure code quality, maintainability, performance, and team collaboration across all aspects of the application.

---

## 📚 Documentation Index

### Core Development Guidelines

| Document | Category | Description |
|----------|----------|-------------|
| **[Code Style](./code_style.md)** | Standards | Coding conventions, naming, formatting, and TypeScript usage |
| **[Development Setup](./development_setup.md)** | Configuration | Project setup, tooling, environment configuration |
| **[Testing](./testing.md)** | Quality Assurance | Testing strategies, frameworks, coverage requirements |
| **[Workflow](./workflow.md)** | Process | Git workflow, deployment, environment management |

### Technical Implementation

| Document | Category | Description |
|----------|----------|-------------|
| **[API Backend](./api_backend.md)** | Backend | API development, error handling, authentication |
| **[Data Fetching](./data_fetching.md)** | Data Management | Server/client data fetching, caching strategies |
| **[State Management](./state_management.md)** | Architecture | React state patterns, global state, data flow |
| **[Performance](./performance.md)** | Optimization | Performance best practices, bundle optimization |
| **[UI Styling](./ui_styling.md)** | Frontend | Design system, Tailwind CSS, accessibility |

---

## 🎯 Quick Start Guide

### For New Team Members

1. **Read Core Guidelines First**:
   - [Development Setup](./development_setup.md) - Get your environment ready
   - [Code Style](./code_style.md) - Learn our coding standards
   - [Workflow](./workflow.md) - Understand our development process

2. **Technical Implementation**:
   - [API Backend](./api_backend.md) - For backend development
   - [UI Styling](./ui_styling.md) - For frontend development
   - [Testing](./testing.md) - For quality assurance

3. **Advanced Topics**:
   - [Performance](./performance.md) - Optimization techniques
   - [State Management](./state_management.md) - Data architecture
   - [Data Fetching](./data_fetching.md) - API integration patterns

### For Code Reviews

Use these documents as checklists during code reviews:
- ✅ **Code Style**: Follows naming conventions and formatting
- ✅ **Performance**: Optimized for bundle size and loading speed
- ✅ **Testing**: Adequate test coverage and quality
- ✅ **Security**: Proper authentication and data validation
- ✅ **Accessibility**: WCAG compliance and semantic HTML

---

## 🚨 Critical Rules Summary

### Must Follow (🚨)
These rules are non-negotiable and must be followed in all code:

1. **TypeScript Strict Mode**: All code must use TypeScript with strict settings
2. **ESLint/Prettier**: Code must pass linting and formatting checks
3. **Testing Required**: Critical paths must have test coverage
4. **Security First**: Never commit secrets, always validate inputs
5. **Accessibility**: All UI must meet WCAG AA standards
6. **Performance**: Use Next.js Image, Server Components, and proper caching

### Strongly Recommended (⚠️)
These rules improve code quality and maintainability:

1. **Named Exports**: Prefer named exports over default exports
2. **Custom Hooks**: Extract reusable logic into custom hooks
3. **Component Libraries**: Use ShadCN UI for consistent design
4. **Error Boundaries**: Implement proper error handling
5. **Documentation**: Comment complex business logic

---

## 🔧 Tools & Configuration

### Required Development Tools
- **Node.js 18+** - Runtime environment
- **TypeScript 5+** - Type checking and compilation
- **ESLint** - Code linting and error detection
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks
- **Jest/Vitest** - Testing framework

### Recommended VS Code Extensions
- ESLint
- Prettier - Code formatter
- TypeScript Importer
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Error Lens

### Project Configuration Files
```
project_rules/
├── README.md              # This file
├── api_backend.md         # Backend development rules
├── code_style.md          # Coding standards
├── data_fetching.md       # Data management
├── development_setup.md   # Project setup
├── performance.md         # Optimization guidelines
├── state_management.md    # State architecture
├── testing.md            # Testing standards
├── ui_styling.md          # UI/UX guidelines
└── workflow.md           # Development workflow
```

---

## 📊 Project Architecture

### Technology Stack
- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI components
- **State Management**: React state, Zustand (when needed), SWR/React Query
- **Testing**: Jest, React Testing Library, Playwright
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Vercel/AWS with CI/CD pipelines

### Folder Structure
```
src/
├── app/                   # Next.js App Router
├── components/            # Reusable UI components
├── lib/                   # Utilities and configurations
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript definitions
├── data/                  # Static data
└── styles/                # Global styles
```

---

## 🔄 Continuous Improvement

### Rule Updates
- Rules are reviewed and updated monthly
- All team members can propose changes via pull requests
- Major changes require team discussion and approval
- Changes are documented with rationale and examples

### Feedback Process
- Regular retrospectives to assess rule effectiveness
- Team surveys on development experience
- Metrics tracking (build times, error rates, productivity)
- Client feedback on code quality and delivery

---

## 📋 Compliance Checklist

### Before Every Commit
- [ ] Code follows style guidelines
- [ ] All tests pass locally
- [ ] No linting errors or warnings
- [ ] TypeScript compilation successful
- [ ] Environment variables not hardcoded
- [ ] No sensitive data in commit

### Before Every Pull Request
- [ ] Feature branch is up to date with main
- [ ] All CI checks pass
- [ ] Adequate test coverage
- [ ] Documentation updated if needed
- [ ] Performance impact considered
- [ ] Accessibility tested

### Before Every Release
- [ ] All integration tests pass
- [ ] Performance benchmarks met
- [ ] Security scan completed
- [ ] Database migrations tested
- [ ] Rollback plan prepared
- [ ] Monitoring and alerts configured

---

## 🆘 Getting Help

### Internal Resources
- **Team Lead**: Technical guidance and rule clarification
- **Slack #dev-help**: Quick questions and troubleshooting
- **Weekly Code Reviews**: Best practices and knowledge sharing
- **Monthly Tech Talks**: Deep dives into specific topics

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Testing Library Documentation](https://testing-library.com/docs/)

---

## 📈 Success Metrics

We measure the effectiveness of these rules through:

- **Code Quality**: Reduced bug reports, faster code reviews
- **Performance**: Improved Core Web Vitals, faster build times
- **Developer Experience**: Reduced onboarding time, higher satisfaction
- **Delivery Speed**: Faster feature delivery, fewer production issues
- **Maintainability**: Easier refactoring, better test coverage

---

## 🔗 Related Resources

- [Project Repository](https://github.com/agrinvest/platform)
- [Design System](https://design.agrinvest.com)
- [API Documentation](https://api.agrinvest.com/docs)
- [Deployment Guide](https://wiki.agrinvest.com/deployment)
- [Troubleshooting Guide](https://wiki.agrinvest.com/troubleshooting)

---

*This documentation is a living resource. Please contribute improvements and suggestions to help our team build better software together.*
