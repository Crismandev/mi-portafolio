const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log('Navigating to http://localhost:3001...');
    // Just wait for load event, not networkidle, because HMR websocket keeps network active
    await page.goto('http://localhost:3001', { waitUntil: 'load', timeout: 15000 });
    
    // Wait an extra 3 seconds for WebGL and Framer Motion animations to settle
    await new Promise(r => setTimeout(r, 3000)); 

    console.log('Taking full screenshot for og:image...');
    await page.screenshot({ path: 'public/assets/images/portfolio-preview.png' });

    console.log('Taking cropped screenshot for favicon...');
    // Crop a square from the center of the hero section for the favicon
    await page.screenshot({ 
      path: 'public/favicon.png',
      clip: { x: 800, y: 300, width: 320, height: 320 }
    });

    await browser.close();
    console.log('Screenshots captured successfully!');
  } catch (err) {
    console.error('Error capturing screenshot:', err);
    process.exit(1);
  }
})();
