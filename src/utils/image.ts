import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Paths
export const fullDir = path.resolve(__dirname, '../../assets/full');
export const thumbDir = path.resolve(__dirname, '../../assets/thumb');

// Resize function
export async function processImage(
  filename: string,
  width: number,
  height: number,
): Promise<string> {
  const inputPath = path.join(fullDir, `${filename}.jpg`);
  const outputPath = path.join(thumbDir, `${filename}_${width}x${height}.jpg`);

  // إذا الصورة المصغرة موجودة مسبقاً → رجّعها
  if (fs.existsSync(outputPath)) {
    return outputPath;
  }

  // إذا الصورة الأصلية مش موجودة → ارمي خطأ
  if (!fs.existsSync(inputPath)) {
    throw new Error('Image not found in full directory');
  }

  // إنشاء الصورة المصغرة
  await sharp(inputPath).resize(width, height).toFile(outputPath);

  return outputPath;
}

// Helper: Parse positive integer from string
export function parsePositiveInt(value: string, defaultValue?: number): number | undefined {
  const parsed = parseInt(value, 10);
  if (isNaN(parsed) || parsed <= 0) {
    return defaultValue;
  }
  return parsed;
}

// ✅ helper للتأكد إذا الملف موجود
export function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}
