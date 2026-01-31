# Quick Start Guide

Get your portfolio site up and running in minutes!

## ✅ What's Been Built

You now have a complete portfolio website with:

- 🏠 **Landing Page**: Hero section, featured projects, call-to-actions
- 📝 **Blog System**: MDX-powered blog with 2 sample posts
- 🎨 **Project Showcase**: Display all your projects
- 📄 **About Page**: Professional bio and tech stack
- 💰 **Ad Integration**: Google AdSense placeholders ready
- 📊 **Analytics Ready**: Google Analytics integration
- 🚀 **Railway Config**: Production deployment ready

## 🎉 View It Now

Your site is running at: **http://localhost:3001**

Open that URL in your browser to see your new portfolio!

## 📁 Project Structure

```
sonpham-portfolio/
├── app/                    # Pages
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog section
│   ├── projects/          # Projects showcase
│   └── about/             # About page
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   ├── BlogPostCard.tsx  # Blog post preview
│   ├── ProjectCard.tsx   # Project display
│   └── AdBanner.tsx      # AdSense integration
├── content/blog/         # Blog posts (MDX)
│   ├── 2026-01-30-welcome-to-my-blog.mdx
│   └── 2026-01-30-railway-architecture.mdx
└── lib/                  # Utilities
    └── blog.ts           # Blog post loader
```

## ✍️ Writing Blog Posts

Create new blog posts in `content/blog/`:

```bash
# Create a new post
cd /home/son/Desktop/GitHub/sonpham-portfolio/content/blog
nano 2026-01-31-my-new-post.mdx
```

Template:
```markdown
---
title: "Your Amazing Title"
date: "2026-01-31"
excerpt: "A compelling description that draws readers in"
tags: ["AI", "coding", "learning"]
---

# Your Content Here

Write your blog post using Markdown!

## Subheadings work

- Bullet points
- Are supported

Code blocks too:

\`\`\`python
print("Hello, World!")
\`\`\`
```

## 🎨 Customization

### Update Personal Info

Edit [components/Footer.tsx](components/Footer.tsx):
- Update GitHub link
- Add Twitter/LinkedIn
- Change email address

### Add More Projects

Edit [app/projects/page.tsx](app/projects/page.tsx):
- Add more projects to the array
- Update descriptions and tags

### Change Colors

The site uses Tailwind CSS. Main colors:
- Blue: `bg-blue-600`, `text-blue-600`
- Purple: `bg-purple-600`, `text-purple-600`
- Gray: `bg-gray-900`, `text-gray-700`

## 📊 Setup Analytics & Ads

### Google AdSense

1. Apply for AdSense: https://www.google.com/adsense
2. Get your client ID (e.g., `ca-pub-1234567890123456`)
3. Create `.env.local`:
   ```bash
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-YOUR-ID-HERE
   ```
4. Get ad unit IDs and update slot IDs in components

### Google Analytics

1. Create GA4 property: https://analytics.google.com
2. Get Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_ID=G-YOUR-ID-HERE
   ```

## 🚀 Deploy to Railway

### Step 1: Push to GitHub

```bash
cd /home/son/Desktop/GitHub/sonpham-portfolio

# Initialize git
git init
git add .
git commit -m "Initial commit: Portfolio website"

# Create repo on GitHub, then:
git remote add origin https://github.com/sonpham-org/sonpham-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Railway

1. Go to https://railway.app
2. Click "New Project"
3. Choose "Deploy from GitHub repo"
4. Select `sonpham-portfolio`
5. Railway auto-detects Next.js and deploys!

### Step 3: Add Environment Variables

In Railway dashboard:
- Go to your service
- Click "Variables" tab
- Add:
  - `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
  - `NEXT_PUBLIC_GA_ID`

### Step 4: Add Custom Domain

1. In Railway service settings → "Domains"
2. Click "Add Domain"
3. Enter `sonpham.net`
4. Follow DNS instructions (see DNS_GUIDE.md)

## 🔧 Deploy Other Projects

### ARC Creator

```bash
cd /home/son/Desktop/GitHub/arc-creator

# railway.json already created!
git add railway.json
git commit -m "Add Railway config"
git push

# Then in Railway:
# 1. New Service → Deploy from GitHub
# 2. Select arc-creator repo
# 3. Add domain: arc.sonpham.net
```

### Wealth of Agents

Similar process - create Railway service and point to the repo.

## 📚 Documentation

- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)**: Complete Railway deployment walkthrough
- **[DNS_GUIDE.md](DNS_GUIDE.md)**: DNS configuration for HostGator
- **[README.md](README.md)**: Technical documentation

## 🐛 Common Issues

### Port Already in Use

```bash
# Find and kill process on port 3001
lsof -ti:3001 | xargs kill -9

# Or use a different port
PORT=3002 npm run dev
```

### Build Errors

```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

### Blog Posts Not Showing

- Check file is in `content/blog/`
- Ensure filename ends with `.mdx`
- Verify frontmatter is valid YAML
- Restart dev server

## 🎯 Next Steps

1. **Write Your First Real Post**: Replace sample posts with your content
2. **Customize Design**: Update colors, fonts, layout to match your style
3. **Add Projects**: Document your work in the projects section
4. **Setup Analytics**: Get insights on your visitors
5. **Deploy**: Get it live on Railway
6. **Share**: Promote your new portfolio!

## 💡 Ideas for Enhancement

- Add newsletter signup (ConvertKit, Substack)
- Integrate comments (Giscus, Utterances)
- Add dark mode toggle
- Create project detail pages
- Add resume/CV download
- Implement search functionality
- Add RSS feed for blog

## 🆘 Need Help?

- **Railway Docs**: https://docs.railway.app
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **MDX**: https://mdxjs.com

---

**You're all set!** 🎉

Your portfolio website is ready to deploy and show the world what you're building!
