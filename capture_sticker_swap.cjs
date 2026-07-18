const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const site = { url: 'https://sticker-swap-mmxpvid6l-crismans-projects.vercel.app/album', base: 'sticker_swap' };
  
  const devices = [
    { name: 'desktop', width: 1920, height: 1080 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 812 }
  ];

  try {
    console.log('Lanzando Puppeteer para Sticker Swap...');
    const browser = await puppeteer.launch({ 
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    const page = await browser.newPage();

    console.log(`\nProcesando: ${site.url}`);
    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 });
      
      // Esperar unos segundos para asegurar que carguen los assets visuales (álbum virtual)
      await new Promise(r => setTimeout(r, 6000));
      
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
    console.log('\nFinalizado Sticker Swap!');
  } catch (err) {
    console.error('Error fatal:', err);
  }
})();
