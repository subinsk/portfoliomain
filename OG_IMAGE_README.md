# Dynamic OG Image Generation

This portfolio now includes **dynamic Open Graph (OG) image generation** that creates a fresh, up-to-date social media preview image for each build or deployment.

## 🎯 What It Does

- **Automatic Generation**: Creates a new OG image every time you build your portfolio
- **Clean Snapshots**: Captures your actual hero section without overlays or build info
- **Smart Fallback**: If your dev server isn't running, it generates a clean HTML template-based image
- **Live Screenshot**: When possible, captures a screenshot of your actual hero section
- **Build Integration**: Automatically runs before each build to ensure fresh images
- **Vercel Compatible**: Works seamlessly with Vercel deployments

## 🚀 Features

- **1200x630 optimized** for social media platforms
- **High-DPI support** (2x scale factor) for crisp images
- **Clean snapshots** without timestamps or build info overlays
- **Pure portfolio content** showing your actual hero section
- **Visual enhancements** including subtle grid patterns and gradients

## 📋 Usage

### Automatic (Recommended)

The OG image is automatically generated during each build:

```bash
npm run build  # Generates OG image, then builds the site
```

### Manual Generation

Generate the OG image manually:

```bash
npm run generate-og       # Production version (clean template fallback)
npm run generate-og:dev   # Development version (tries live screenshot first)
npm run capture-live-og   # Force live screenshot (requires dev server)
```

### Development Workflow

1. Start your dev server: `gatsby develop`
2. Generate OG with live screenshot: `npm run capture-live-og`
3. The script will capture your live portfolio hero section as a clean snapshot

## 🔧 How It Works

### Build Process

1. **Pre-build**: `npm run generate-og` runs automatically
2. **Screenshot Attempt**: Tries to capture from `http://localhost:8000`
3. **Fallback**: If no dev server, uses a styled HTML template
4. **Save**: Creates `static/og.png` which Gatsby copies to `public/og.png`
5. **Build**: Gatsby builds the site with the fresh OG image

### File Structure

```
scripts/
├── generate-og-puppeteer.js   # Main OG generation script (with fallback)
├── generate-og-dev.js         # Development-friendly version
├── generate-og-vercel.js      # Production-optimized version
└── capture-live-og.js         # Live screenshot capture (requires dev server)

static/
└── og.png                     # Generated OG image (gets copied to public/)

gatsby-config.js               # References the dynamic OG image
```

## 🎨 Customization

### Modify the Template

Edit the `generateFallbackOG()` function in `scripts/generate-og-puppeteer.js` to customize:

- Colors and branding
- Layout and typography
- Content and messaging
- Background patterns (no build info overlays)

### Screenshot Styling

Modify the injected CSS in `generateScreenshotOG()` to customize how the live screenshot looks:

- Hide/show elements
- Adjust hero section layout
- Add overlays or branding

### Image Dimensions

Current: 1200x630 (optimal for most platforms)
To change: Update the `setViewport` and `screenshot` options in both functions.

## 🌐 Platform Compatibility

The generated OG images work with:

- **Twitter/X** - Displays as Twitter Cards
- **Facebook** - Shows in link previews
- **LinkedIn** - Appears in shared posts
- **Discord** - Embedded link previews
- **Slack** - Link unfurling
- **WhatsApp** - Link previews

## 🔍 Troubleshooting

### Missing Dependencies

If you get puppeteer errors:

```bash
npm install puppeteer --legacy-peer-deps
```

### Dev Server Issues

- Ensure `gatsby develop` is running on port 8000
- Check that the site loads at `http://localhost:8000`
- Use `npm run capture-live-og` for live screenshot capture

### Image Not Updating

- Check that `static/og.png` exists and has recent content
- Verify the build completed successfully
- Clear browser cache when testing OG previews

## 📝 Notes

- The generated image captures your actual hero section for authentic previews
- On Vercel/Netlify, this runs automatically during deployment
- No manual intervention needed - just push your code!
- Images are optimized for fast loading and broad compatibility

## 🎯 Next Steps

- **Live Deployment**: Push to Vercel to see it working on production
- **Testing**: Use social media debuggers to verify OG images load correctly:
  - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
