# React + TypeScript + Vite + Clerk Auth on Cloudflare Pages and workers

This template provides a minimal setup to deploy a React app with Clerk Auth preconfigured on Cloudflare Pages and workers.

Step 1. 
Git clone this repo

Step 2.
Create a wrangler.toml file in the root of the project and add the following:

```
name = "your-app-name"
type = "javascript"
workers_dev = true

[vars]
VITE_CLERK_PUBLISHABLE_KEY = "your-clerk-publishable-key"
```

Step 3.

Create a .env.local file in the root of the project and add the following:

```
VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
```

Step 4.

Run npm install

Step 5.

Run npm run dev

Step 6.

Create your first user.

