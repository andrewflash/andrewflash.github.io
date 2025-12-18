# Portfolio Website

This repository contains the source code for my personal portfolio website, built with modern web technologies to showcase my projects, research, and professional background.

## Features

-   **Responsive Design**: Fully responsive layout that looks great on all devices.
-   **Smooth Navigation**: Integrated `react-scroll` for seamless navigation between sections.
-   **Interactive UI**: Animations powered by `framer-motion` for an engaging user experience.
-   **Modern Icons**: Using `lucide-react` for clean and consistent iconography.
-   **Performance**: Built with Vite for lightning-fast development and optimized production builds.

## Tech Stack

-   **Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: CSS (Variables & Global Styles)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

-   `src/components`: Reusable UI components (e.g., Navbar).
-   `src/sections`: Main content sections:
    -   **Hero**: Introduction and landing view.
    -   **About**: Personal bio and background.
    -   **Research**: Academic and professional research highlights.
    -   **Projects**: Showcase of personal and work projects.
    -   **Contact**: Information for getting in touch.
-   `src/styles`: Global and variable CSS files.

## Getting Started

### Prerequisites

-   Node.js (LTS version recommended)
-   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/andrewflash/andrewflash.github.io.git
    cd andrewflash.github.io
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

## Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run preview`: Preview the production build locally.
-   `npm run lint`: Runs ESLint to check for code quality issues.
