# Chiaroscuro District

A modern e-commerce platform for artistic fashion, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Renaissance-inspired fashion collections
- 🛒 Full shopping cart functionality
- 💳 Stripe payment integration
- 🔍 Real-time product search
- ❤️ Favorites/wishlist system
- 📱 Fully responsive design
- 🌱 Sustainability focus
- 📝 Blog/journal system

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Add your Stripe keys to `.env`:
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
```

4. Start development server:
```bash
npm run dev
```

## Stripe Integration

To set up Stripe payments:

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Add your publishable key to the environment variables
4. For production, use live keys instead of test keys

## Deployment

The site is configured for Netlify deployment with automatic redirects for SPA routing.

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Payments**: Stripe
- **Routing**: React Router
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify
