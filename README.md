# Learning App

A modern React 19 application built with Vite, Tailwind CSS 4, and shadcn/ui. This project serves as a template or a base for building feature-rich web applications with a focus on developer experience and performance.

## 🚀 Features

- **Responsive Sidebar**: A collapsible sidebar using Radix UI and Tailwind CSS for seamless navigation.
- **Dynamic Breadcrumbs**: Automatically generated breadcrumbs that adapt based on the current route.
- **Geolocation Integration**: Integrated IP-based geolocation using `ipapi.co`.
- **Prayer Times API**: Pre-configured API integration for fetching prayer times.
- **Modern UI Components**: Styled with Tailwind CSS 4 and built on top of Radix UI primitives (shadcn/ui).
- **TypeScript Support**: Full type safety across the entire application.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Project Structure

```text
src/
├── apis/       # API integration services
├── components/ # Reusable UI components (shadcn/ui)
├── hooks/      # Custom React hooks
├── layouts/    # Page layouts (Sidebar, Footer, etc.)
├── lib/        # Utility functions and configurations
├── pages/      # Application pages/screens
└── routes/     # Routing configuration
```

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- `npm run dev`: Starts the development server at `http://localhost:5173`.
- `npm run build`: Compiles the application for production.
- `npm run lint`: Performs linting checks using ESLint.
- `npm run preview`: Serves the production build locally for testing.

## 📄 License

This project is licensed under the MIT License.
