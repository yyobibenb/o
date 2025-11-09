# Bitcoin Core ($BTC) Memecoin Landing Page

## Overview

This is a satirical, pixel-art styled memecoin landing page for "Bitcoin Core" - a playful parody cryptocurrency website. The project embraces retro 8-bit gaming aesthetics combined with modern meme culture to create an intentionally humorous and over-the-top cryptocurrency landing page. The site features full-page scrolling sections with game-like transitions, pixel art graphics, and tongue-in-cheek content that satirizes cryptocurrency culture while maintaining professional execution.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Styling System**: 
- Tailwind CSS for utility-first styling with custom pixel-art theme
- Custom CSS variables for theming (light/dark mode support)
- Pixel-perfect retro gaming aesthetic with 8-bit fonts ('Press Start 2P' for headings, 'VT323' for body text)
- Custom utility classes for elevation effects (`hover-elevate`, `active-elevate-2`)

**UI Component Library**: 
- shadcn/ui components (Radix UI primitives) configured in "new-york" style
- Extensive component library including buttons, cards, dialogs, forms, navigation, and more
- All components support the custom pixel-art theme through Tailwind integration

**Routing**: 
- wouter for lightweight client-side routing
- Single-page application with section-based navigation

**Page Structure**:
- Full-viewport scrolling experience with keyboard and mouse wheel navigation
- Six main sections: Hero, "What Is", Features, Tokenomics, Roadmap (orbital style), and Footer
- Scroll animations with 1-second cooldown between transitions
- Each section is full-height (100vh) with overflow handling

**Design Philosophy**:
- Intentionally playful and satirical
- Pixel-art graphics with retro gaming aesthetics
- Gradient backgrounds mimicking sky/game environments
- Animated elements (floating coins, bouncing logos, parallax clouds)
- "Game level" metaphor for section transitions
- High contrast, bold typography with text shadows for depth

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**API Design**: 
- RESTful API structure with routes prefixed with `/api`
- Request/response logging middleware with duration tracking
- JSON body parsing with raw body access for webhooks
- Currently minimal API surface - storage interface prepared for future CRUD operations

**Development Server**: 
- Vite middleware integration for HMR (Hot Module Reload) in development
- Custom error overlay for runtime errors
- Separate production and development build processes

**Session Management**: 
- Infrastructure prepared for PostgreSQL session storage via `connect-pg-simple`
- Session handling not currently active but configured

### State Management

**Client State**: 
- React Query (@tanstack/react-query) for server state management
- Custom query client with retry disabled and infinite stale time
- Credential-based requests for authentication support

**Local State**: 
- React hooks (useState, useEffect, useRef) for component state
- Custom hooks for mobile detection (`useIsMobile`)
- Toast notifications system for user feedback

### Database Layer

**ORM**: Drizzle ORM configured for PostgreSQL with Neon serverless driver.

**Schema**: 
- Minimal user table with username/password authentication
- UUID primary keys using PostgreSQL's `gen_random_uuid()`
- Zod schema validation integrated via drizzle-zod

**Migration Strategy**: 
- Drizzle Kit for schema management
- Migrations output to `/migrations` directory
- Push-based workflow (`db:push` script)

**Current Implementation**: 
- In-memory storage implementation (`MemStorage`) for development
- Interface-based storage abstraction (`IStorage`) allowing easy swap to database implementation
- User CRUD operations: `getUser`, `getUserByUsername`, `createUser`

### Build System

**Build Tools**:
- Vite for frontend bundling with React plugin
- esbuild for backend bundling (server code)
- TypeScript compilation checking via `tsc`

**Build Output**:
- Frontend: `dist/public` directory
- Backend: `dist/index.js` ESM bundle
- Separate build configurations for client and server

**Module System**: 
- ESM (ES Modules) throughout the application
- Path aliases configured: `@/*` for client code, `@shared/*` for shared schemas, `@assets/*` for images

### Asset Management

**Image Assets**: 
- Pixel art graphics stored in `attached_assets/generated_images/`
- Key graphics: Bitcoin icons, clouds, grass tiles, flags, treasure chests, stars
- Images use `imageRendering: 'pixelated'` CSS for crisp pixel art display
- Vite alias `@assets` for clean import paths

**Font Loading**: 
- Google Fonts: 'Press Start 2P' (display/headings), 'VT323' (body text)
- Preconnect to fonts.googleapis.com for performance

## External Dependencies

### UI and Styling
- **Radix UI**: Complete suite of accessible, unstyled React components (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **class-variance-authority**: Type-safe variant management for components
- **clsx & tailwind-merge**: Conditional className utilities

### State and Data Management
- **@tanstack/react-query**: Server state management and data fetching
- **react-hook-form**: Form state management with @hookform/resolvers for validation
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod

### Database
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **@neondatabase/serverless**: Neon serverless PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store for Express

### Routing and Navigation
- **wouter**: Minimalist routing library for React
- **embla-carousel-react**: Carousel component library

### Development Tools
- **Vite**: Build tool and dev server
- **@vitejs/plugin-react**: React plugin for Vite
- **@replit/vite-plugin-***: Replit-specific development tools (runtime error modal, cartographer, dev banner)
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for production builds

### Utilities
- **date-fns**: Date utility library
- **nanoid**: Unique ID generation
- **lucide-react**: Icon library

### Fonts
- **Google Fonts**: 
  - Press Start 2P: 8-bit style display font
  - VT323: Monospace pixel font for body text

### Design Inspiration Sources
According to design guidelines, the project draws inspiration from:
- memecoin.org
- Major memecoin websites (Shiba Inu, Dogecoin)
- Modern meme culture and crypto Twitter aesthetics
- Retro 8-bit gaming (Mario, arcade games)
- CRT monitor effects and pixel art