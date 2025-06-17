#!/usr/bin/env node

/* eslint-disable no-console, no-unused-vars */

/**
 * Vercel/Production OG Image Generation Script
 * Optimized for deployment environments
 */

const path = require('path');
const fs = require('fs');

const generateProductionOG = async () => {
  try {
    console.log('🚀 [VERCEL] Generating OG image for production deployment...');

    // Import the main generation function
    const { generateFallbackOG, takeScreenshotFromHTML } = require('./generate-og-puppeteer');

    const outputDir = path.join(__dirname, '../static');
    const outputPath = path.join(outputDir, 'og.png');

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('📄 Generating clean snapshot (no build info overlay)...');

    // Generate HTML template with deployment info
    const html = generateFallbackOG();

    // Take screenshot with production-optimized settings
    const puppeteer = require('puppeteer');
    let browser;

    try {
      browser = await puppeteer.launch({
        headless: 'new',
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--disable-gpu',
          '--disable-extensions',
          '--no-first-run',
          '--no-zygote',
          '--single-process', // Better for containerized environments like Vercel
        ],
      });

      const page = await browser.newPage();
      await page.setViewport({
        width: 1200,
        height: 630,
        deviceScaleFactor: 1, // Optimize for production speed
      });

      await page.setContent(html);
      await new Promise(resolve => setTimeout(resolve, 500)); // Reduced wait time

      const screenshot = await page.screenshot({
        width: 1200,
        height: 630,
        type: 'png',
      });

      // Save the image
      fs.writeFileSync(outputPath, screenshot);
      console.log(`✅ [VERCEL] Production OG image generated: ${outputPath}`);

      // Log file size for debugging
      const stats = fs.statSync(outputPath);
      console.log(`📊 [VERCEL] Image size: ${(stats.size / 1024).toFixed(2)} KB`);

      return outputPath;
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  } catch (error) {
    console.error('❌ [VERCEL] Error generating production OG image:', error);

    // Fallback: try to copy existing OG image if available
    const fallbackPath = path.join(__dirname, '../static/og.png');
    if (fs.existsSync(fallbackPath)) {
      console.log('🔄 [VERCEL] Using existing fallback OG image');
      return fallbackPath;
    }

    throw error;
  }
};

// Run if called directly
if (require.main === module) {
  generateProductionOG()
    .then(path => {
      console.log(`🎉 [VERCEL] OG image ready for deployment: ${path}`);
      process.exit(0);
    })
    .catch(error => {
      console.error('💥 [VERCEL] Failed to generate OG image:', error);
      process.exit(1);
    });
}

module.exports = { generateProductionOG };
