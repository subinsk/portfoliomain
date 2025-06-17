/* eslint-disable no-console */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * Advanced OG Image Generator using Puppeteer
 * Takes a screenshot of the hero section and creates a custom OG image
 */

const generateScreenshotOG = async (siteUrl = 'http://localhost:8000') => {
  let browser;

  try {
    console.log('🚀 Launching browser...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
      ],
    });

    const page = await browser.newPage();

    // Set viewport to OG image dimensions
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 2, // For high-DPI images
    });

    console.log(`📸 Navigating to ${siteUrl}...`);

    // Navigate to your site
    await page.goto(siteUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for hero section to load
    await page.waitForSelector('section', { timeout: 10000 });

    // Inject custom styles to optimize for OG image
    await page.addStyleTag({
      content: `
        body {
          background: linear-gradient(135deg, #0a192f 0%, #112240 100%) !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }
        
        /* Hide navigation and other elements */
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
          position: relative !important;
        }
  
        
        /* Enhance text visibility */
        h1, h2, h3, p {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
        }        /* Add subtle grid pattern */
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: -1;
        }
      `,
    });
    // Wait a bit for styles to apply
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('📷 Taking screenshot...');
    // Take screenshot
    const screenshot = await page.screenshot({
      width: 1200,
      height: 630,
      type: 'png',
    });

    return screenshot;
  } catch (error) {
    console.error('❌ Error generating screenshot:', error);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

const generateFallbackOG = () => {
  // Create a fallback HTML page for screenshot
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, height=630">
    <title>Subin S K - Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            width: 1200px;
            height: 630px;
            background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #ccd6f6;
            overflow: hidden;
            position: relative;
        }
        
        .container {
            padding: 80px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .intro {
            font-family: 'Courier New', monospace;
            color: #64ffda;
            font-size: 24px;
            margin-bottom: 20px;
        }
        
        .name {
            font-size: 72px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #ccd6f6;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        .tagline {
            font-size: 64px;
            font-weight: 600;
            color: #8892b0;
            margin-bottom: 30px;
        }
        
        .description {
            font-size: 20px;
            color: #8892b0;
            line-height: 1.5;
            max-width: 600px;
            margin-bottom: 40px;
        }
        
        .decorative {
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
        }
        
        .grid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
        }
    </style>
</head>
<body>
    <div class="grid"></div>
    <div class="decorative"></div>
    <div class="container">
        <div class="intro">Hi, my name is</div>
        <h1 class="name">Subin S K</h1>
        <h2 class="tagline">I build things for the web.</h2>        <p class="description">
            Software Engineer passionate about designing and developing full-stack web applications 
            that are fast, intuitive, and visually engaging—focused on delivering seamless digital experiences.
        </p>
    </div>
</body>
</html>
  `;

  return html;
};

const takeScreenshotFromHTML = async html => {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
    await page.setContent(html);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const screenshot = await page.screenshot({
      width: 1200,
      height: 630,
      type: 'png',
    });

    return screenshot;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

const main = async () => {
  try {
    console.log('🎨 Generating dynamic OG image with Puppeteer...');

    const outputDir = path.join(__dirname, '../static');
    const outputPath = path.join(outputDir, 'og.png');

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    let screenshot;

    try {
      // Try to screenshot from local development server first
      console.log('🔄 Attempting to capture from local site...');
      screenshot = await generateScreenshotOG('http://localhost:8000');
    } catch (error) {
      console.log('📄 Local site not available, generating clean snapshot from template...');
      const html = generateFallbackOG();
      screenshot = await takeScreenshotFromHTML(html);
    }

    // Save the image
    fs.writeFileSync(outputPath, screenshot);
    console.log(`✅ Clean OG snapshot generated: ${outputPath}`);

    return outputPath;
  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    throw error;
  }
};

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generateScreenshotOG, generateFallbackOG, takeScreenshotFromHTML, main };
