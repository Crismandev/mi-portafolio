const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Intentaremos usar ffmpeg (que suele estar preinstalado en Linux) para la conversión
const imgDir = path.join(__dirname, 'public/assets/images/projects');
const files = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];

files.forEach((file, index) => {
  const inputPath = path.join(imgDir, file);
  const outputPath = path.join(imgDir, `sticker_swap_mobile_${index + 1}.webp`);
  
  if (fs.existsSync(inputPath)) {
    try {
      console.log(`Convirtiendo ${file} a WebP...`);
      // Convertir a WebP
      execSync(`ffmpeg -y -i "${inputPath}" -vcodec libwebp -lossless 0 -q:v 80 "${outputPath}"`, { stdio: 'ignore' });
      // Eliminar el JPEG original
      fs.unlinkSync(inputPath);
      console.log(`✅ Convertido y guardado como sticker_swap_mobile_${index + 1}.webp`);
    } catch (err) {
      console.error(`❌ Error convirtiendo ${file}:`, err.message);
      // Si ffmpeg falla, intentamos usar sharp via npx
      try {
        execSync(`npx sharp-cli -i "${inputPath}" -o "${outputPath}"`, { stdio: 'inherit' });
        fs.unlinkSync(inputPath);
      } catch (err2) {
         console.error('Sharp también falló:', err2.message);
      }
    }
  }
});
