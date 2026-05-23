# 📋 Asset Checklist — Haitham Akil Portfolio

Complete this checklist before deploying to production. All items must be gathered before the site is live.

---

## 🎬 Videos (9 Total)

### Motion Graphics (3 videos, 9:16 vertical)
- [ ] **motion-01.mp4** — Export from editor, place in `/public/videos/`
  - Poster: `motion-01.jpg` in `/public/posters/`
  - Target size: 30–50 MB (optimized)
  
- [ ] **motion-02.mp4** — Same specs
  - Poster: `motion-02.jpg`
  
- [ ] **motion-03.mp4** — Same specs
  - Poster: `motion-03.jpg`

### Editing & Color Grading (2 videos, 9:16 vertical)
- [ ] **edit-01.mp4** — Export from editor
  - Poster: `edit-01.jpg`
  - Target size: 30–50 MB
  
- [ ] **edit-02.mp4** — Same specs
  - Poster: `edit-02.jpg`

### Videography (1 video, 16:9 landscape)
- [ ] **video-01.mp4** — Hero/showcase video
  - Poster: `video-01.jpg`
  - Target size: 100–200 MB (can be larger due to 16:9 format)

### Instagram Reels (3 videos, 9:16 vertical)
- [ ] **reel-01.mp4** — Social reel
  - Poster: `reel-01.jpg`
  - Target size: 30–50 MB
  
- [ ] **reel-02.mp4** — Same specs
  - Poster: `reel-02.jpg`
  
- [ ] **reel-03.mp4** — Same specs
  - Poster: `reel-03.jpg`

---

## 🖼️ Images

### Poster Images (Recommended)
- [ ] All 9 poster JPGs created (first frame of each video)
  - **Location:** `/public/posters/`
  - **Naming:** Match MP4 names (e.g., `motion-01.jpg` for `motion-01.mp4`)
  - **Size:** ~200–400 KB per image
  - **Dimensions:** Match video aspect ratio (9:16 or 16:9)
  - **Format:** JPEG (not PNG, to keep size down)

### Open Graph Image
- [ ] **og-image.jpg** created for social sharing
  - **Location:** `/public/og-image.jpg`
  - **Size:** ~100–200 KB
  - **Dimensions:** 1200×630 px (standard OG ratio 1.9:1)
  - **Content:** Show your brand / hero shot / portfolio preview
  - **Used for:** Facebook, Twitter, LinkedIn previews when site is shared

### Favicon
- [ ] **favicon.ico** placed in `/public/`
  - **Location:** `/public/favicon.ico`
  - **Size:** 16×16 or 32×32 px or multi-resolution
  - **Format:** .ico or convert from PNG

---

## 📝 Copy & Links

### Bio Section (`components/Hero.tsx`)
- [ ] Final bio text provided (currently placeholder)
  - Max ~150 words
  - Replace lines ~40–43

### Contact Links (`components/Footer.tsx`)
- [ ] Email address decided
  - Update line ~23: `href="mailto:your-email@example.com"`
  
- [ ] Instagram handle decided
  - Update line ~28: `href="https://instagram.com/your-handle"`

---

## 🎨 Personalization

### Optional Customizations
- [ ] **Color tweaks** — Edit color tokens in `/app/globals.css` if needed
  - Gold, bone, mute text colors adjustable
  
- [ ] **Typography** — Playfair Display & Inter are locked in, but fonts can be swapped in `app/layout.tsx`
  
- [ ] **Section reordering** — Change order of sections in `app/page.tsx` if desired
  
- [ ] **Footer tagline** — Change "© 2026 Haitham Akil" in `components/Footer.tsx` (line ~41)

---

## 🌐 Deployment Preparation

### Before Pushing to GitHub
- [ ] Run `npm run build` locally — **zero errors**
- [ ] Test on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Test keyboard navigation (Tab key must highlight gold focus rings)
- [ ] Open DevTools Console → **zero errors**, zero warnings
- [ ] All videos playing correctly in lightbox
- [ ] Test on real 4G network (throttle in DevTools)

### Before Vercel Deploy
- [ ] GitHub repo created and code pushed
- [ ] Vercel account created (free tier OK)
- [ ] Project linked to GitHub in Vercel dashboard
- [ ] Automatic deployments enabled

### After Vercel Deploy
- [ ] Visit live URL and verify all content loads
- [ ] Run Lighthouse audit (target 95+)
- [ ] Test on real mobile device (not just DevTools)
- [ ] Share link with friends for feedback
- [ ] Set up custom domain (optional, can add later)

---

## 📊 Video Export Specs

**Recommended settings from your editor (Adobe Premiere / Final Cut):**

### For 9:16 Reels (Motion, Editing, Reels)
```
Resolution: 1080 × 1920 px (or 1440 × 2560 px)
Codec: H.264 (AVC)
Bitrate: 5–8 Mbps (adjust for 30–50 MB target)
Frame rate: 24 or 30 fps
Audio: AAC, 128 kbps (if needed)
Container: MP4
```

### For 16:9 Videography
```
Resolution: 1920 × 1080 px or 2560 × 1440 px (4K OK)
Codec: H.264 (AVC)
Bitrate: 8–15 Mbps (adjust for 100–200 MB target)
Frame rate: 24 or 30 fps
Audio: AAC, 128–192 kbps (if needed)
Container: MP4
```

**Optional: Further compression**
```bash
# If files are still too large, use FFmpeg:
ffmpeg -i video.mp4 -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k video-final.mp4
# crf: 18–28 (lower = better quality, larger file. 22–23 is sweet spot)
# preset: fast / medium / slow / veryslow (slower = better compression)
```

---

## ✅ Final Handoff Checklist

Before marking the site as "complete":

- [ ] **All 9 videos** in `/public/videos/` with matching filenames in `/data/videos.ts`
- [ ] **All 9 posters** in `/public/posters/` (optional but crucial for UX)
- [ ] **og-image.jpg** in `/public/`
- [ ] **Bio text** finalized and reviewed
- [ ] **Email + Instagram** links active and tested
- [ ] **Favicon** added (or default favicon is acceptable)
- [ ] **Build passes:** `npm run build` — zero errors
- [ ] **Lighthouse score:** 95+ all metrics
- [ ] **Mobile tested:** Fully responsive at 375px+
- [ ] **Keyboard navigation:** Tab key + Enter + Escape all work
- [ ] **Live on Vercel:** Custom domain configured (optional)
- [ ] **SEO verified:** OpenGraph image shows in social previews

---

## 🎯 Timeline Estimate

- **Videos ready (9 exports):** 2–4 hours
- **Posters created (9 JPGs):** 30 min
- **OG image designed:** 30 min
- **Bio & links finalized:** 15 min
- **Local testing & tweaks:** 30 min
- **Deploy to Vercel:** 10 min

**Total: ~4–6 hours from video exports to live site**

---

## 📞 Support

If you need help with:
- **Video compression:** Use FFmpeg commands above or ask for CLI help
- **Poster creation:** Screenshot first frame in your editor, export as JPEG
- **Copy/branding:** Finalize text in a Google Doc, copy into components
- **Deployment issues:** Check Vercel logs in dashboard → Deployments → scroll

---

**Good luck! Ready to ship when you are. 🚀**
