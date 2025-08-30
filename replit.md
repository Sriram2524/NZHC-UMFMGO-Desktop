# Manuka Honey E-commerce Application

## Overview

This is a full-stack e-commerce application for selling Manuka honey products. The application features a modern product display interface with image galleries, flavor profiles, and product variant selection. Built with React frontend and Express backend, it uses PostgreSQL for data persistence and includes a comprehensive UI component library based on shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with a simple route structure
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom design system variables and shadcn/ui components
- **Component Library**: Comprehensive UI components from Radix UI primitives wrapped with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Structure**: RESTful API with routes prefixed with `/api`
- **Development Setup**: Hot reloading with Vite integration for seamless development experience
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Logging**: Custom request logging for API endpoints with timing and response data

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Schema Definition**: Shared schema definitions using Drizzle with Zod validation

### Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Query Configuration**: Custom query functions with 401 handling strategies
- **Security**: Cookie-based authentication with credential inclusion for API requests

### External Dependencies
- **Database Provider**: Neon Database serverless PostgreSQL
- **UI Components**: Radix UI primitives for accessible component foundations
- **Validation**: Zod for runtime type validation and schema generation
- **Styling Tools**: class-variance-authority for component variant management
- **Date Handling**: date-fns for date manipulation and formatting
- **Development Tools**: Replit-specific plugins for development environment integration

The application follows a modern full-stack architecture with clear separation between client and server code, shared type definitions, and a scalable component-based UI system. The database layer is designed for production use with PostgreSQL while maintaining development flexibility through the memory storage fallback.