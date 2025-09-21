# Code Style & Standards

> **Project**: AgriInvest  
> **Category**: Code Quality & Standards  
> **Last Updated**: September 2025

## Overview

This document defines the coding standards, conventions, and style guidelines for the AgriInvest project. Consistent code style improves readability, maintainability, and team collaboration.

---

## 🚨 Critical Rules (Must Follow)

### 1. Functional Components Only
- **Rule**: Use functional components with hooks instead of class components
- **Reason**: Modern React best practices, better performance, and simpler code
- **Example**:
  ```tsx
  // ✅ Correct
  function UserCard({ user }: { user: User }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return <div>{user.name}</div>;
  }
  
  // ❌ Wrong
  class UserCard extends Component {
    state = { isExpanded: false };
    render() { return <div>{this.props.user.name}</div>; }
  }
  ```

### 2. TypeScript Strictness
- **Rule**: Always enable `strict: true` in `tsconfig.json`
- **Guideline**: Avoid using `any` unless absolutely necessary
- **Alternatives to `any`**:
  - `unknown` for truly unknown types
  - `object` for object types
  - Union types for specific possibilities
  - Generic types for reusable components

### 3. No Unused Code
- **Rule**: Disallow unused imports, variables, or functions
- **Action**: Remove dead code immediately
- **Tools**: ESLint rules to catch unused code
- **Example**:
  ```typescript
  // ❌ Wrong - unused import and variable
  import { useState, useEffect } from 'react'; // useEffect unused
  const unusedVariable = 'test';
  
  // ✅ Correct
  import { useState } from 'react';
  ```

### 4. Consistent Formatting
- **Rule**: Code must follow Prettier formatting standards
- **Configuration**:
  - 2 spaces for indentation
  - Semicolons required
  - Single quotes for strings
  - Trailing commas where valid
- **Setup**: Configure your editor to format on save

---

## ⚠️ Important Rules (Recommended)

### 5. Naming Conventions

#### Components
- **Format**: PascalCase
- **Examples**: `UserCard.tsx`, `NavigationMenu.tsx`, `ProductList.tsx`

#### Hooks
- **Format**: camelCase, starting with 'use'
- **Examples**: `useAuth.ts`, `useLocalStorage.ts`, `useApiData.ts`

#### Variables & Functions
- **Format**: camelCase
- **Examples**: `fetchUserData`, `isLoggedIn`, `handleSubmit`

#### Constants
- **Format**: UPPER_SNAKE_CASE
- **Examples**: `API_BASE_URL`, `MAX_RETRY_ATTEMPTS`, `DEFAULT_TIMEOUT`

### 6. File Naming
- **React Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Utility/Helper files**: camelCase (e.g., `formatDate.ts`)
- **Type definitions**: PascalCase (e.g., `UserTypes.ts`)
- **Constants**: camelCase (e.g., `apiEndpoints.ts`)

### 7. Import Management

#### Prefer Named Exports
- **Rule**: Use named exports instead of default exports
- **Benefits**: Better IDE support, prevents import mismatches
- **Example**:
  ```typescript
  // ✅ Preferred
  export const Button = () => <button />;
  import { Button } from './Button';
  
  // ❌ Avoid
  const Button = () => <button />;
  export default Button;
  import Button from './Button';
  ```

#### Consistent Import Paths
- **Rule**: Use absolute imports with path aliases
- **Configuration**: Set up path aliases in `tsconfig.json`
- **Example**:
  ```typescript
  // ✅ Correct
  import { Button } from '@/components/Button';
  import { formatDate } from '@/lib/utils';
  
  // ❌ Wrong
  import { Button } from '../../components/Button';
  import { formatDate } from '../../../lib/utils';
  ```

### 8. JSX Standards

#### Self-Closing Tags
- **Rule**: Use self-closing tags for empty elements
- **Example**:
  ```tsx
  // ✅ Correct
  <Image src="/logo.png" alt="Logo" />
  <input type="text" />
  
  // ❌ Wrong
  <Image src="/logo.png" alt="Logo"></Image>
  <input type="text"></input>
  ```

#### Multi-line JSX
- **Rule**: Wrap multi-line JSX in parentheses
- **Example**:
  ```tsx
  // ✅ Correct
  return (
    <div className="container">
      <h1>Title</h1>
      <p>Content</p>
    </div>
  );
  
  // ❌ Wrong
  return <div className="container">
    <h1>Title</h1>
    <p>Content</p>
  </div>;
  ```

#### Styling
- **Rule**: Avoid inline styles; prefer Tailwind or CSS classes
- **Example**:
  ```tsx
  // ✅ Correct
  <div className="bg-blue-500 text-white p-4">Content</div>
  
  // ❌ Wrong
  <div style={{ backgroundColor: 'blue', color: 'white', padding: '16px' }}>
    Content
  </div>
  ```

### 9. Comments & Documentation

#### When to Comment
- **Complex business logic**: Explain the "why", not the "what"
- **Non-obvious code**: Clarify intent when code isn't self-explanatory
- **API integrations**: Document expected responses and error handling
- **Performance optimizations**: Explain why optimization was needed

#### Comment Style
```typescript
// ✅ Good comment - explains why
// Using debounce to prevent excessive API calls during typing
const debouncedSearch = useDebounce(searchTerm, 300);

// ❌ Bad comment - explains what (obvious from code)
// Set the user name to the input value
setUserName(inputValue);
```

#### Code Cleanup
- **Rule**: Remove commented-out code before committing
- **Exception**: TODO comments with issue references are acceptable

---

## 🛠️ Tools & Configuration

### Required Tools
1. **ESLint**: Code linting and error detection
2. **Prettier**: Code formatting
3. **TypeScript**: Type checking
4. **Husky**: Pre-commit hooks

### Recommended VS Code Extensions
- ESLint
- Prettier
- TypeScript Importer
- Auto Rename Tag
- Bracket Pair Colorizer

### Configuration Files
```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "@typescript-eslint/recommended"],
  "rules": {
    "no-unused-vars": "error",
    "prefer-const": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

---

## 📋 Code Review Checklist

Before submitting code for review:

- [ ] All ESLint warnings and errors resolved
- [ ] Code formatted with Prettier
- [ ] No unused imports or variables
- [ ] Proper TypeScript types used (no `any`)
- [ ] Consistent naming conventions followed
- [ ] Comments added for complex logic
- [ ] Commented-out code removed
- [ ] Imports use absolute paths with aliases

---

## 🔗 Related Documentation

- [Development Setup](./development_setup.md)
- [UI Styling Rules](./ui_styling.md)
- [Testing Rules](./testing.md)
- [Performance Rules](./performance.md)