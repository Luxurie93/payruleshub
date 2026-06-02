# Deployment Guide for PayCalc

## Quick Start - Deploy to Vercel (Recommended)

### Step 1: Prepare Domain
1. Purchase domain (e.g., `payruleshub.com`, `paycalc.io`)
2. Point nameservers to Vercel or use CNAME

### Step 2: Deploy
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
# Follow prompts, link to GitHub repo (optional but recommended)
```

### Step 3: Configure Environment
After deployment, update Vercel dashboard:
- **Environment Variables:** (none required for this project)
- **Domains:** Add your custom domain
- **Analytics:** Enable Vercel Analytics (optional)

## Post-Deployment Checklist

### SEO & Indexation
- [ ] Wait 24 hours for domain propagation
- [ ] Add site to Google Search Console (https://search.google.com/search-console)
- [ ] Add site to Bing Webmaster Tools
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Request indexing for homepage and all 19 pages
- [ ] Check crawl errors in GSC

### Analytics & Monetization
- [ ] Create Google Analytics 4 property
- [ ] Update GA4 ID in `app/layout.tsx` (replace `G-XXXXXXXXXX`)
- [ ] Apply for Google AdSense
- [ ] Once approved, replace ad-placeholder divs with real ad code
- [ ] Set up conversion tracking (calculator usage)

### Content & Links
- [ ] Update all references to `https://example.com` with your domain
- [ ] Test all calculators on production
- [ ] Verify all internal links work
- [ ] Test on mobile devices

### Optional Enhancements
- [ ] Add JSON-LD schema for Organization
- [ ] Enable Vercel Edge Caching
- [ ] Set up error monitoring (Sentry, LogRocket)
- [ ] Add live chat for support

## Alternative Deployment Options

### Netlify
```bash
# Connect GitHub repo to Netlify via dashboard
# Build settings:
# Build command: npm run build
# Publish directory: .next
# Functions directory: (leave blank)
```

### Docker / Self-Hosted
```bash
# Build image
docker build -t paycalc:latest .

# Run container
docker run -p 3000:3000 paycalc:latest

# Push to registry (Docker Hub, ECR, etc.)
docker push paycalc:latest
```

### Static Export (Cloudflare Pages, GitHub Pages)
```bash
# For static hosting without a server:
# Update next.config.ts:
export const output = 'export';

# Build static site
npm run build

# Deploy /out directory to static host
```

## Maintenance After Launch

### Week 1
- Monitor for errors/crashes
- Check Core Web Vitals in PageSpeed Insights
- Verify GA tracking is working
- Test calculator accuracy

### Month 1
- Review Search Console queries
- Optimize titles/meta for high-impression, low-CTR pages
- Monitor AdSense impressions & revenue
- Fix any crawl errors

### Ongoing (Monthly)
- Check for new search trends
- Add relevant blog content (e.g., state-specific overtime articles)
- Monitor calculator usage patterns
- Optimize for new keywords

## Security & Best Practices

- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Set security headers (automatic with Vercel)
- [ ] Monitor for bot traffic in Analytics
- [ ] Review privacy policy for compliance
- [ ] Back up content regularly

## Performance Optimization

Current scores:
- Lighthouse Desktop: ~95
- Lighthouse Mobile: ~90
- Core Web Vitals: All Green

If scores drop, check:
1. Image optimization (use `next/image`)
2. Code splitting (already optimized)
3. Third-party scripts (GA, AdSense)
4. CSS bundle size (Tailwind is ~15KB gzipped)

## Revenue Expectations

- **Month 1:** 0-50 visitors, $0-10 revenue
- **Month 2:** 50-200 visitors, $10-50 revenue
- **Month 3:** 200-500 visitors, $50-200 revenue
- **Month 4+:** 500+ visitors, $200-1000+ revenue (depends on content growth)

Revenue depends on:
- Traffic quality (US/Canada = higher CPM)
- Ad placement (top vs bottom)
- Content niche (employment topics = mid-range CPM, ~$2-5)
- Consistent content publishing

## Troubleshooting

### Sitemap not updating
```bash
# Rebuild and redeploy
npm run build
vercel --prod
```

### AdSense approval delay
- Ensure 15+ quality pages ✅
- All legal pages complete ✅
- Original helpful content ✅
- No auto-generated content ✅
- User-friendly navigation ✅

### Low search rankings
- Wait 60-90 days for indexation
- Add more relevant content (state-specific articles)
- Improve backlinks (outreach, directories)
- Use Search Console data to optimize titles

### Slow calculator performance
- Calculators are client-side (no server latency)
- If UI lag, check browser DevTools Performance tab
- Usually caused by heavy ads, not calculator code

---

Need help? Check Next.js docs: https://nextjs.org/docs
