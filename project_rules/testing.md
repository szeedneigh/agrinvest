# Testing Standards & Guidelines

> **Project**: AgriInvest  
> **Category**: Quality Assurance & Testing  
> **Last Updated**: September 2025

## Overview

This document outlines the testing standards, frameworks, and best practices for the AgriInvest project. Comprehensive testing ensures code reliability, prevents regressions, and maintains high-quality deliverables.

---

## 🚨 Critical Rules (Must Follow)

### 1. Testing Framework Requirements
- **Unit & Integration Tests**: Jest or Vitest
- **End-to-End Tests**: Playwright or Cypress  
- **Component Testing**: React Testing Library
- **API Testing**: Supertest or built-in test utilities
- **Benefits**: Standardized tooling, better team collaboration

### 2. Critical Path Testing
- **Rule**: Authentication, CRUD operations, and payment flows must always have passing tests
- **Test Types**: Integration tests or E2E tests for critical business logic
- **Coverage**: 100% for critical paths, 80% overall minimum
- **Example Critical Paths**:
  - User registration and login
  - Crop data CRUD operations  
  - Investment transaction processing
  - Data export functionality

### 3. CI Pipeline Enforcement
- **Rule**: All pull requests must pass linting and test suites in CI before merge
- **No Exceptions**: Failing tests block deployment
- **Automation**: Tests run automatically on every commit and PR

### 4. No Skipped Tests in Production
- **Rule**: Do not commit skipped tests (`test.skip`, `describe.skip`)
- **Exception**: Temporarily skip with TODO comments and issue references
- **Cleanup**: Remove or fix skipped tests before major releases

### 5. Regression Testing
- **Rule**: All bug fixes must include regression tests to prevent recurrence
- **Implementation**: Add test cases that reproduce the original bug
- **Documentation**: Link tests to bug report issues

---

## 📁 Test File Organization

### File Structure
```
src/
├── components/
│   ├── CropCard.tsx
│   └── CropCard.test.tsx         # Component tests
├── lib/
│   ├── utils.ts
│   └── utils.test.ts             # Unit tests
├── hooks/
│   ├── useCropData.ts
│   └── useCropData.test.tsx      # Hook tests
└── app/
    └── api/
        ├── crops/
        │   ├── route.ts
        │   └── route.test.ts     # API tests

tests/                             # Test utilities and global tests
├── setup.ts                      # Test setup and configuration
├── mocks/                        # Mock data and utilities
├── fixtures/                     # Test fixtures
├── integration/                  # Integration tests
└── e2e/                          # End-to-end tests
```

### Naming Conventions
- **Unit Tests**: `ComponentName.test.tsx`, `functionName.test.ts`
- **Integration Tests**: `feature.integration.test.ts`
- **E2E Tests**: `userJourney.e2e.test.ts`

---

## ⚠️ Important Rules (Recommended)

### 6. Test Coverage Requirements
- **Minimum Coverage**: 80% for critical modules
- **Critical Modules**: API routes, business logic, utility functions
- **Coverage Reports**: Generated in CI and stored as artifacts
- **Example**:
  ```bash
  npm run test:coverage
  # Coverage should be ≥ 80% for statements, branches, functions, lines
  ```

### 7. Mocking & Isolation
- **Rule**: Use mocking for API calls and external services
- **Benefits**: Faster tests, predictable results, no external dependencies
- **Never**: Depend on live APIs or databases in unit tests
- **Example**:
  ```typescript
  // Mock external API
  jest.mock('@/lib/api/cropApi', () => ({
    fetchCrops: jest.fn(() => Promise.resolve(mockCrops)),
    createCrop: jest.fn(() => Promise.resolve(mockCrop))
  }));
  
  // Mock Next.js router
  jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn()
    })
  }));
  ```

### 8. Accessibility Testing
- **Rule**: Run automated a11y checks for critical pages
- **Tools**: axe-core, Lighthouse CI, jest-axe
- **Integration**: Include in CI pipeline
- **Example**:
  ```typescript
  import { axe, toHaveNoViolations } from 'jest-axe';
  
  expect.extend(toHaveNoViolations);
  
  test('CropCard should not have accessibility violations', async () => {
    const { container } = render(<CropCard crop={mockCrop} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  ```

### 9. Snapshot Testing Guidelines
- **Rule**: Use snapshot testing for UI components, but update thoughtfully
- **When to Update**: Only when intended UI changes are confirmed
- **Review**: Always review snapshot changes before committing
- **Best Practice**: Keep snapshots small and focused

---

## 🧪 Testing Patterns & Examples

### Component Testing
```typescript
// components/CropCard.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CropCard } from './CropCard';

const mockCrop = {
  id: '1',
  name: 'Wheat',
  price: 250,
  season: 'Winter',
  imageUrl: '/wheat.jpg'
};

describe('CropCard', () => {
  test('displays crop information correctly', () => {
    render(<CropCard crop={mockCrop} />);
    
    expect(screen.getByText('Wheat')).toBeInTheDocument();
    expect(screen.getByText('$250')).toBeInTheDocument();
    expect(screen.getByText('Winter')).toBeInTheDocument();
  });
  
  test('calls onSelect when card is clicked', async () => {
    const onSelect = jest.fn();
    render(<CropCard crop={mockCrop} onSelect={onSelect} />);
    
    await userEvent.click(screen.getByRole('button'));
    expect(onSelect).toHaveBeenCalledWith(mockCrop.id);
  });
});
```

### Hook Testing
```typescript
// hooks/useCropData.test.tsx
import { renderHook, waitFor } from '@testing-library/react';
import { useCropData } from './useCropData';

// Mock the API
jest.mock('@/lib/api/cropApi');

describe('useCropData', () => {
  test('fetches and returns crop data', async () => {
    const mockCrops = [{ id: '1', name: 'Wheat' }];
    (fetchCrops as jest.Mock).mockResolvedValue(mockCrops);
    
    const { result } = renderHook(() => useCropData());
    
    expect(result.current.loading).toBe(true);
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.crops).toEqual(mockCrops);
    });
  });
});
```

### API Route Testing
```typescript
// app/api/crops/route.test.ts
import { NextRequest } from 'next/server';
import { GET, POST } from './route';

// Mock database
jest.mock('@/lib/database');

describe('/api/crops', () => {
  test('GET returns crops list', async () => {
    const mockCrops = [{ id: '1', name: 'Wheat' }];
    (db.crop.findMany as jest.Mock).mockResolvedValue(mockCrops);
    
    const request = new NextRequest('http://localhost:3000/api/crops');
    const response = await GET(request);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data).toEqual(mockCrops);
  });
  
  test('POST creates new crop', async () => {
    const newCrop = { name: 'Corn', type: 'Grain' };
    const createdCrop = { id: '2', ...newCrop };
    
    (db.crop.create as jest.Mock).mockResolvedValue(createdCrop);
    
    const request = new NextRequest('http://localhost:3000/api/crops', {
      method: 'POST',
      body: JSON.stringify(newCrop)
    });
    
    const response = await POST(request);
    const data = await response.json();
    
    expect(response.status).toBe(201);
    expect(data.data).toEqual(createdCrop);
  });
});
```

### E2E Testing
```typescript
// tests/e2e/cropManagement.e2e.test.ts
import { test, expect } from '@playwright/test';

test.describe('Crop Management', () => {
  test('user can create, edit, and delete crops', async ({ page }) => {
    // Navigate to crops page
    await page.goto('/crops');
    
    // Create new crop
    await page.click('[data-testid="add-crop-button"]');
    await page.fill('[data-testid="crop-name"]', 'Test Wheat');
    await page.fill('[data-testid="crop-price"]', '300');
    await page.click('[data-testid="save-crop"]');
    
    // Verify crop appears in list
    await expect(page.locator('[data-testid="crop-list"]'))
      .toContainText('Test Wheat');
    
    // Edit crop
    await page.click('[data-testid="edit-crop-1"]');
    await page.fill('[data-testid="crop-price"]', '350');
    await page.click('[data-testid="save-crop"]');
    
    // Verify updated price
    await expect(page.locator('[data-testid="crop-price-1"]'))
      .toContainText('$350');
      
    // Delete crop
    await page.click('[data-testid="delete-crop-1"]');
    await page.click('[data-testid="confirm-delete"]');
    
    // Verify crop is removed
    await expect(page.locator('[data-testid="crop-list"]'))
      .not.toContainText('Test Wheat');
  });
});
```

---

## 📊 Test Configuration

### Jest Configuration
```javascript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
```

### Test Setup
```typescript
// tests/setup.ts
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfills for Node.js environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
}));

// Mock environment variables
process.env.NEXT_PUBLIC_API_BASE_URL = 'http://localhost:3000';
```

---

## 📋 Testing Checklist

### Before Writing Tests
- [ ] Identify what behavior to test (not implementation details)
- [ ] Determine appropriate test type (unit/integration/e2e)
- [ ] Set up necessary mocks and test data
- [ ] Consider accessibility requirements

### Writing Tests
- [ ] Test renders/behaves correctly with valid inputs
- [ ] Test error handling with invalid inputs
- [ ] Test edge cases and boundary conditions
- [ ] Test user interactions and state changes
- [ ] Test accessibility requirements
- [ ] Use descriptive test names and assertions

### Before Committing
- [ ] All tests pass locally
- [ ] Coverage meets minimum requirements
- [ ] No skipped tests without justification
- [ ] Tests are performant (< 10s total runtime)
- [ ] Mocks are properly cleaned up

---

## 🔗 Related Documentation

- [Code Style Rules](./code_style.md)
- [Development Setup](./development_setup.md)
- [API Backend Rules](./api_backend.md)
- [Performance Rules](./performance.md)