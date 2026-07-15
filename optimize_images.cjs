const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directorio base a escanear
const publicDir = path.join(__dirname, 'public');

// Función para encontrar todos los archivos en un directorio
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

async function optimizeImages() {
  console.log('Iniciando optimización de imágenes...');
  const allFiles = getAllFiles(publicDir);
  
  // Filtrar solo las imágenes que queremos convertir
  const imageFiles = allFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
  });

  console.log(`Se encontraron ${imageFiles.length} imágenes para procesar.`);

  let successCount = 0;
  let errorCount = 0;

  for (const file of imageFiles) {
    const dir = path.dirname(file);
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const newFilePath = path.join(dir, `${basename}.webp`);

    try {
      // Usar sharp para convertir a webp
      await sharp(file)
        .webp({ quality: 80, effort: 6 }) // Alta calidad, buena compresión
        .toFile(newFilePath);
      
      console.log(`[OK] Convertido: ${path.basename(file)} -> ${basename}.webp`);
      
      // Eliminar archivo original
      fs.unlinkSync(file);
      console.log(`     Eliminado original: ${path.basename(file)}`);
      
      successCount++;
    } catch (err) {
      console.error(`[ERROR] Fallo al convertir ${file}:`, err.message);
      errorCount++;
    }
  }

  console.log(`\nProceso completado.`);
  console.log(`Imágenes convertidas exitosamente: ${successCount}`);
  console.log(`Errores: ${errorCount}`);
}

optimizeImages().catch(console.error);
