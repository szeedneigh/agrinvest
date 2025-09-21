# Data Fetching & API Integration

> **Project**: AgriInvest  
> **Category**: Data Management  
> **Last Updated**: September 2025

## Overview

This document outlines the standards and best practices for data fetching, API integration, and data management in the AgriInvest project. These rules ensure optimal performance, reliability, and maintainability of data operations.

---

## 🚨 Critical Rules (Must Follow)

### 1. Server Components for Data Fetching
- **Rule**: Perform data fetching in Server Components by default
- **Exception**: Client Components should fetch data only when absolutely required (user interactions, real-time updates)
- **Benefits**: Better performance, SEO, and reduced client-side bundle
- **Example**:
  ```tsx
  // ✅ Correct - Server Component
  async function UserProfile({ userId }: { userId: string }) {
    const user = await fetchUser(userId); // Runs on server
    return <div>{user.name}</div>;
  }
  
  // ❌ Wrong - Unnecessary client-side fetching
  'use client';
  function UserProfile({ userId }: { userId: string }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
      fetchUser(userId).then(setUser);
    }, [userId]);
    return <div>{user?.name}</div>;
  }
  ```

### 2. Explicit Caching Strategy
- **Rule**: Every fetch call must explicitly define caching behavior
- **Options**:
  - `cache: 'no-store'` → Real-time data (no caching)
  - `next: { revalidate: <seconds> }` → ISR (revalidate at interval)
  - Default → Cache indefinitely (for static data)
- **Example**:
  ```typescript
  // Real-time stock prices
  const prices = await fetch('/api/prices', { 
    cache: 'no-store' 
  });
  
  // Market data updated every 5 minutes
  const marketData = await fetch('/api/market', { 
    next: { revalidate: 300 } 
  });
  
  // Static crop information
  const cropInfo = await fetch('/api/crops'); // Cached indefinitely
  ```

### 3. Error Handling
- **Rule**: Always handle errors in fetch requests
- **Never assume**: API calls will succeed without validation
- **Implementation**:
  ```typescript
  async function fetchUserData(userId: string) {
    try {
      const response = await fetch(`/api/users/${userId}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching user:', error);
      // Return fallback data or rethrow based on context
      return null;
    }
  }
  ```

### 4. Data Validation
- **Rule**: Validate all incoming data with Zod or schema validation
- **Apply to**: Both server-side and client-side data
- **Example**:
  ```typescript
  import { z } from 'zod';
  
  const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    role: z.enum(['admin', 'user', 'investor'])
  });
  
  async function fetchUser(id: string) {
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    
    // Validate before using
    return UserSchema.parse(data);
  }
  ```

### 5. Authentication-Aware Fetching
- **Rule**: Handle authentication securely for protected endpoints
- **Methods**: Cookies, headers, session tokens
- **Security**: Never expose secrets in client-side fetch calls
- **Example**:
  ```typescript
  // Server-side (secure)
  async function fetchPrivateData() {
    const token = cookies().get('auth-token')?.value;
    
    return fetch('/api/private-data', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
  
  // Client-side (cookies only)
  async function fetchUserProfile() {
    return fetch('/api/profile', {
      credentials: 'include' // Includes cookies
    });
  }
  ```

---

## ⚠️ Important Rules (Recommended)

### 6. Use Native Fetch API
- **Rule**: Use built-in fetch API instead of third-party clients
- **Exception**: Use libraries like Axios only when advanced features are needed (interceptors, retries)
- **Benefits**: Smaller bundle size, better Next.js integration
- **Example**:
  ```typescript
  // ✅ Preferred
  const data = await fetch('/api/data').then(res => res.json());
  
  // ❌ Avoid unless necessary
  import axios from 'axios';
  const { data } = await axios.get('/api/data');
  ```

### 7. Client-Side State Management
- **Rule**: For real-time or interactive client-side data, use SWR or React Query
- **Benefits**: Caching, revalidation, error handling, loading states
- **Example**:
  ```tsx
  import useSWR from 'swr';
  
  function LivePrices() {
    const { data, error, isLoading } = useSWR(
      '/api/live-prices',
      fetcher,
      { refreshInterval: 1000 } // Update every second
    );
    
    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    
    return <div>{data.prices}</div>;
  }
  ```

### 8. Avoid Overfetching
- **Rule**: Only fetch the data needed for the component
- **Implementation**: Design API routes to return minimal required payloads
- **Example**:
  ```typescript
  // ✅ Good - specific data
  const userProfile = await fetch('/api/users/123?fields=name,email');
  
  // ❌ Bad - fetching everything
  const fullUser = await fetch('/api/users/123'); // Returns 50+ fields
  ```

### 9. Centralize API Calls
- **Rule**: Abstract fetch logic into `lib/api.ts` or service files
- **Benefits**: Consistency, reusability, easier testing
- **Structure**:
  ```typescript
  // lib/api/users.ts
  export const userApi = {
    getUser: (id: string) => fetch(`/api/users/${id}`),
    updateUser: (id: string, data: Partial<User>) => 
      fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data)
      })
  };
  
  // components/UserProfile.tsx
  import { userApi } from '@/lib/api/users';
  
  async function UserProfile({ userId }: { userId: string }) {
    const user = await userApi.getUser(userId);
    return <div>{user.name}</div>;
  }
  ```

### 10. Static Data Organization
- **Rule**: Static datasets should live in `src/data/` folder
- **Use Cases**: Constants, mock data, configuration
- **Example**:
  ```typescript
  // src/data/crops.ts
  export const CROP_TYPES = [
    { id: 'wheat', name: 'Wheat', season: 'winter' },
    { id: 'corn', name: 'Corn', season: 'summer' }
  ];
  
  // Don't fetch this from an API
  ```

---

## 🔄 Data Flow Patterns

### Server Component → Client Component
```tsx
// Server Component (data fetching)
async function CropDashboard() {
  const crops = await fetchCrops();
  
  return (
    <div>
      <CropList crops={crops} />
      <InteractiveCropChart initialData={crops} />
    </div>
  );
}

// Client Component (interaction)
'use client';
function InteractiveCropChart({ initialData }: { initialData: Crop[] }) {
  const [selectedCrop, setSelectedCrop] = useState(initialData[0]);
  // Handle user interactions
}
```

### API Route → Service → Database
```typescript
// app/api/crops/route.ts
import { cropService } from '@/lib/services/cropService';

export async function GET() {
  const crops = await cropService.getAllCrops();
  return Response.json({ success: true, data: crops });
}

// lib/services/cropService.ts
import { db } from '@/lib/database';

export const cropService = {
  getAllCrops: () => db.crop.findMany(),
  getCropById: (id: string) => db.crop.findUnique({ where: { id } })
};
```

---

## 📋 Data Fetching Checklist

Before implementing data fetching:

- [ ] Determine if Server Component or Client Component is appropriate
- [ ] Define explicit caching strategy for the data
- [ ] Implement proper error handling
- [ ] Add data validation with Zod schema
- [ ] Consider authentication requirements
- [ ] Avoid overfetching unnecessary data
- [ ] Use centralized API functions
- [ ] Handle loading and error states
- [ ] Consider static data alternatives

---

## 🛠️ Tools & Libraries

### Recommended Libraries
- **Zod**: Schema validation
- **SWR** or **React Query**: Client-side data fetching
- **Date-fns**: Date manipulation
- **Lodash**: Data transformation utilities

### Fetch Helpers
```typescript
// lib/api/base.ts
export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export async function apiRequest<T>(
  url: string, 
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    ...options
  });
  
  if (!response.ok) {
    throw new ApiError(response.status, await response.text());
  }
  
  return response.json();
}
```

---

## 🔗 Related Documentation

- [API Backend Rules](./api_backend.md)
- [Performance Rules](./performance.md)
- [State Management Rules](./state_management.md)
- [Testing Rules](./testing.md)