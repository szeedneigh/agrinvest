# State Management Rules

> **Project**: AgriInvest  
> **Category**: State Management & Data Flow  
> **Last Updated**: September 2025

## Overview

This document defines the state management patterns and rules for the AgriInvest project. Proper state management ensures predictable data flow, maintainable code, and optimal performance across the application.

---

## 🚨 Critical Rules (Must Follow)

### 1. React Built-in State First
- **Rule**: Use React's `useState` and `useReducer` for local component state before external libraries
- **Benefits**: Simpler code, better performance, smaller bundle size
- **Example**:
  ```tsx
  // ✅ Correct - local state
  function CropForm() {
    const [formData, setFormData] = useState({
      name: '',
      type: '',
      quantity: 0
    });
    
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // Handle form submission
    };
    
    return (
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
    );
  }
  
  // ❌ Wrong - unnecessary global state for form
  const useFormStore = create((set) => ({
    formData: {},
    setFormData: (data) => set({ formData: data })
  }));
  ```

### 2. Server Components by Default
- **Rule**: Use Server Components as default; switch to Client Components only when interactivity is required
- **Interactivity Needs**: Event handlers, `useState`, `useEffect`, browser APIs
- **Benefits**: Reduced JavaScript bundle, better performance
- **Example**:
  ```tsx
  // ✅ Server Component (default)
  async function CropDashboard() {
    const crops = await fetchCrops();
    return (
      <div>
        <CropList crops={crops} />
        <InteractiveCropChart initialData={crops} />
      </div>
    );
  }
  
  // ✅ Client Component (when needed)
  'use client';
  function InteractiveCropChart({ initialData }: { initialData: Crop[] }) {
    const [selectedCrop, setSelectedCrop] = useState(initialData[0]);
    const [chartType, setChartType] = useState('line');
    
    return (
      <div>
        <ChartControls onTypeChange={setChartType} />
        <Chart data={selectedCrop} type={chartType} />
      </div>
    );
  }
  ```

### 3. Separate UI State from Server State
- **Rule**: Keep UI state (modals, dropdowns) separate from server state (fetched data)
- **UI State**: Local to components, transient, doesn't need persistence
- **Server State**: Fetched from APIs, needs caching, error handling, synchronization
- **Example**:
  ```tsx
  // ✅ Correct separation
  function CropManager() {
    // UI state - local to component
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('overview');
    
    // Server state - managed by SWR/React Query
    const { data: crops, error, mutate } = useSWR('/api/crops', fetcher);
    
    return (
      <div>
        <CropList crops={crops} onEdit={() => setIsModalOpen(true)} />
        {isModalOpen && (
          <EditCropModal 
            onClose={() => setIsModalOpen(false)}
            onSave={() => mutate()} // Revalidate server data
          />
        )}
      </div>
    );
  }
  ```

### 4. Immutable State Updates
- **Rule**: Always treat state as immutable; never mutate state directly
- **Use**: `setState` or immutable update patterns
- **Example**:
  ```tsx
  // ✅ Correct - immutable updates
  const [crops, setCrops] = useState<Crop[]>([]);
  
  // Add new crop
  const addCrop = (newCrop: Crop) => {
    setCrops(prev => [...prev, newCrop]);
  };
  
  // Update existing crop
  const updateCrop = (id: string, updates: Partial<Crop>) => {
    setCrops(prev => 
      prev.map(crop => 
        crop.id === id ? { ...crop, ...updates } : crop
      )
    );
  };
  
  // Remove crop
  const removeCrop = (id: string) => {
    setCrops(prev => prev.filter(crop => crop.id !== id));
  };
  
  // ❌ Wrong - direct mutation
  const addCropWrong = (newCrop: Crop) => {
    crops.push(newCrop); // Direct mutation
    setCrops(crops);
  };
  ```

### 5. Async State with Data Fetching Libraries
- **Rule**: For async server state, use dedicated data fetching strategies instead of manual state management
- **Recommended**: Next.js fetch API, React Query, SWR
- **Avoid**: Manual loading/error state in global stores for server data
- **Example**:
  ```tsx
  // ✅ Correct - dedicated data fetching
  import useSWR from 'swr';
  
  function CropPrices() {
    const { data, error, isLoading } = useSWR(
      '/api/crop-prices',
      fetcher,
      { refreshInterval: 30000 } // Auto-refresh every 30s
    );
    
    if (error) return <div>Failed to load prices</div>;
    if (isLoading) return <div>Loading...</div>;
    
    return <PriceTable data={data} />;
  }
  
  // ❌ Wrong - manual async state management
  const usePriceStore = create((set) => ({
    prices: [],
    loading: false,
    error: null,
    fetchPrices: async () => {
      set({ loading: true });
      try {
        const response = await fetch('/api/crop-prices');
        const prices = await response.json();
        set({ prices, loading: false });
      } catch (error) {
        set({ error, loading: false });
      }
    }
  }));
  ```

---

## ⚠️ Important Rules (Recommended)

### 6. Global State for Lightweight Data Only
- **Rule**: Use React Context only for lightweight global state
- **Good Use Cases**: Theme, user authentication, app-wide settings
- **Avoid**: Complex business logic, frequently changing data
- **Example**:
  ```tsx
  // ✅ Good - lightweight auth state
  const AuthContext = createContext<{
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
  } | null>(null);
  
  export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    
    const login = async (email: string, password: string) => {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      const userData = await response.json();
      setUser(userData);
    };
    
    const logout = () => {
      setUser(null);
      // Clear auth tokens
    };
    
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }
  ```

### 7. Avoid Prop Drilling
- **Rule**: If props are passed more than 3 levels deep, refactor using Context or custom hooks
- **Solutions**: React Context, custom hooks, component composition
- **Example**:
  ```tsx
  // ❌ Prop drilling (avoid)
  function App() {
    const [user, setUser] = useState(null);
    return <Dashboard user={user} setUser={setUser} />;
  }
  
  function Dashboard({ user, setUser }) {
    return <UserPanel user={user} setUser={setUser} />;
  }
  
  function UserPanel({ user, setUser }) {
    return <UserProfile user={user} setUser={setUser} />;
  }
  
  function UserProfile({ user, setUser }) {
    // Finally using the props
  }
  
  // ✅ Context solution (better)
  function App() {
    return (
      <AuthProvider>
        <Dashboard />
      </AuthProvider>
    );
  }
  
  function UserProfile() {
    const { user, setUser } = useAuth(); // Custom hook
    // Use state directly
  }
  ```

### 8. Custom Hooks for Reusable Logic
- **Rule**: Encapsulate reusable state logic in custom hooks in `src/hooks/`
- **Naming**: Must be prefixed with 'use'
- **Example**:
  ```tsx
  // hooks/useCropFilters.ts
  export function useCropFilters() {
    const [filters, setFilters] = useState({
      type: '',
      season: '',
      priceRange: [0, 1000]
    });
    
    const updateFilter = (key: string, value: any) => {
      setFilters(prev => ({ ...prev, [key]: value }));
    };
    
    const clearFilters = () => {
      setFilters({
        type: '',
        season: '',
        priceRange: [0, 1000]
      });
    };
    
    return { filters, updateFilter, clearFilters };
  }
  
  // Usage in components
  function CropList() {
    const { filters, updateFilter, clearFilters } = useCropFilters();
    
    return (
      <div>
        <FilterPanel 
          filters={filters}
          onFilterChange={updateFilter}
          onClear={clearFilters}
        />
        <CropGrid filters={filters} />
      </div>
    );
  }
  ```

### 9. Minimal Global Stores
- **Rule**: Avoid multiple redundant global stores
- **Best Practice**: Consolidate related logic into one store per domain
- **Example**:
  ```tsx
  // ✅ Domain-based stores
  
  // stores/userStore.ts
  export const useUserStore = create<UserState>((set) => ({
    profile: null,
    preferences: {},
    updateProfile: (data) => set(state => ({ 
      ...state, 
      profile: { ...state.profile, ...data } 
    })),
    updatePreferences: (prefs) => set(state => ({
      ...state,
      preferences: { ...state.preferences, ...prefs }
    }))
  }));
  
  // stores/cropStore.ts  
  export const useCropStore = create<CropState>((set) => ({
    selectedCrops: [],
    favorites: [],
    addToFavorites: (cropId) => set(state => ({
      ...state,
      favorites: [...state.favorites, cropId]
    }))
  }));
  
  // ❌ Wrong - fragmented stores
  export const useProfileStore = create(...);
  export const usePreferencesStore = create(...);
  export const useUserSettingsStore = create(...);
  export const useUserDataStore = create(...);
  ```

---

## 🔄 State Flow Patterns

### Data Flow Architecture
```
Server State (API) → SWR/React Query → Component
                                           ↓
UI State (Local) → useState/useReducer → Component
                                           ↓
Global State → Context/Zustand → Multiple Components
```

### Component State Hierarchy
1. **Local State**: Component-specific, temporary
2. **Shared State**: Between related components (Context)
3. **Global State**: App-wide, persistent
4. **Server State**: API data (SWR/React Query)

---

## 📋 State Management Checklist

Before implementing state:

- [ ] Determine if state is local, shared, or global
- [ ] Choose appropriate state management solution
- [ ] Separate UI state from server state
- [ ] Implement immutable update patterns
- [ ] Consider custom hooks for reusable logic
- [ ] Avoid prop drilling beyond 3 levels
- [ ] Use proper data fetching for server state

---

## 🛠️ Recommended Libraries

### State Management
- **Local State**: React `useState`, `useReducer`
- **Global State**: Zustand, React Context
- **Server State**: SWR, React Query
- **Forms**: React Hook Form

### Setup Examples
```bash
# SWR for server state
npm install swr

# Zustand for global state
npm install zustand

# React Hook Form for forms
npm install react-hook-form
```

---

## 🔗 Related Documentation

- [Data Fetching Rules](./data_fetching.md)
- [Code Style Rules](./code_style.md)
- [Performance Rules](./performance.md)
- [UI Styling Rules](./ui_styling.md)