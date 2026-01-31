# Railway Deployment Guide

Complete guide for deploying the multi-project portfolio on Railway.

## Project Structure

```
Railway Project: "sonpham-net"
├── Service 1: portfolio (sonpham-portfolio repo)
│   └── Domain: sonpham.net
├── Service 2: arc-creator (arc-creator repo)
│   └── Domain: arc.sonpham.net
└── Service 3: wealth-of-agents (wealth-of-agents repo)
    └── Domain: agents.sonpham.net
```

## Step 1: Create Railway Project

1. Go to [Railway.app](https://railway.app)
2. Click "New Project"
3. Name it "sonpham-net"

## Step 2: Deploy Portfolio Service

1. In Railway project, click "+ New Service"
2. Select "Deploy from GitHub repo"
3. Choose `sonpham-org/sonpham-portfolio`
4. Railway auto-detects Next.js and deploys
5. Add environment variables:
   ```
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
6. In Settings → Domains, add custom domain: `sonpham.net`

## Step 3: Deploy ARC Creator Service

1. Click "+ New Service"
2. Select "Deploy from GitHub repo"
3. Choose `sonpham-org/arc-creator`
4. Add environment variables (if needed)
5. In Settings → Domains, add custom domain: `arc.sonpham.net`

## Step 4: Deploy Wealth of Agents Service

1. Click "+ New Service"
2. Select "Deploy from GitHub repo"
3. Choose `sonpham-org/wealth-of-agents`
4. Add environment variables (if needed)
5. In Settings → Domains, add custom domain: `agents.sonpham.net`

## Step 5: Configure DNS at HostGator

### For Main Domain (sonpham.net)

1. Log into HostGator cPanel
2. Go to "Zone Editor" or "DNS Management"
3. Add/Update these records:

```
Type: A
Host: @
Points to: [Get from Railway - Settings → Networking]
TTL: 3600

Type: CNAME
Host: www
Points to: sonpham.net
TTL: 3600
```

### For Subdomains

```
Type: CNAME
Host: arc
Points to: [Your Railway domain for arc-creator]
TTL: 3600

Type: CNAME
Host: agents
Points to: [Your Railway domain for wealth-of-agents]
TTL: 3600
```

## Step 6: Wait for DNS Propagation

- DNS changes can take 1-48 hours
- Check status: `dig sonpham.net` or use [whatsmydns.net](https://whatsmydns.net)
- Railway will auto-provision SSL certificates once DNS is verified

## Step 7: Verify Deployment

Test each domain:
- https://sonpham.net
- https://arc.sonpham.net
- https://agents.sonpham.net

## Troubleshooting

### Domain Not Working

1. Check DNS propagation
2. Verify Railway domain settings
3. Check for typos in DNS records
4. Wait 24 hours for full propagation

### SSL Certificate Issues

- Railway auto-provisions SSL via Let's Encrypt
- Ensure DNS is properly pointing to Railway
- SSL provisioning can take a few minutes after DNS verification

### Build Failures

Check Railway logs:
1. Click on service
2. Go to "Deployments" tab
3. Click on failed deployment
4. Review build logs

## Cost Estimate

Railway Pricing:
- **Hobby Plan**: $5/month per service
- **3 services**: ~$15/month total
- Free $5 credit monthly (reduces to $10/month)

Includes:
- Automatic deployments
- SSL certificates
- Custom domains
- Unlimited bandwidth

## CI/CD Setup

Railway auto-deploys on:
- Push to main branch
- Pull request merges

To disable auto-deploy:
1. Go to service settings
2. Toggle "Auto Deploy" off

## Environment Variables Best Practices

1. Never commit .env files
2. Use .env.example as template
3. Set variables in Railway dashboard
4. Restart services after env changes

## Monitoring

Railway provides:
- Real-time logs
- Metrics dashboard
- Deployment history
- Resource usage

Access via Railway dashboard → [Service] → Observability

## Next Steps

1. ✅ Deploy all services
2. ✅ Configure DNS
3. ✅ Verify domains
4. 📝 Write more blog posts
5. 🎨 Customize design
6. 📊 Setup Google Analytics
7. 💰 Configure AdSense
8. 🚀 Launch!

## Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- HostGator Support: https://www.hostgator.com/help

---

Last updated: January 30, 2026
