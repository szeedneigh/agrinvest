# API & Backend Rules

> **Project**: AgriInvest  
> **Category**: Backend Development  
> **Last Updated**: September 2025

## Overview

This document outlines the standards and best practices for API development and backend implementation in the AgriInvest project. These rules ensure consistency, security, and maintainability across all backend services.

---

## 🚨 Critical Rules (Must Follow)

### 1. API Routes Location
- **Rule**: All API endpoints must be implemented inside `src/app/api/[route]/route.ts` following Next.js App Router conventions
- **Why**: Maintains project structure consistency and leverages Next.js optimization
- **Example**:
  ```typescript
  // ✅ Correct: src/app/api/users/route.ts
  export async function GET() {
    // implementation
  }
  
  // ❌ Wrong: pages/api/users.js
  ```

### 2. HTTP Status Codes
- **Rule**: Always return proper HTTP status codes
- **Common Codes**:
  - `200` - OK (successful GET, PUT, PATCH)
  - `201` - Created (successful POST)
  - `400` - Bad Request (invalid input)
  - `401` - Unauthorized (authentication required)
  - `403` - Forbidden (insufficient permissions)
  - `404` - Not Found
  - `500` - Internal Server Error
- **Example**:
  ```typescript
  return new Response(JSON.stringify({ data }), { 
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
  ```

### 3. Input Validation
- **Rule**: Validate all incoming request bodies and query parameters using Zod before processing
- **Implementation**:
  ```typescript
  import { z } from 'zod';
  
  const createUserSchema = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email(),
    age: z.number().min(18).optional()
  });
  
  export async function POST(request: Request) {
    const body = await request.json();
    const validatedData = createUserSchema.parse(body);
    // Continue with validated data
  }
  ```

### 4. Error Handling
- **Rule**: API responses must return a JSON error payload with `message` and `status`
- **Security**: Never leak stack traces or sensitive details in production responses
- **Standard Error Format**:
  ```typescript
  {
    "success": false,
    "error": {
      "message": "User not found",
      "code": "USER_NOT_FOUND"
    }
  }
  ```

### 5. Environment Variables
- **Rule**: Secrets (API keys, DB credentials) must only be accessed from `process.env`
- **Security**: Never hardcode secrets in the codebase
- **Example**:
  ```typescript
  // ✅ Correct
  const apiKey = process.env.EXTERNAL_API_KEY;
  
  // ❌ Wrong
  const apiKey = "sk-1234567890abcdef";
  ```

### 6. Authentication & Authorization
- **Rule**: Protect private routes with proper authentication
- **Methods**: JWT, NextAuth, or session cookies
- **Authorization**: Enforce role-based authorization where applicable
- **Example**:
  ```typescript
  export async function GET(request: Request) {
    const token = request.headers.get('authorization');
    const user = await verifyToken(token);
    
    if (!user) {
      return new Response('Unauthorized', { status: 401 });
    }
    
    // Continue with authenticated user
  }
  ```

---

## ⚠️ Important Rules (Recommended)

### 7. Business Logic Separation
- **Rule**: API route handlers should only handle requests, validation, and responses
- **Best Practice**: Move core business logic to `lib/services/`
- **Structure**:
  ```
  src/
  ├── app/api/users/route.ts    # Route handler only
  └── lib/services/
      └── userService.ts        # Business logic
  ```

### 8. Consistent Response Shape
- **Rule**: All API responses must follow a consistent structure
- **Format**:
  ```typescript
  {
    success: boolean,
    data?: any,
    error?: {
      message: string,
      code?: string
    }
  }
  ```

### 9. Rate Limiting
- **Rule**: Implement rate limiting for sensitive API routes
- **Methods**: Middleware or edge functions
- **Use Cases**: Login attempts, password resets, data exports

### 10. Logging
- **Rule**: Log API errors and important events securely
- **Development**: `console.error` for debugging
- **Production**: External logging service (e.g., Sentry, Winston)
- **Example**:
  ```typescript
  try {
    // API logic
  } catch (error) {
    console.error('API Error:', error.message);
    // Log to external service in production
  }
  ```

---

## 📋 Checklist

Before deploying any API endpoint, ensure:

- [ ] Proper HTTP status codes are returned
- [ ] Input validation is implemented with Zod
- [ ] Error handling follows the standard format
- [ ] Authentication/authorization is properly implemented
- [ ] Environment variables are used for secrets
- [ ] Business logic is separated from route handlers
- [ ] Rate limiting is considered for sensitive routes
- [ ] Logging is implemented for errors and important events
- [ ] API follows consistent response structure

---

## 🔗 Related Documentation

- [Data Fetching Rules](./data_fetching.md)
- [Code Style Rules](./code_style.md)
- [Testing Rules](./testing.md)
- [Performance Rules](./performance.md)