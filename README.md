# Haitham Akil — Portfolio

A cinematic, dark-mode portfolio site for videographer and editor **Haitham Akil**, built with **Next.js 14+**, **Tailwind CSS**, and **Framer Motion**.

## 🎬 Features

- **Single-page app** with smooth scroll navigation
- **Responsive grid layouts** for video content (3-up, 2-up, 1-up, full-width 16:9)
- **Video playback** (local MP4s or Vimeo embeds) with fullscreen lightbox
- **Dark, cinematic design** — ink black + gold accents, inspired by *Vogue Films* / *Apple keynotes*
- **Framer Motion** animations (fade-in, stagger, scale-on-hover)
- **Accessibility** — semantic HTML, keyboard navigation, ARIA labels, visible gold focus rings
- **Lighthouse 95+** ready (Performance, A11y, Best Practices, SEO)
- **Mobile-first** responsive design (tested at 375 / 768 / 1440 px)
- **Vercel deployment** ready

---

## 📁 Project Structure

```
haitham-portfolio/
├── app/
│   ├── layout.tsx              # Global metadata, fonts, nav
│   ├── page.tsx                # Main page
│   ├── globals.css             # Global styles + smooth scroll
│   ├── providers.tsx           # Client-side providers
│   └── favicon.ico
├── components/
│   ├── Nav.tsx                 # Fixed header
│   ├── Hero.tsx                # Bio section
│   ├── MotionSection.tsx       # Motion graphics (3 reels)
│   ├── EditingSection.tsx      # Editing & color grading (2 reels)
│   ├── VideoSection.tsx        # Hero videography (1x 16:9)
│   ├── ReelsSection.tsx        # Instagram reels (3 reels)
│   ├── Footer.tsx              # Contact + copyright
│   ├── VideoTile.tsx           # Reusable video tile
│   ├── VideoLightbox.tsx       # Fullscreen modal
│   └── ScrollCue.tsx           # Animated scroll indicator
├── data/
│   └── videos.ts               # ⭐ SINGLE SOURCE OF TRUTH for all 9 videos
├── lib/
│   ├── animations.ts           # Framer Motion variants
│   └── utils.ts                # Helper functions
├── public/
│   ├── videos/                 # 📹 MP4 files go here
│   ├── posters/                # 🖼️  First-frame JPGs go here
│   ├── favicon.ico
│   └── og-image.jpg
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── package.json
└── README.md                   # This file
```

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Videos

Place your MP4 files in `/public/videos/` and poster images in `/public/posters/`:

**Expected filenames:**
- Motion graphics: `motion-01.mp4`, `motion-02.mp4`, `motion-03.mp4`
- Editing: `edit-01.mp4`, `edit-02.mp4`
- Videography: `video-01.mp4`
- Instagram reels: `reel-01.mp4`, `reel-02.mp4`, `reel-03.mp4`

**Poster images (optional, but recommended):**
Same names with `.jpg` extension, e.g. `motion-01.jpg`, `edit-01.jpg`, etc.
- **Size:** ~200–400 KB (first frame of video)
- **Dimensions:** Match video aspect ratio (9:16 or 16:9)

### 3. Edit `/data/videos.ts`

This is the **single file** you edit to manage all video sources. Each entry has:

```ts
{
  id: 'motion-01',
  type: 'local',          // or 'vimeo'
  src: 'motion-01.mp4',   // filename (local) or Vimeo ID (vimeo)
  poster: 'motion-01.jpg',
  aspect: '9/16',         // or '16/9'
  category: 'motion',     // or 'editing', 'videography', 'reel'
  label: 'Motion 01',     // optional display name
}
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📹 Video Sources — Local vs. Vimeo

### Option A: Self-host (Local MP4s) — **Recommended**

**Pros:**
- Full control over quality
- No third-party dependencies
- Works offline
- Better performance for smaller files

**Setup:**
1. Export MP4s from your editor (H.264 codec, **AAC audio** if sound needed)
2. Drop files into `/public/videos/`
3. In `/data/videos.ts`, set `type: 'local'` and `src: 'filename.mp4'`

**Optimize MP4 sizes:**
```bash
# For 9:16 reels (typical 30–50 MB):
ffmpeg -i motion-01.mp4 -c:v libx264 -preset veryslow -crf 23 -c:a aac motion-01-opt.mp4

# For 16:9 hero videos (aim for 100–200 MB):
ffmpeg -i video-01.mp4 -c:v libx264 -preset slow -crf 22 -c:a aac video-01-opt.mp4
```

### Option B: Stream via Vimeo — **For larger files**

**Pros:**
- Handles large files (no server storage limits)
- Vimeo's CDN ensures fast streaming
- Built-in analytics

**Setup:**
1. Upload MP4 to Vimeo.com (create account if needed)
2. Copy the **Vimeo ID** from the URL: `https://vimeo.com/123456789` → ID is `123456789`
3. In `/data/videos.ts`, change the entry to:
   ```ts
   {
     id: 'motion-01',
     type: 'vimeo',
     src: '123456789',      // Vimeo video ID only
     aspect: '9/16',
     category: 'motion',
   }
   ```

**Switch entries between local ↔ Vimeo:**
- Change `type: 'local'` to `type: 'vimeo'`
- Update `src` field accordingly

---

## 🎨 Brand & Design System

### Colors (defined in `app/globals.css` and `tailwind.config.ts`)

```ts
--color-ink:     '#0a0a0a'   // base background
--color-ink-2:   '#141414'   // raised surfaces
--color-gold:    '#d4af37'   // primary accent
--color-gold-2:  '#b8941f'   // hover state
--color-bone:    '#f5f1e8'   // primary text
--color-mute:    '#8a8a8a'   // secondary text
```

### Typography

- **Headings:** `Playfair Display` (serif, 700/900 weight)
- **Body / UI:** `Inter` (sans-serif, 400/500/600 weight)
- Loaded via Google Fonts in `app/layout.tsx`

### Motion

- **Easing:** `[0.22, 1, 0.36, 1]` (ease-out-expo — smooth, not bouncy)
- **Stagger:** `0.12s` delay between child animations
- **Hover:** subtle scale-up (1.02x) + gold glow
- **Respects:** `prefers-reduced-motion` media query

---

## 📝 Customization

### Update Bio Text

Edit `components/Hero.tsx`, line ~40:
```tsx
<p className="text-sm md:text-base text-bone/80 leading-relaxed">
  Your custom bio here...
</p>
```

### Change Contact Links

Edit `components/Footer.tsx`, lines ~23–33:
```tsx
<motion.a href="mailto:your-email@example.com">Email</motion.a>
<motion.a href="https://instagram.com/your-handle" target="_blank">Instagram</motion.a>
```

### Adjust Responsive Breakpoints

Edit grid layouts in section components (e.g., `components/MotionSection.tsx`):
```tsx
<motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* sm: 1 col, md: 2 cols, lg: 3 cols */}
</motion.div>
```

---

## 🌐 Deployment to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/haitham-portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel

**Option A: Vercel CLI**
```bash
npm install -g vercel
vercel
# Follow prompts; Vercel auto-detects Next.js
```

**Option B: Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select your `haitham-portfolio` repo
5. Click **"Deploy"**

### Step 3: Configure Domain (Optional)

In Vercel dashboard → Settings → Domains:
- Add custom domain (e.g., `haithamakil.com`)
- Add DNS records from Vercel's instructions

---

## ✅ Pre-Deployment Checklist

- [ ] All 9 MP4 files in `/public/videos/` (or Vimeo IDs in `/data/videos.ts`)
- [ ] All poster images in `/public/posters/` (optional but recommended)
- [ ] Bio text updated in `components/Hero.tsx`
- [ ] Email and Instagram links updated in `components/Footer.tsx`
- [ ] `og-image.jpg` added to `/public/` for social sharing (~1200×630 px)
- [ ] Run `npm run build` locally — **no errors**
- [ ] Test responsiveness: 375px (mobile), 768px (tablet), 1440px (desktop)
- [ ] Run Lighthouse audit (`npm run build`, then audit in DevTools)
- [ ] Check all accessible focus rings (Tab key navigation)

---

## 🛠️ Troubleshooting

### Videos not loading

1. **Check file paths:** Is the filename exactly correct in `/data/videos.ts`?
   - E.g., `motion-01.mp4` not `Motion 01.mp4` or `motion-01.mov`

2. **Browser DevTools:** Open Console → check for 404 errors
   - Open Network tab → check if MP4 is being requested

3. **For Vimeo:** Is the video ID correct?
   - Get from URL: `https://vimeo.com/123456789` → ID is `123456789`

### Build errors

1. **TypeScript:** Run `npm run build` and read errors carefully
2. **Clear cache:** `rm -rf .next && npm run build`
3. **Dependencies:** `npm install` to ensure all packages are present

### Lighthouse scores low

- **Performance:** Compress MP4s to <50 MB (9:16) or <200 MB (16:9)
- **A11y:** Check focus rings (Tab key), add alt text to images
- **SEO:** Ensure metadata is set in `app/layout.tsx`

---

## 📚 Tech Stack

- **Next.js 14+** — React framework with App Router
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Utility-first styling + custom theme
- **Framer Motion** — Scroll/hover animations
- **next/font** — Google Fonts (Playfair Display, Inter)
- **Vercel** — Deployment platform

---

## 📄 Environment Variables

**None required** for basic site. For future integrations (CMS, analytics):

```bash
# Example: add to .env.local
NEXT_PUBLIC_VIMEO_ACCESS_TOKEN=your_token_here
```

---

## 🎯 Performance Targets

| Metric         | Target |
|----------------|--------|
| Lighthouse (all) | 95+   |
| First Contentful Paint (FCP) | <1.8s |
| Cumulative Layout Shift (CLS) | <0.1 |
| Largest Contentful Paint (LCP) | <2.5s |
| Mobile (375px) | Fully responsive |
| Tablet (768px) | Fully responsive |
| Desktop (1440px) | Fully responsive |

---

## 🤝 Contributing

This is a single-user portfolio site. For personal updates:
1. Edit `/data/videos.ts` to swap video sources
2. Edit component files for copy changes
3. Run `npm run build` to test
4. Deploy to Vercel (auto-deploys on `git push`)

---

## 📞 Support

Questions about the codebase? Check:
- **Framer Motion docs:** https://www.framer.com/motion/
- **Next.js docs:** https://nextjs.org/docs
- **Tailwind CSS v4:** https://tailwindcss.com/docs

---

**Built with ❤️ for Haitham Akil**

Deployed at: `https://haitham-portfolio.vercel.app` (or your custom domain)
