# Product Dashboard

A modern, responsive TypeScript React application for browsing and managing products with advanced filtering, search capabilities, and favorites management.

## 🚀 Features

- **Product Display**: Responsive grid layout showcasing products from the Fakestore API
- **Search & Filter**: Real-time text search and category-based filtering
- **Favorites System**: Like/unlike products with persistent local storage
- **Accessibility**: Full keyboard navigation and ARIA attributes
- **State Management**: React Context with custom hooks
- **Type Safety**: Comprehensive TypeScript implementation
- **Error Handling**: Robust error boundaries and loading states
- **Unit Tests**: Component testing with Jest and React Testing Library

## 🛠️ Tech Stack

### Core Technologies
- **React 19.0** - UI library with hooks and functional components
- **TypeScript** - Type safety and enhanced developer experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Modern icon library

### State Management
- **React Context API** - Global state management
- **Custom Hooks** - Reusable logic encapsulation


### Testing
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities
- **@testing-library/jest-dom** - Additional Jest matchers


##  Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── loading-spinner.tsx
│   │   ├── error-message.tsx
│   │   └── star-rating.tsx
│   ├── product/            # Product-specific components
│   │   └── product-card.tsx
│   ├── filters/            # Filter components
│   │   ├── search-bar.tsx
│   │   └── category-filter.tsx
│   └── layout/             # Layout components
│       └── header.tsx
├── context/                # React Context providers
│   ├── product-context.tsx
│   └── index.ts
├── hooks/                  # Custom React hooks
│   ├── use-product.ts
│   └── use-favorites.ts
├── services/               # API services
│   └── api.ts
├── utils/                  # Utility functions
│   └── storage.ts
├── types/                  # TypeScript type definitions
│   ├── product.ts
│   ├── api.ts
│   └── index.ts
├── pages/                  # Page components
│   └── product-dashboard.tsx
├── styles/                 # Global styles
│   └── index.css
├── App.tsx
├── App.test.tsx
└── index.tsx
```

## 🏗️ Architecture Decisions

### 1. **TypeScript-First Approach**
- **Why**: Type safety, better IDE support, and maintainability
- **Implementation**: Strict TypeScript configuration with comprehensive type definitions
- **Benefits**: Catches errors at compile time, enhances code documentation

### 2. **React Context + Custom Hooks**
- **Why**: Avoids prop drilling while keeping components clean
- **Implementation**: `ProductContext` for global state, custom hooks for specific logic
- **Benefits**: Reusable logic, better separation of concerns

### 3. **Component Architecture**
- **Why**: Modular, testable, and maintainable codebase
- **Implementation**: Feature-based folder structure with clear boundaries
- **Benefits**: Easy to locate, modify, and test components

### 4. **Service Layer Pattern**
- **Why**: Separates API logic from UI components
- **Implementation**: Centralized API service with error handling
- **Benefits**: Easier to mock for testing, consistent error handling

### 5. **Storage Abstraction**
- **Why**: Flexibility to switch storage mechanisms
- **Implementation**: Interface-based storage service
- **Benefits**: Easy to test, can fallback to different storage types

### 6. **Accessibility-First Design**
- **Why**: Inclusive user experience
- **Implementation**: ARIA attributes, keyboard navigation, semantic HTML
- **Benefits**: Better UX for all users, SEO benefits

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Polymath0033/parousia-test.git
cd parousia-test
```

2. **Install dependencies**
```bash
bun install
```

3. **Start the development server**
```bash
bun start
```bash
npm start
```

4. **Open your browser**
```bash
Navigate to `http://localhost:5173`
```bash
Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Start development server
bun start

# Run tests
bun test

# Run tests with coverage
bun test --coverage

# Build for production
bun build



## 🧪 Testing

### Running Tests
```bash
# Run all tests
bun test

# Run tests in watch mode
bun test -- --watch

# Run tests with coverage report
bun test -- --coverage
```

### Test Structure
- **Unit Tests**: Individual component testing
- **Integration Tests**: Context and hook testing
- **Accessibility Tests**: ARIA and keyboard navigation
- **Error Handling Tests**: Error boundary and API failure scenarios



## 📱 Features Deep Dive

### Product Display
- **Grid Layout**: Responsive design that adapts to screen size
- **Product Cards**: Clean, consistent design with hover effects
- **Image Optimization**: Lazy loading and proper aspect ratios
- **Price Formatting**: Internationalized currency display

### Search & Filtering
- **Real-time Search**: Instant filtering as you type
- **Category Filter**: Dropdown with all available categories
- **Combined Filters**: Search and category filters work together
- **Filter Indicators**: Clear indication of active filters

### Favorites System
- **Toggle Favorites**: Click heart icon to add/remove favorites
- **Persistent Storage**: Favorites saved to localStorage
- **Visual Feedback**: Different heart states for favorited items
- **Favorites Counter**: Header shows total favorite count

### Accessibility Features
- **Keyboard Navigation**: Full keyboard support for all interactions
- **ARIA Labels**: Comprehensive labeling for screen readers
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper HTML structure for assistive technologies

## 🔧 Configuration

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "es5",
    "jsx": "react-jsx",
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"],
      "@/components/*": ["components/*"],
      "@/hooks/*": ["hooks/*"]
    }
  }
}
```

##  Performance Optimizations

### React Optimizations
- **useMemo**: Memoized filtered products calculation
- **useCallback**: Memoized event handlers
- **Lazy Loading**: Images loaded on demand
- **Component Splitting**: Logical component boundaries

### Bundle Optimizations
- **Tree Shaking**: Unused code elimination
- **Code Splitting**: Dynamic imports where beneficial
- **Asset Optimization**: Optimized images and fonts



**Built with using React, TypeScript, and modern web technologies**