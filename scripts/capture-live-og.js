/* eslint-disable no-console */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * Live Screenshot OG Generator
 * Captures the actual hero section when dev server is running
 */

const captureLiveOG = async (siteUrl = 'http://localhost:8000') => {
  let browser;

  try {
    console.log('🚀 Launching browser for live capture...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const page = await browser.newPage();

    // Set viewport to OG image dimensions
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 2,
    });

    console.log(`📸 Loading ${siteUrl}...`);

    // Navigate to your site
    await page.goto(siteUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for hero section to load
    await page.waitForSelector('section', { timeout: 10000 });

    // Inject minimal CSS to optimize for OG capture
    await page.addStyleTag({
      content: `
        /* Hide navigation */
        nav, header, .nav, .navbar {
          display: none !important;
        }
        
        /* Optimize hero section for OG image */
        main section:first-child {
          min-height: 630px !important;
          height: 630px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
          padding: 0 80px !important;
        }
        
        /* Enhance text visibility */
        h1, h2, h3, p {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
        }
        
        /* Remove any scrollbars */
        body {
          overflow: hidden !important;
        }
      `,
    });

    // Wait for styles to apply
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('📷 Capturing clean screenshot...');

    // Take screenshot
    const screenshot = await page.screenshot({
      width: 1200,
      height: 630,
      type: 'png',
    });

    return screenshot;
  } catch (error) {
    console.error('❌ Error capturing live screenshot:', error);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

const main = async () => {
  try {
    console.log('🎯 Capturing live OG screenshot...');

    const outputDir = path.join(__dirname, '../static');
    const outputPath = path.join(outputDir, 'og.png');

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Capture from live site
    const screenshot = await captureLiveOG('http://localhost:8000');

    // Save the image
    fs.writeFileSync(outputPath, screenshot);
    console.log(`✅ Live OG screenshot saved: ${outputPath}`);

    return outputPath;
  } catch (error) {
    console.error(
      '❌ Failed to capture live screenshot. Make sure your dev server is running at http://localhost:8000',
    );
    console.error('💡 Run "gatsby develop" first, then try this script again');
    throw error;
  }
};

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error(error.message);
    process.exit(1);
  });
}

module.exports = { captureLiveOG, main };
