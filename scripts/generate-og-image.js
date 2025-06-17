/* eslint-disable no-console, no-unused-vars */
const fs = require('fs');
const path = require('path');

/**
 * Dynamic OG Image Generator for Gatsby Portfolio
 * Generates an SVG-based OG image with current timestamp and website content
 */

const generateOGImage = () => {
  const currentDate = new Date();
  const deploymentId = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD format
  const buildTime = currentDate.toLocaleTimeString();

  // SVG template for OG image
  const svgTemplate = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a192f;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#112240;stop-opacity:1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bg)"/>
      
      <!-- Grid pattern overlay -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#64ffda" stroke-width="0.5" opacity="0.1"/>
      </pattern>
      <rect width="1200" height="630" fill="url(#grid)"/>
      
      <!-- Main content container -->
      <g transform="translate(80, 100)">
        <!-- Header -->
        <text x="0" y="0" font-family="monospace" font-size="24" fill="#64ffda" opacity="0.8">
          Hi, my name is
        </text>
        
        <!-- Name -->
        <text x="0" y="80" font-family="sans-serif" font-size="72" font-weight="bold" fill="#ccd6f6" filter="url(#glow)">
          Subin S K
        </text>
        
        <!-- Tagline -->
        <text x="0" y="140" font-family="sans-serif" font-size="64" font-weight="600" fill="#8892b0">
          I build things for the web.
        </text>
        
        <!-- Description -->
        <text x="0" y="200" font-family="sans-serif" font-size="20" fill="#8892b0" opacity="0.9">
          Software Engineer passionate about designing and developing
        </text>
        <text x="0" y="230" font-family="sans-serif" font-size="20" fill="#8892b0" opacity="0.9">
          full-stack web applications that solve real-world problems.
        </text>
        
        <!-- Build info -->
        <g transform="translate(0, 300)">
          <rect x="0" y="0" width="400" height="80" fill="#64ffda" fill-opacity="0.1" rx="8"/>
          <text x="20" y="25" font-family="monospace" font-size="14" fill="#64ffda">
            Build: ${deploymentId} • ${buildTime}
          </text>
          <text x="20" y="45" font-family="monospace" font-size="14" fill="#64ffda" opacity="0.8">
            subinsk.vercel.app
          </text>
          <text x="20" y="65" font-family="monospace" font-size="12" fill="#64ffda" opacity="0.6">
            Generated: ${currentDate.toISOString()}
          </text>
        </g>
        
        <!-- Decorative elements -->
        <circle cx="900" cy="50" r="3" fill="#64ffda" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="950" cy="80" r="2" fill="#64ffda" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="920" cy="120" r="1.5" fill="#64ffda" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      <!-- Footer accent -->
      <rect x="0" y="610" width="1200" height="20" fill="#64ffda" opacity="0.1"/>
    </svg>
  `;

  return svgTemplate.trim();
};

const convertSvgToPng = async svgContent =>
  // For production, you might want to use a more robust SVG to PNG conversion
  // For now, we'll save as SVG and let the browser handle it
  svgContent;
const main = async () => {
  try {
    console.log('🎨 Generating dynamic OG image...');

    const svgContent = generateOGImage();
    const outputDir = path.join(__dirname, '../static');
    const outputPath = path.join(outputDir, 'og.svg');

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write SVG file
    fs.writeFileSync(outputPath, svgContent);
    console.log(`✅ Dynamic OG image generated: ${outputPath}`);

    // Also create a PNG version if needed (for better social media compatibility)
    // This would require additional dependencies like sharp or canvas
    console.log('💡 Note: Consider adding PNG conversion for better social media support');

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

module.exports = { generateOGImage, main };
