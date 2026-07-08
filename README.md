# FreshMart E-Commerce React Application

A complete responsive modern Small Shop/Grocery Store website built with React.js, Tailwind CSS, Vite, React Router, and Framer Motion. 

## Features
- **Modern UI/UX**: Premium color palette, glassmorphism elements, and professional typography.
- **Dark/Light Mode**: Full theme support with Tailwind's dark class integration.
- **Smooth Animations**: Powered by Framer Motion for a fluid experience.
- **State Management**: Context-based global cart state with LocalStorage persistence.
- **Routing**: Client-side routing with React Router for instant transitions.
- **Responsive**: Fully optimized for mobile, tablet, and desktop screens.
- **Toasts**: Non-intrusive beautiful toast notifications via `react-hot-toast`.
- **Checkout Flow**: Complete interactive cart, checkout form, and order summary logic.
- **Authentication Pages**: Clean and polished Login/Register flows.

## Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM v6
- **Notifications**: React Hot Toast

## Installation Steps
Follow these instructions to run the project locally.

1. **Clone or Download the Repository**
2. **Navigate to the directory**:
   ```bash
   cd ecommerce-react
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start Development Server**:
   ```bash
   npm run dev
   ```
5. **Open in Browser**:
   Open `http://localhost:5173` (or the port shown in your terminal) to view the application in action.

## Project Structure
- `src/components/common` - Reusable layout elements like Navbar and Footer.
- `src/context` - React Context providers for Theme and Cart.
- `src/data` - Local mock data simulating a database of products.
- `src/pages` - Organized route components for every major app view.
