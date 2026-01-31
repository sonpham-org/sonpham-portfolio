# Son Pham Portfolio

Personal portfolio and blog website for Son Pham - AI Engineer, Researcher & Builder.

## Features

- 🏠 Landing page with project showcase
- 📝 Blog system with MDX support
- 🎨 Responsive design with Tailwind CSS
- 💰 Google AdSense integration
- 📊 Google Analytics support
- ⚡ Built with Next.js 15 and TypeScript

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Blog**: MDX with gray-matter
- **Deployment**: Railway
- **Analytics**: Google Analytics
- **Monetization**: Google AdSense

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Writing Blog Posts

Create new MDX files in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2026-01-30"
excerpt: "A brief description"
tags: ["tag1", "tag2"]
---

# Your content here
```

## Deployment

### Railway Deployment

1. Create a new project on Railway
2. Connect your GitHub repository
3. Add environment variables:
   - `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
   - `NEXT_PUBLIC_GA_ID`
4. Deploy!

Railway will automatically detect Next.js and deploy.

### Custom Domain

1. In Railway project settings, add your domain
2. Update DNS records at your domain registrar
3. Wait for SSL certificate provisioning

## Environment Variables

- `NEXT_PUBLIC_ADSENSE_CLIENT_ID`: Google AdSense client ID
- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID

## Project Structure

```
sonpham-portfolio/
├── app/                 # Next.js app directory
│   ├── blog/           # Blog pages
│   ├── projects/       # Projects showcase
│   └── about/          # About page
├── components/         # React components
├── content/            # Blog posts (MDX)
├── lib/                # Utility functions
└── public/             # Static assets
```

## Multi-Project Architecture

This site is part of a larger ecosystem:

- **Main Site** (sonpham.net): Portfolio & Blog
- **ARC Creator** (arc.sonpham.net): ARC puzzle creator
- **Wealth of Agents** (agents.sonpham.net): Agent simulation

Each project deploys as a separate Railway service with its own subdomain.

## License

MIT

## Contact

- Website: [sonpham.net](https://sonpham.net)
- GitHub: [@sonpham-org](https://github.com/sonpham-org)
- Email: contact@sonpham.net


Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
