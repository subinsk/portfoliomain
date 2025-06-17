/* eslint-disable no-console */
const { main } = require('./generate-og-puppeteer');

/**
 * Development version of OG image generation
 * This version is designed to work with a running dev server
 */

const generateOGDev = async () => {
  try {
    console.log('🎨 Generating OG image for development...');

    // Check if dev server is running
    try {
      const fetch = require('node-fetch');
      const response = await fetch('http://localhost:8000', { timeout: 5000 });
      if (response.ok) {
        console.log('✅ Dev server detected at http://localhost:8000');
        console.log('📸 Capturing live screenshot from your portfolio...');
      }
    } catch (error) {
      console.log('⚠️  Dev server not running - will use fallback template');
      console.log('💡 To capture from live site, run "gatsby develop" first');
    }

    await main();
    console.log('🎉 OG image generated successfully!');
  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
};

// Run if called directly
if (require.main === module) {
  generateOGDev();
}

module.exports = { generateOGDev };
