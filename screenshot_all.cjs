const puppeteer = require('puppeteer');

(async () => {
  const sites = [
    { url: 'https://www.tiendawichoenlinea.com', file: 'wicho_featured.png' },
    { url: 'https://pixeliaweb.netlify.app/', file: 'pixelia.png' },
    { url: 'https://3i-atlas.netlify.app/', file: 'atlas_landing.png' },
    { url: 'https://mariesalon.netlify.app/', file: 'marie_salon_banner.jpg' },
    { url: 'https://test-boda.netlify.app/', file: 'invitacion_boda_new.png' },
    { url: 'https://grillmasterweb.netlify.app/', file: 'grillmaster.png' }
  ];

  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    for (const site of sites) {
      console.log(`Snapping ${site.url} -> ${site.file}...`);
      try {
        await page.goto(site.url, { waitUntil: 'load', timeout: 30000 });
        // Wait 4s for animations and external assets to load
        await new Promise(r => setTimeout(r, 4000));
        
        // Define path
        const filepath = `public/assets/images/projects/${site.file}`;
        
        if (site.file.endsWith('.jpg')) {
            await page.screenshot({ path: filepath, type: 'jpeg', quality: 90 });
        } else {
            await page.screenshot({ path: filepath });
        }
        console.log(`Success: ${site.file}`);
      } catch (e) {
        console.error(`Failed to snap ${site.url}:`, e.message);
      }
    }

    await browser.close();
    console.log('All done!');
  } catch (err) {
    console.error('Puppeteer error:', err);
  }
})();
