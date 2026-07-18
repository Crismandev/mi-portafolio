const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const sites = [
    { url: 'https://www.tiendawichoenlinea.com', base: 'wicho_featured' },
    { url: 'https://pixeliaweb.netlify.app/', base: 'pixelia' },
    { url: 'https://3i-atlas.netlify.app/', base: 'atlas_landing' },
    { url: 'https://mariesalon.netlify.app/', base: 'marie_salon_banner' },
    { url: 'https://test-boda.netlify.app/', base: 'invitacion_boda_new' },
    { url: 'https://grillmasterweb.netlify.app/', base: 'grillmaster' }
  ];

  const devices = [
    { name: 'desktop', width: 1920, height: 1080 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 }
  ];

  try {
    console.log('Lanzando Puppeteer...');
    const browser = await puppeteer.launch({ 
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    const page = await browser.newPage();

    for (const site of sites) {
      console.log(`\nProcesando: ${site.url}`);
      
      try {
        await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 45000 });
        
        // Esperar unos segundos extra para animaciones o pre-loaders
        await new Promise(r => setTimeout(r, 5000));
        
        for (const device of devices) {
          await page.setViewport({ width: device.width, height: device.height });
          
          // Refrescar o hacer scroll ligero si es necesario, pero para capturas directas basta esperar un segundo tras el resize
          await new Promise(r => setTimeout(r, 1000));

          const filepath = path.join(__dirname, `public/assets/images/projects/${site.base}_${device.name}.webp`);
          
          await page.screenshot({ 
            path: filepath, 
            type: 'webp', 
            quality: 80 
          });
          
          console.log(`[OK] Captura guardada: ${site.base}_${device.name}.webp`);
        }
      } catch (e) {
        console.error(`[ERROR] Falló la captura para ${site.url}:`, e.message);
      }
    }

    await browser.close();
    console.log('\n¡Todas las capturas han sido generadas!');
  } catch (err) {
    console.error('Error fatal de Puppeteer:', err);
  }
})();
