# DNS Configuration Guide

Complete DNS setup for sonpham.net multi-project architecture.

## Overview

We're setting up:
- `sonpham.net` → Main portfolio site
- `arc.sonpham.net` → ARC Creator
- `agents.sonpham.net` → Wealth of Agents

## HostGator cPanel Steps

### 1. Access DNS Management

1. Log into HostGator cPanel
2. Navigate to "Domains" section
3. Click "Zone Editor" or "Advanced DNS Zone Editor"

### 2. DNS Records to Configure

#### Main Domain (sonpham.net)

**A Record:**
```
Type: A
Name: @ (or sonpham.net)
Address: [Railway IP - get from Railway dashboard]
TTL: 14400 (or 3600)
```

**WWW Subdomain:**
```
Type: CNAME
Name: www
CNAME: sonpham.net
TTL: 14400
```

#### ARC Creator Subdomain

```
Type: CNAME
Name: arc
CNAME: [railway-provided-domain].railway.app
TTL: 14400
```

Example: `arc-creator-production.up.railway.app`

#### Wealth of Agents Subdomain

```
Type: CNAME
Name: agents  
CNAME: [railway-provided-domain].railway.app
TTL: 14400
```

## Getting Railway Domains

For each Railway service:

1. Go to Railway dashboard
2. Click on the service (e.g., arc-creator)
3. Go to "Settings" tab
4. Click "Networking" or "Domains"
5. Find the default Railway domain (e.g., `yourservice.up.railway.app`)
6. Copy this domain

## Alternative: Direct IP Method

If Railway provides IP addresses instead of domains:

```
Type: A
Name: arc
Address: [Railway IP for arc-creator]
TTL: 14400

Type: A
Name: agents
Address: [Railway IP for wealth-of-agents]
TTL: 14400
```

## Verification Commands

After setting up DNS, verify with these commands:

```bash
# Check main domain
dig sonpham.net

# Check subdomains
dig arc.sonpham.net
dig agents.sonpham.net

# Check DNS propagation
nslookup sonpham.net
nslookup arc.sonpham.net
```

## Online Tools

Use these to check DNS propagation:
- https://whatsmydns.net
- https://dnschecker.org
- https://mxtoolbox.com/DNSLookup.aspx

## Timeframes

- **Propagation time**: 1-48 hours (usually 1-4 hours)
- **SSL Certificate**: Auto-provisions after DNS verification (5-30 minutes)

## Troubleshooting

### DNS Not Propagating

1. **Clear local DNS cache:**
   ```bash
   # Linux
   sudo systemd-resolve --flush-caches
   
   # macOS
   sudo dscacheutil -flushcache
   ```

2. **Check TTL:** Lower TTL speeds up propagation
3. **Wait:** Sometimes it just takes time

### SSL Certificate Not Provisioning

1. Ensure DNS is fully propagated
2. Check Railway logs for SSL provisioning errors
3. Verify domain ownership in Railway
4. Wait 30 minutes after DNS verification

### Wrong IP/Domain

1. Double-check Railway provided values
2. Remove old DNS records
3. Ensure no conflicts in DNS settings

## Complete DNS Record Table

| Type  | Name    | Value/Target                          | TTL   |
|-------|---------|---------------------------------------|-------|
| A     | @       | [Railway IP]                          | 14400 |
| CNAME | www     | sonpham.net                           | 14400 |
| CNAME | arc     | [arc-service].railway.app             | 14400 |
| CNAME | agents  | [agents-service].railway.app          | 14400 |

## Security Considerations

1. **Enable DNSSEC** (if HostGator supports)
2. **Use CloudFlare** (optional) for:
   - DDoS protection
   - Faster DNS resolution
   - Additional SSL options
   - Caching

## CloudFlare Alternative (Optional)

If you want to use CloudFlare:

1. Sign up at cloudflare.com
2. Add sonpham.net
3. Update nameservers at HostGator
4. Configure DNS in CloudFlare
5. Enable proxy (orange cloud) for protection
6. Railway will work with CloudFlare

## Post-Configuration Checklist

- [ ] A record for @ pointing to Railway
- [ ] CNAME for www
- [ ] CNAME for arc subdomain
- [ ] CNAME for agents subdomain
- [ ] Verified DNS propagation
- [ ] SSL certificates active
- [ ] All sites accessible via HTTPS

## Support Resources

- **HostGator DNS Docs**: https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom
- **Railway Custom Domains**: https://docs.railway.app/deploy/exposing-your-app#custom-domains
- **DNS Explained**: https://www.cloudflare.com/learning/dns/what-is-dns/

---

Last updated: January 30, 2026
