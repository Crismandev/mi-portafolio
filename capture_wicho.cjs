const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const site = { url: 'https://www.tiendawichoenlinea.com', base: 'wicho_featured' };
  
  const devices = [
    { name: 'desktop', width: 1920, height: 1080 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 }
  ];

  try {
    console.log('Lanzando Puppeteer para Wicho...');
    const browser = await puppeteer.launch({ 
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    const page = await browser.newPage();

    console.log(`\nProcesando: ${site.url}`);
    try {
      // Usar domcontentloaded para que no espere peticiones lentas (como analíticas o ads)
      await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      
      // Esperar 8 segundos forzosos para renderizado
      await new Promise(r => setTimeout(r, 8000));
      
      for (const device of devices) {
        await page.setViewport({ width: device.width, height: device.height });
        await new Promise(r => setTimeout(r, 1500));

        const filepath = path.join(__dirname, `public/assets/images/projects/${site.base}_${device.name}.webp`);
        await page.screenshot({ path: filepath, type: 'webp', quality: 80 });
        console.log(`[OK] Captura guardada: ${site.base}_${device.name}.webp`);
      }
    } catch (e) {
      console.error(`[ERROR] Falló la captura para ${site.url}:`, e.message);
    }

    await browser.close();
    console.log('\nFinalizado Wicho!');
  } catch (err) {
    console.error('Error fatal:', err);
  }
})();
